import { afterEach, describe, expect, it, vi } from "vitest";

import {
  minuteRoundedNow,
  buildEventListingQuery,
  buildNewsListingQuery,
  buildPageListingQuery,
  buildProductListingQuery,
  buildProfileListingQuery,
  parseEventListingAttributes,
  parseNewsListingAttributes,
  parsePageListingAttributes,
  parseProductListingAttributes,
  parseProfileListingAttributes,
} from "./params";

const NOW = 1_700_000_000_000;

describe("parseEventListingAttributes", () => {
  it("reads the attrs a contentJSON node carries", () => {
    expect(
      parseEventListingAttributes({
        listingType: "past",
        limit: 4,
        page: 2,
        orderBy: "startDate",
        dir: "desc",
        featured: true,
        rootOnly: true,
        tags: ["jazz", "live"],
        query: "trio",
        lt: 123,
        gt: 456,
        legacyId: "abc",
      }),
    ).toEqual({
      listingType: "past",
      limit: 4,
      page: 2,
      orderBy: "startDate",
      dir: "desc",
      featured: true,
      rootOnly: true,
      tags: ["jazz", "live"],
      query: "trio",
      lt: 123,
      gt: 456,
      legacyId: "abc",
    });
  });

  it("falls back to the block defaults for an attribute-less node", () => {
    expect(parseEventListingAttributes({})).toEqual({
      listingType: "upcoming",
      limit: null,
      page: null,
      orderBy: null,
      dir: null,
      featured: false,
      rootOnly: false,
      tags: [],
      query: null,
      lt: null,
      gt: null,
      legacyId: null,
    });
  });

  it("rejects values outside the block's contract", () => {
    const attrs = parseEventListingAttributes({
      listingType: "sideways",
      limit: 0,
      page: -1,
      orderBy: "title",
      dir: "ltr",
      lt: 0,
      gt: -5,
      query: "",
    });

    // limit=0 is falsy server-side and would return every record, so the
    // block treats it as unset rather than passing it through.
    expect(attrs).toMatchObject({
      listingType: "upcoming",
      limit: null,
      page: null,
      orderBy: null,
      dir: null,
      lt: null,
      gt: null,
      query: null,
    });
  });

  it("coerces the string forms a JSON attribute bag may carry", () => {
    expect(
      parseEventListingAttributes({
        limit: "4",
        featured: "true",
        tags: "jazz,live",
      }),
    ).toMatchObject({ limit: 4, featured: true, tags: ["jazz", "live"] });
  });
});

describe("buildEventListingQuery", () => {
  it("asks for upcoming events by default", () => {
    expect(
      buildEventListingQuery(parseEventListingAttributes({}), NOW),
      // The endpoint types its flags as raw query values, so a set flag goes
      // over the wire as "true" rather than as a boolean.
    ).toEqual({ upcoming: "true" });
  });

  it("windows a past listing to before now", () => {
    expect(
      buildEventListingQuery(
        parseEventListingAttributes({ listingType: "past" }),
        NOW,
      ),
    ).toEqual({ lt: NOW });
  });

  it("keeps an explicit lt over the computed one on a past listing", () => {
    expect(
      buildEventListingQuery(
        parseEventListingAttributes({ listingType: "past", lt: 999 }),
        NOW,
      ),
    ).toEqual({ lt: 999 });
  });

  it("applies no time window to an all listing", () => {
    expect(
      buildEventListingQuery(
        parseEventListingAttributes({ listingType: "all" }),
        NOW,
      ),
    ).toEqual({});
  });

  it("omits the flags an author left off", () => {
    const query = buildEventListingQuery(
      parseEventListingAttributes({ listingType: "all" }),
      NOW,
    );

    expect(query).not.toHaveProperty("featured");
    expect(query).not.toHaveProperty("rootOnly");
    expect(query).not.toHaveProperty("tags");
  });

  it("forwards every configured filter to the events endpoint", () => {
    expect(
      buildEventListingQuery(
        parseEventListingAttributes({
          listingType: "all",
          limit: 4,
          page: 2,
          orderBy: "startDate",
          dir: "desc",
          featured: true,
          rootOnly: true,
          tags: ["jazz"],
          query: "trio",
          gt: 456,
          legacyId: "abc",
        }),
        NOW,
      ),
    ).toEqual({
      limit: 4,
      page: 2,
      orderBy: "startDate",
      dir: "desc",
      featured: "true",
      rootOnly: "true",
      tags: ["jazz"],
      query: "trio",
      gt: 456,
      legacyId: "abc",
    });
  });
});

describe("news listing", () => {
  it("defaults to every article, unwindowed", () => {
    expect(parseNewsListingAttributes({}).listingType).toBe("all");
    expect(buildNewsListingQuery(parseNewsListingAttributes({}), NOW)).toEqual(
      {},
    );
  });

  it("windows a past listing to before now, like events do", () => {
    expect(
      buildNewsListingQuery(
        parseNewsListingAttributes({ listingType: "past" }),
        NOW,
      ),
    ).toEqual({ lt: NOW });
  });

  it("accepts the order-by columns the news endpoint sorts on", () => {
    expect(parseNewsListingAttributes({ orderBy: "date" }).orderBy).toBe(
      "date",
    );
    expect(parseNewsListingAttributes({ orderBy: "startDate" }).orderBy).toBe(
      null,
    );
  });
});

