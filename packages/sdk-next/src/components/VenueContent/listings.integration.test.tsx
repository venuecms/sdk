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

  it("gives two identical blocks pagers that move independently", async () => {
    // The whole chain in one assertion: VenueContent works out each block's
    // param, threads the route's search params down, and the two blocks come
    // back with different ones. Drop the context anywhere along that chain and
    // `links` goes null, which templates read as "draw no pager" — every pager
    // on every site disappears without a single test going red.
    getEvents.mockResolvedValue({
      data: { records: [{ id: "e1", slug: "opening-night" }], count: 30 },
    } as never);

    const params: string[] = [];
    const listingNode = { type: "eventListing", attrs: { limit: 5 } };

    await render(
      <VenueContent
        content={
          {
            contentJSON: { content: [listingNode, { ...listingNode }] },
          } as never
        }
        searchParams={{ locale: "de" }}
        contentStyles={{
          eventListing: ({ pagination }) => {
            if (pagination?.links) {
              params.push(pagination.links.param);
            }
            return null;
          },
        }}
      />,
    );

    expect(params).toHaveLength(2);
    expect(new Set(params).size).toBe(2);
  });

  it("gives a listing no links when the route's params were not passed down", async () => {
    getEvents.mockResolvedValue({
      data: { records: [{ id: "e1", slug: "opening-night" }], count: 30 },
    } as never);

    const seen: (string | null)[] = [];

    await render(
      <VenueContent
        content={
          {
            contentJSON: {
              content: [{ type: "eventListing", attrs: { limit: 5 } }],
            },
          } as never
        }
        contentStyles={{
          eventListing: ({ pagination }) => {
            seen.push(pagination?.links ? pagination.links.param : null);
            return null;
          },
        }}
      />,
    );

    expect(seen).toEqual([null]);
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

  // `components` predates listing components on `contentStyles`, so a caller
  // can have both a raw node handler and a listing component under one key. The
  // handler wins, because it is the more specific thing to have asked for — and
  // it is a plain node renderer, so choosing it also means the block is not
  // queried at all.
  it("lets a raw node handler beat a listing component on the same key", async () => {
    const html = await render(
      <VenueContent
        content={
          {
            contentJSON: {
              content: [{ type: "eventListing", attrs: { limit: 5 } }],
            },
          } as never
        }
        contentStyles={{ eventListing: () => <p>FROM_CONTENT_STYLES</p> }}
        components={{ eventListing: () => <p>FROM_COMPONENTS</p> }}
      />,
    );

    expect(html).toContain("FROM_COMPONENTS");
    expect(html).not.toContain("FROM_CONTENT_STYLES");
    expect(getEvents).not.toHaveBeenCalled();
  });

  // Every key on the map is optional, and the docs tell a template to register
  // only the listings it draws — so the renderer's missing-type warning would
  // fire for a supported configuration, once per such block per request, on a
  // route that is dynamic and therefore uncached.
  it("does not warn about a listing the template chose not to draw", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    await render(
      <VenueContent
        content={
          {
            contentJSON: {
              content: [
                { type: "productListing", attrs: {} },
                { type: "pageListing", attrs: {} },
              ],
            },
          } as never
        }
        contentStyles={{ eventListing: () => null }}
      />,
    );

    expect(warn).not.toHaveBeenCalled();

    // A node type the renderer genuinely does not know is still reported — the
    // warning is what surfaces a typo in the content, and silencing it wholesale
    // is not the fix.
    await render(
      <VenueContent
        content={
          { contentJSON: { content: [{ type: "notANode", attrs: {} }] } } as never
        }
        contentStyles={{ eventListing: () => null }}
      />,
    );

    expect(warn).toHaveBeenCalled();

    warn.mockRestore();
  });
});
