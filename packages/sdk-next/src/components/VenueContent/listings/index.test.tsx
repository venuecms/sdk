import { renderToReadableStream } from "react-dom/server.browser";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { listingParamBase } from "./identity";
import type {
  ListingComponents,
  ListingContext,
  ListingPagination,
  ListingProps,
  PaginatedListingNodeType,
} from "./index";
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

/**
 * The same, for a listing longer than the page it returned — `count` is the
 * total match, so it is what the pagination is derived from.
 */
const listingPage = (records: unknown[], count: number) =>
  ({ data: { records, count } }) as never;

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
  context?: ListingContext,
) => {
  const handlers = listingHandlers(components, context);
  const Handler = handlers[node.type];

  if (!Handler) {
    throw new Error(`no handler registered for ${node.type}`);
  }

  return render(<Handler node={node} />);
};

/**
 * A listing component that records what it was handed, drawing `draw`.
 *
 * The spy has to be declared taking an argument: `vi.fn(() => null)` infers a
 * mock of arity zero, which types every recorded call as an empty tuple and
 * puts the props these tests are about out of reach.
 */
const listingSpy = (draw: () => React.ReactNode = () => null) =>
  vi.fn((_props: RenderedProps) => draw());

/**
 * What a listing component is actually handed.
 *
 * Deliberately wider than any one block's `ListingProps`, so that one spy can
 * stand in for any of them: a component is only assignable where it accepts at
 * least what that block passes. `pagination` is optional for the same reason —
 * `pageListing` types it out of its public props while still being handed
 * `null` at runtime, which is one of the assertions below.
 */
type RenderedProps = {
  records: readonly unknown[];
  site: ListingProps<"eventListing">["site"];
  pagination?: ListingPagination | null;
};

/**
 * The props the spy was handed on its first render.
 *
 * Throws rather than returning undefined when it was never rendered: a listing
 * that drew nothing would otherwise satisfy every `toMatchObject` below by
 * matching against nothing at all.
 */
const propsOf = (spy: ReturnType<typeof listingSpy>): RenderedProps => {
  const props = spy.mock.calls[0]?.[0];

  if (!props) {
    throw new Error("the listing component was never rendered");
  }

  return props;
};