describe("product listing", () => {
  it("forwards the configured filters", () => {
    expect(
      buildProductListingQuery(
        parseProductListingAttributes({
          limit: 6,
          orderBy: "order",
          dir: "asc",
          tags: ["vinyl", "tape"],
          query: "lp",
        }),
      ),
    ).toEqual({
      limit: 6,
      orderBy: "order",
      dir: "asc",
      tags: ["vinyl", "tape"],
      query: "lp",
    });
  });

  it("rejects an order-by column the products endpoint does not sort on", () => {
    expect(
      parseProductListingAttributes({ orderBy: "startDate" }).orderBy,
    ).toBe(null);
  });
});

describe("profile listing", () => {
  it("forwards the member filter to the profiles endpoint", () => {
    expect(
      buildProfileListingQuery(
        parseProfileListingAttributes({ type: "member", limit: 3 }),
      ),
    ).toEqual({ type: "member", limit: 3 });
  });

  it("rejects a profile type the endpoint does not accept", () => {
    expect(parseProfileListingAttributes({ type: "artist" }).type).toBeNull();
  });
});

describe("page listing", () => {
  it("forwards the configured filters", () => {
    expect(
      buildPageListingQuery(
        parsePageListingAttributes({
          orderBy: "updatedAt",
          dir: "desc",
          featured: true,
          tags: ["about"],
        }),
      ),
    ).toEqual({
      orderBy: "updatedAt",
      dir: "desc",
      featured: "true",
      tags: ["about"],
    });
  });

  it("sends no limit or page — the block does not serialize them", () => {
    const query = buildPageListingQuery(
      parsePageListingAttributes({ limit: 5, page: 2 }),
    );

    expect(query).not.toHaveProperty("limit");
    expect(query).not.toHaveProperty("page");
  });
});

/**
 * The parser is the only thing standing between a block's attributes and the
 * endpoint, and what it bounds is what one block costs a consumer's deployment
 * per request: an uncapped `query` is a full-text search on the site's own
 * credentials that misses the upstream cache every time, and an uncapped `tags`
 * array is a multi-megabyte URL the consumer's server assembles in-process. The
 * attributes are the author's rather than a reader's, so these bound a mistake
 * — but the article is public and its render is uncached, so the mistake is
 * paid for on every view of it.
 */
describe("bounds on what one block can ask the endpoint for", () => {
  it("caps free text well above anything an author types", () => {
    const { query } = parseEventListingAttributes({
      query: "x".repeat(10_000),
    });

    expect(query?.length).toBeLessThanOrEqual(200);
  });

  it("caps the number of tags", () => {
    const { tags } = parseEventListingAttributes({
      tags: Array.from({ length: 5_000 }, (_, i) => `tag${i}`),
    });

    expect(tags.length).toBeLessThanOrEqual(20);
  });

  it("caps the length of a single tag", () => {
    const { tags } = parseEventListingAttributes({ tags: ["y".repeat(5_000)] });

    expect(tags[0]?.length).toBeLessThanOrEqual(100);
  });

  // The cut is on code points rather than code units. A cap landing between the
  // halves of an astral character leaves a lone surrogate, and the query
  // serializer's `encodeURIComponent` throws `URIError` on one — which reaches a
  // reader as a listing block that silently disappears, on every page of it.
  // `encodeURIComponent` is what asserts it here: a length check would pass on
  // the broken string too.
  it("cuts free text without splitting a character in half", () => {
    const { query } = parseEventListingAttributes({
      query: `${"a".repeat(199)}🎉`,
    });

    expect([...(query ?? "")].length).toBeLessThanOrEqual(200);
    expect(() => encodeURIComponent(query ?? "")).not.toThrow();
  });

  it("cuts a tag without splitting a character in half", () => {
    const { tags } = parseEventListingAttributes({
      tags: [`${"b".repeat(99)}🎉`],
    });

    expect([...(tags[0] ?? "")].length).toBeLessThanOrEqual(100);
    expect(() => encodeURIComponent(tags[0] ?? "")).not.toThrow();
  });

  it("counts the cap in characters, so it does not depend on the alphabet", () => {
    const { query } = parseEventListingAttributes({ query: "🎉".repeat(500) });

    expect([...(query ?? "")].length).toBe(200);
  });

  it("caps the page size, so one block cannot ask for the whole table", () => {
    expect(parseEventListingAttributes({ limit: 100_000 }).limit).toBe(100);
  });

  // The URL's page is clamped where it is read, and that is tested. This is the
  // other way in: a `page` an author typed into the block reaches the endpoint
  // through the attributes instead, and pages by offset just the same.
  it("caps the author's own page, not only the one in the URL", () => {
    expect(parseEventListingAttributes({ page: 5_000 }).page).toBe(1000);
  });

  it("leaves a real author's values untouched", () => {
    expect(
      parseEventListingAttributes({
        limit: 12,
        query: "string quartet",
        tags: ["jazz", "live"],
      }),
    ).toMatchObject({
      limit: 12,
      query: "string quartet",
      tags: ["jazz", "live"],
    });
  });
});

describe("minuteRoundedNow", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  // The rounding is the whole function. An `lt` that ticked every second would
  // give every request a URL the data cache has never seen, so a "past" listing
  // would miss the cache on every render of the article — a fetch per view of a
  // page that is otherwise served from the revalidate window.
  it("rounds down to the minute, so the cache key holds still", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T10:30:45.123Z"));

    expect(minuteRoundedNow()).toBe(
      new Date("2026-01-01T10:30:00.000Z").getTime(),
    );

    // Same minute, later second: the same value, which is the point.
    vi.setSystemTime(new Date("2026-01-01T10:30:59.999Z"));

    expect(minuteRoundedNow()).toBe(
      new Date("2026-01-01T10:30:00.000Z").getTime(),
    );
  });
});
