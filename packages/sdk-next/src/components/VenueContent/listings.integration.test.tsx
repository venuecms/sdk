/**
 * The seam a template actually writes against: one map on `contentStyles`,
 * carrying both class names and listing components, passed to VenueContent.
 */
import { renderToReadableStream } from "react-dom/server.browser";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { VenueContent } from "./index";

// `connection()` marks the listing's subtree dynamic, and throws outside a Next
// request scope — which is where these tests render. Next's dynamic marking is
// not what they exercise, so it is stubbed rather than worked around.
vi.mock("next/server", () => ({ connection: () => Promise.resolve() }));

vi.mock("../../lib/api", () => ({
  getEvents: vi.fn(),
  getNews: vi.fn(),
  getPages: vi.fn(),
  getProducts: vi.fn(),
  getProfiles: vi.fn(),
  getSite: vi.fn(),
}));

const api = await import("../../lib/api");
const getEvents = vi.mocked(api.getEvents);
const getSite = vi.mocked(api.getSite);

const render = async (element: React.ReactNode) => {
  const stream = await renderToReadableStream(<>{element}</>);
  await stream.allReady;
  return new Response(stream).text();
};

beforeEach(() => {
  vi.clearAllMocks();
  getSite.mockResolvedValue({ data: { id: "site_1" } } as never);
});

describe("VenueContent with listing blocks", () => {
  it("styles prose and renders a queried listing from one map", async () => {
    getEvents.mockResolvedValue({
      data: { records: [{ id: "e1", slug: "opening-night" }], count: 1 },
    } as never);

    const html = await render(
      <VenueContent
        content={
          {
            contentJSON: {
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Some prose." }],
                },
                { type: "eventListing", attrs: { limit: 5 } },
              ],
            },
          } as never
        }
        contentStyles={{
          p: "prose-paragraph",
          eventListing: ({ records }) => (
            <ul data-testid="events">
              {records.map((event) => (
                <li key={event.id}>{event.slug}</li>
              ))}
            </ul>
          ),
        }}
      />,
    );

    // The class name landed on the paragraph the renderer already drew...
    expect(html).toContain("prose-paragraph");
    expect(html).toContain("Some prose.");
    // ...and the listing was queried and drawn by the supplied component.
    expect(html).toContain("opening-night");
    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 5 }),
    );
  });

  it("leaves a listing node unrendered when the map has no component for it", async () => {
    const html = await render(
      <VenueContent
        content={
          {
            contentJSON: {
              content: [{ type: "eventListing", attrs: {} }],
            },
          } as never
        }
        contentStyles={{ p: "prose-paragraph" }}
      />,
    );

    // No component means no handler, so the renderer falls through to its
    // missing-type path rather than querying.
    expect(getEvents).not.toHaveBeenCalled();
    expect(html).not.toContain("<ul");
  });
});
