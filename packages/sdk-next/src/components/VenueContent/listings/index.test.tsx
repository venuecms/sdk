import { renderToReadableStream } from "react-dom/server.browser";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { ListingComponents } from "./index";
import { listingHandlers, splitContentEntries } from "./index";

// The listing layer's whole job is to query and hand the results over, so the
// endpoints are mocked and the assertions are about what was asked for and what
// the component received.
// `connection()` marks the listing's subtree dynamic, and throws outside a Next
// request scope — which is where these tests render. Next's dynamic marking is
// not what they exercise, so it is stubbed rather than worked around. Kept as a
// spy because dropping the call fails silently: the throw it guards against is
// swallowed by the listing's own boundaries, so only an assertion catches it.
vi.mock("next/server", () => ({ connection: vi.fn(() => Promise.resolve()) }));

vi.mock("../../../lib/api", () => ({
  getEvents: vi.fn(),
  getNews: vi.fn(),
  getPages: vi.fn(),
  getProducts: vi.fn(),
  getProfiles: vi.fn(),
  getSite: vi.fn(),
}));

const api = await import("../../../lib/api");

const getEvents = vi.mocked(api.getEvents);
const getProfiles = vi.mocked(api.getProfiles);
const getSite = vi.mocked(api.getSite);

/** Shapes a list response the way the endpoints return one. */
const listing = (records: unknown[]) =>
  ({ data: { records, count: records.length } }) as never;

const site = { id: "site_1", timeZone: "Europe/Berlin" };

/**
 * Renders to a string through the streaming renderer.
 *
 * A listing awaits, so `renderToStaticMarkup` cannot render one — it has no way
 * to wait on a suspended subtree. Streaming is also what the assertions below
 * about Suspense are actually testing.
 */
const render = async (element: React.ReactNode) => {
  const stream = await renderToReadableStream(<>{element}</>);
  await stream.allReady;
  return new Response(stream).text();
};

const eventNode = (attrs: Record<string, unknown>) => ({
  type: "eventListing",
  attrs,
});

const renderListing = async (
  components: ListingComponents,
  node: { type: string; attrs: Record<string, unknown> },
) => {
  const handlers = listingHandlers(components);
  const Handler = handlers[node.type];

  if (!Handler) {
    throw new Error(`no handler registered for ${node.type}`);
  }

  return render(<Handler node={node} />);
};

beforeEach(() => {
  vi.clearAllMocks();
  getSite.mockResolvedValue({ data: site } as never);
});

describe("splitContentEntries", () => {
  it("routes class names to classes and listing components to handlers", () => {
    const { classes, handlers } = splitContentEntries({
      p: "my-4",
      h1: "text-2xl",
      eventListing: () => null,
    });

    expect(classes).toEqual({ p: "my-4", h1: "text-2xl" });
    expect(Object.keys(handlers)).toEqual(["eventListing"]);
  });

  it("registers no handler for a listing the caller left off", () => {
    const { handlers } = splitContentEntries({ p: "my-4" });

    expect(handlers).toEqual({});
  });
});

describe("listing blocks", () => {
  it("queries the endpoint and hands the records to the component", async () => {
    const events = [
      { id: "e1", slug: "first-show" },
      { id: "e2", slug: "second-show" },
    ];
    getEvents.mockResolvedValue(listing(events));

    const html = await renderListing(
      {
        eventListing: ({ records }) => (
          <ul>
            {records.map((event) => (
              <li key={event.id}>{event.slug}</li>
            ))}
          </ul>
        ),
      },
      eventNode({ limit: 2 }),
    );

    expect(html).toContain("first-show");
    expect(html).toContain("second-show");
  });

  it("passes the site alongside the records", async () => {
    getEvents.mockResolvedValue(listing([{ id: "e1", slug: "first-show" }]));

    const html = await renderListing(
      { eventListing: ({ site: resolved }) => <span>{resolved?.timeZone}</span> },
      eventNode({}),
    );

    expect(html).toContain("Europe/Berlin");
  });

  it("turns the node's attrs into the endpoint's query", async () => {
    getEvents.mockResolvedValue(listing([{ id: "e1" }]));

    await renderListing(
      { eventListing: () => null },
      eventNode({ limit: "3", listingType: "upcoming", tags: "jazz, live" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({
        limit: 3,
        upcoming: true,
        tags: ["jazz", "live"],
      }),
    );
  });

  it("drops an attribute the endpoint would reject", async () => {
    getEvents.mockResolvedValue(listing([{ id: "e1" }]));

    await renderListing(
      { eventListing: () => null },
      eventNode({ limit: "not-a-number", orderBy: "haxx", dir: "sideways" }),
    );

    const query = getEvents.mock.calls[0]?.[0] ?? {};

    expect(query).not.toHaveProperty("limit");
    expect(query).not.toHaveProperty("orderBy");
    expect(query).not.toHaveProperty("dir");
  });

  it("renders nothing when the listing matched no records", async () => {
    getEvents.mockResolvedValue(listing([]));
    const component = vi.fn(() => <span>drawn</span>);

    const html = await renderListing(
      { eventListing: component },
      eventNode({}),
    );

    expect(component).not.toHaveBeenCalled();
    expect(html).not.toContain("drawn");
  });

  it("renders nothing when the endpoint failed in-band", async () => {
    getEvents.mockResolvedValue({ data: undefined, error: "bad" } as never);
    const component = vi.fn(() => <span>drawn</span>);

    await renderListing({ eventListing: component }, eventNode({}));

    expect(component).not.toHaveBeenCalled();
  });

  it("keeps the rest of the document when a listing's request throws", async () => {
    getEvents.mockRejectedValue(new Error("network down"));

    const handlers = listingHandlers({
      eventListing: () => <span>THE_LISTING_DREW</span>,
    });
    const Handler = handlers.eventListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    const html = await render(
      <div>
        <p>before</p>
        <Handler node={eventNode({})} />
        <p>after</p>
      </div>,
    );

    // The prose around the block survives, which is the guarantee. Asserted on
    // a marker the renderer cannot coin itself: on a server render React streams
    // a dev-only error template whose stack trace carries this file's own path,
    // so a substring like "list" would match that rather than the component.
    expect(html).toContain("before");
    expect(html).toContain("after");
    expect(html).not.toContain("THE_LISTING_DREW");
  });

  it("marks the listing dynamic before reading request-time data", async () => {
    const { connection } = await import("next/server");
    getEvents.mockResolvedValue(listing([{ id: "e1", slug: "first-show" }]));

    await renderListing({ eventListing: () => null }, eventNode({}));

    // Without this a prerender under `cacheComponents` bails out on the clock
    // and the configured site key that the query below reads.
    expect(vi.mocked(connection)).toHaveBeenCalled();
  });

  it("still renders a profile listing when the site read failed", async () => {
    getSite.mockResolvedValue({ data: undefined } as never);
    getProfiles.mockResolvedValue(listing([{ slug: "ana-profile" }]));

    const handlers = listingHandlers({
      profileListing: ({ records }) => (
        <ul>
          {records.map((profile) => (
            <li key={profile.slug}>{profile.slug}</li>
          ))}
        </ul>
      ),
    });
    const Handler = handlers.profileListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    const html = await render(
      <Handler node={{ type: "profileListing", attrs: {} }} />,
    );

    expect(html).toContain("ana-profile");
  });
});