/** The same, narrowed to a block that paginates. */
const paginationOf = (spy: ReturnType<typeof listingSpy>) => {
  const { pagination } = propsOf(spy);

  if (!pagination) {
    throw new Error("expected the block to have pagination");
  }

  return pagination;
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
        upcoming: "true",
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

  it("still draws the records when the endpoint sent no count", async () => {
    // Products and profiles declare `count` optional, so a response may carry
    // records and no total. Deciding on the count alone would drop the whole
    // listing on the floor.
    getProfiles.mockResolvedValue({
      data: { records: [{ slug: "ana-profile" }] },
    } as never);

    const handlers = listingHandlers({
      profileListing: ({ records }) => <span>{records[0]?.slug}</span>,
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

  it("reports an absent count as unknown rather than as the page's length", async () => {
    // A full page and no total is exactly the case where substituting
    // `records.length` both lies about the size of the listing and takes the
    // next page away — the last page looks like the whole set.
    getProfiles.mockResolvedValue({
      data: { records: [{ slug: "a" }, { slug: "b" }] },
    } as never);

    let seen: { count: number | null; hasNext: boolean } | null = null;

    const handlers = listingHandlers({
      profileListing: ({ pagination }) => {
        seen = pagination
          ? { count: pagination.count, hasNext: pagination.hasNext }
          : null;
        return null;
      },
    });
    const Handler = handlers.profileListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    await render(
      <Handler node={{ type: "profileListing", attrs: { limit: 2 } }} />,
    );

    expect(seen).toEqual({ count: null, hasNext: true });
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

    // Awaited before, not merely called before. `connection()` has to have
    // *settled* by the time the query starts, because the point of it is to
    // stop a prerender from reaching a read of the clock and the configured
    // site key. Recording the order the two were entered in would not say that:
    // `Promise.all([connection(), query()])` enters them in this order too, and
    // starts the query while `connection()` is still pending — which is the bug
    // this was written for. So the mock is held open, and the assertion is that
    // nothing queried while it was.
    let release: () => void;
    const held = new Promise<void>((resolve) => {
      release = resolve;
    });

    vi.mocked(connection).mockImplementation(() => held);
    getEvents.mockResolvedValue(listing([{ id: "e1", slug: "first-show" }]));

    const rendered = renderListing({ eventListing: () => null }, eventNode({}));

    try {
      // A few turns of the microtask queue, so a render that started the query
      // alongside `connection()` rather than after it has had every chance to
      // reach the endpoint.
      for (let turn = 0; turn < 10; turn++) {
        await Promise.resolve();
      }

      expect(getEvents).not.toHaveBeenCalled();
    } finally {
      // Whatever the assertion did. A mock left holding an unresolved promise
      // would hang every test after this one, turning one failure into a file
      // of timeouts that say nothing.
      release!();
      vi.mocked(connection).mockImplementation(() => Promise.resolve());
    }

    await rendered;

    expect(getEvents).toHaveBeenCalled();
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

describe("listing pagination", () => {
  // An empty `paramNames` is the interesting case rather than a shortcut: a
  // block absent from the map falls back to hashing its own attrs, which is what
  // keeps handlers built outside the renderer paginating.
  const routeAt = (searchParams: ListingContext["searchParams"]): ListingContext => ({
    searchParams,
    paramNames: new Map(),
  });

  const paramFor = (attrs: Record<string, unknown>) =>
    listingParamBase("eventListing", attrs);

  it("reads the block's page out of the route's search params", async () => {
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 30));

    await renderListing(
      { eventListing: () => null },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "2" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ limit: 10, page: 2 }),
    );
  });

  it("takes the URL's page over the one the author set on the block", async () => {
    const attrs = { limit: 10, page: 4 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 30));

    await renderListing(
      { eventListing: () => null },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "1" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ page: 1 }),
    );
  });

  it("keeps the author's page when the URL is silent about this block", async () => {
    // Threading `searchParams` in is how a caller opts into links. It must not
    // also reset every block whose author started it on a later page — a URL
    // that names no page is not the same as a URL that names page 0.
    const attrs = { limit: 10, page: 4 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 300));

    await renderListing(
      { eventListing: () => null },
      eventNode(attrs),
      routeAt({ locale: "de" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ page: 4 }),
    );
  });

  it("takes an explicit page 0 in the URL over the author's page", async () => {
    const attrs = { limit: 10, page: 4 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 300));

    await renderListing(
      { eventListing: () => null },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "0" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ page: 0 }),
    );
  });

  it("leaves another block's param alone", async () => {
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 30));

    await renderListing(
      { eventListing: () => null },
      eventNode(attrs),
      routeAt({ nws_somethingelse: "3" }),
    );

    expect(getEvents).toHaveBeenCalledWith(
      expect.objectContaining({ page: 0 }),
    );
  });

  it("derives the pagination from the total match, not the page returned", async () => {
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 35));
    const component = listingSpy();

    await renderListing({ eventListing: component }, eventNode(attrs), routeAt({}));

    expect(propsOf(component)).toMatchObject({
      pagination: {
        page: 0,
        pageNumber: 1,
        pageSize: 10,
        count: 35,
        pageCount: 4,
        hasPrev: false,
        hasNext: true,
      },
    });
  });

  it("gives the block links only once the route's params were passed down", async () => {
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 35));
    const component = listingSpy();

    await renderListing({ eventListing: component }, eventNode(attrs));

    expect(propsOf(component)).toMatchObject({
      pagination: { links: null },
    });
  });

  it("points the links at this block's own param", async () => {
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 35));
    const component = listingSpy();

    await renderListing(
      { eventListing: component },
      eventNode(attrs),
      routeAt({ locale: "de", [paramFor(attrs)]: "1" }),
    );

    const { links } = paginationOf(component);

    expect(links?.param).toBe(paramFor(attrs));
    // The unrelated param survives a page change, and the first page drops the
    // block's param rather than writing `=0`.
    expect(links?.prevHref).toBe("?locale=de");
    expect(links?.nextHref).toBe(`?locale=de&${paramFor(attrs)}=2`);
  });

  // Two rules that are each right on their own cancel out here: a page-0 href
  // drops the block's param, and a URL that does not name the block leaves the
  // author's `page` attribute standing. On a block its author started later,
  // that made "Previous" from page 1 jump *forward* to the author's page, and
  // put the pages before it out of the pager's reach entirely. Followed rather
  // than asserted as a string, because the string is only wrong by what the
  // next render makes of it.
  it("returns to the first page from a block its author started later", async () => {
    const attrs = { limit: 10, page: 2 };
    getEvents.mockResolvedValue(listingPage([{ id: "e1" }], 100));

    const onPageOne = listingSpy();
    await renderListing(
      { eventListing: onPageOne },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "1" }),
    );

    const back = paginationOf(onPageOne).links?.prevHref;

    // Read back the way a route hands search params over, so the assertion is
    // on where the link actually lands rather than on how it is spelled.
    const followed = Object.fromEntries(
      new URLSearchParams(back ?? "").entries(),
    );

    const onPageZero = listingSpy();
    await renderListing(
      { eventListing: onPageZero },
      eventNode(attrs),
      routeAt(followed),
    );

    expect(getEvents).toHaveBeenLastCalledWith(
      expect.objectContaining({ page: 0 }),
    );
    expect(paginationOf(onPageZero)).toMatchObject({ page: 0, hasPrev: false });
  });

  it("has no pagination when the author set no page size", async () => {
    getEvents.mockResolvedValue(listing([{ id: "e1" }]));
    const component = listingSpy();

    await renderListing({ eventListing: component }, eventNode({}), routeAt({}));

    expect(propsOf(component)).toMatchObject({ pagination: null });
  });

  it("has no pagination on the pages listing, which does not paginate", async () => {
    const getPages = vi.mocked(api.getPages);
    getPages.mockResolvedValue(listingPage([{ slug: "about" }], 30));
    const component = listingSpy();

    const handlers = listingHandlers({ pageListing: component }, routeAt({}));
    const Handler = handlers.pageListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    await render(<Handler node={{ type: "pageListing", attrs: { limit: 10 } }} />);

    expect(propsOf(component)).toMatchObject({ pagination: null });
  });

  it("still draws a page past the end, so the reader has a link back", async () => {
    // The listing matched 30 records; page 9 of them is empty. Rendering it
    // anyway is what keeps the pager on screen instead of the block vanishing.
    const attrs = { limit: 10 };
    getEvents.mockResolvedValue(listingPage([], 30));
    const component = listingSpy(() => <span>drawn</span>);

    const html = await renderListing(
      { eventListing: component },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "9" }),
    );

    expect(html).toContain("drawn");
    expect(propsOf(component)).toMatchObject({
      records: [],
      pagination: { hasPrev: true, hasNext: false },
    });
  });

  it("keeps a listing that ran out on screen when no count was reported", async () => {
    // Products and profiles may answer without a count, where `hasNext` is
    // "the last page came back full" — so a listing whose length is an exact
    // multiple of its page size offers a next link to nothing. Dropping the
    // block there would delete the listing from the article, and the pager that
    // gets the reader back with it.
    const attrs = { limit: 12 };
    getProfiles.mockResolvedValue({ data: { records: [] } } as never);
    const component = listingSpy(() => <span>drawn</span>);

    const handlers = listingHandlers(
      { profileListing: component },
      routeAt({ [listingParamBase("profileListing", attrs)]: "1" }),
    );
    const Handler = handlers.profileListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    const html = await render(
      <Handler node={{ type: "profileListing", attrs }} />,
    );

    expect(html).toContain("drawn");
    expect(paginationOf(component)).toMatchObject({
      page: 1,
      count: null,
      hasPrev: true,
      hasNext: false,
    });
  });

  it("still renders nothing when the first page of an uncounted listing is empty", async () => {
    getProfiles.mockResolvedValue({ data: { records: [] } } as never);
    const component = listingSpy(() => <span>drawn</span>);

    const handlers = listingHandlers({ profileListing: component }, routeAt({}));
    const Handler = handlers.profileListing;

    if (!Handler) {
      throw new Error("expected a handler");
    }

    const html = await render(
      <Handler node={{ type: "profileListing", attrs: { limit: 12 } }} />,
    );

    expect(html).not.toContain("drawn");
    expect(component).not.toHaveBeenCalled();
  });

  it("does not shift a block that draws no pager", async () => {
    // A paginated node type with no page size still has a param name — it is a
    // hash of the attributes, not of the page size — but it reports no
    // pagination, so moving its records with nothing on screen to explain it
    // would be a listing that silently changed under the reader.
    const attrs = {};
    getEvents.mockResolvedValue(listing([{ id: "e1" }]));
    const component = listingSpy();

    await renderListing(
      { eventListing: component },
      eventNode(attrs),
      routeAt({ [paramFor(attrs)]: "3" }),
    );

    expect(getEvents.mock.calls[0]?.[0]).not.toHaveProperty("page");
    expect(propsOf(component)).toMatchObject({ pagination: null });
  });
});
