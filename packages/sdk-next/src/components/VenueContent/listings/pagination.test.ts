import { describe, expect, it } from "vitest";

import {
  MAX_PAGE,
  MAX_PAGE_LINKS,
  pageHref,
  pageLinks,
  paginationMeta,
  readPage,
} from "./pagination";

/**
 * `paginationMeta` with a page length supplied, for the cases that report a
 * count — where the length is not consulted and stating it only adds noise.
 */
const metaWithCount = (args: {
  page: number;
  pageSize: number;
  count: number;
}) => paginationMeta({ ...args, pageLength: args.pageSize });

describe("paginationMeta", () => {
  it("counts pages off the total match", () => {
    expect(metaWithCount({ page: 0, pageSize: 10, count: 25 })).toMatchObject({
      pageNumber: 1,
      pageCount: 3,
      hasPrev: false,
      hasNext: true,
    });
  });

  it("has no next page on an exactly full last page", () => {
    // The edge `pageCount` rounds away: 30 records at 10 a page is 3 pages, and
    // page 2 is the last one — a fourth would be empty.
    expect(metaWithCount({ page: 2, pageSize: 10, count: 30 })).toMatchObject({
      pageCount: 3,
      hasNext: false,
      hasPrev: true,
    });
  });

  it("reports neither direction when nothing matched", () => {
    expect(metaWithCount({ page: 0, pageSize: 10, count: 0 })).toMatchObject({
      pageCount: 0,
      hasPrev: false,
      hasNext: false,
    });
  });

  it("keeps a page past the end walkable backwards", () => {
    // Someone hand-edited the URL, or the listing shrank under a shared link.
    expect(metaWithCount({ page: 9, pageSize: 10, count: 25 })).toMatchObject({
      hasPrev: true,
      hasNext: false,
    });
  });

  it("numbers pages from one while paging from zero", () => {
    const meta = metaWithCount({ page: 3, pageSize: 5, count: 100 });
    expect(meta.page).toBe(3);
    expect(meta.pageNumber).toBe(4);
  });

  // Products and profiles may answer without a count. The rule is then "a full
  // page means there is probably another", and the total stays unknown rather
  // than being invented — a template printing `count` would otherwise print the
  // size of the page as if it were the size of the listing.
  describe("without a reported count", () => {
    it("keeps going while the pages come back full", () => {
      expect(
        paginationMeta({ page: 0, pageSize: 12, count: null, pageLength: 12 }),
      ).toMatchObject({ count: null, pageCount: null, hasNext: true });
    });

    it("stops on the first short page", () => {
      expect(
        paginationMeta({ page: 2, pageSize: 12, count: null, pageLength: 5 }),
      ).toMatchObject({ hasNext: false, hasPrev: true });
    });

    it("reports no total rather than the page's own length", () => {
      const meta = paginationMeta({
        page: 0,
        pageSize: 12,
        count: null,
        pageLength: 12,
      });

      expect(meta.count).toBeNull();
      expect(meta.count).not.toBe(12);
    });
  });
});

describe("readPage", () => {
  it("reads the block's own param", () => {
    expect(readPage({ evt_a: "2", nws_b: "7" }, "evt_a")).toBe(2);
  });

  it("says nothing when the URL does not name this block", () => {
    // Distinct from page 0: the caller falls back to the author's own `page`
    // attribute on null, and overrides it on 0.
    expect(readPage({}, "evt_a")).toBeNull();
    expect(readPage({ nws_b: "7" }, "evt_a")).toBeNull();
  });

  it.each([["-1"], ["1.5"], ["two"], [""], ["  "]])(
    "falls back to the first page on %j rather than throwing",
    (value) => {
      expect(readPage({ evt_a: value }, "evt_a")).toBe(0);
    },
  );

  it("takes the first value of a repeated param", () => {
    expect(readPage({ evt_a: ["3", "9"] }, "evt_a")).toBe(3);
  });

  it("clamps a hand-edited URL to the deepest page it will ask for", () => {
    expect(readPage({ evt_a: "999999999" }, "evt_a")).toBe(MAX_PAGE);
  });
});

describe("pageHref", () => {
  it("carries every other param through", () => {
    expect(pageHref({ locale: "de", evt_a: "1" }, "evt_a", 2)).toBe(
      "?locale=de&evt_a=2",
    );
  });

  it("leaves another block's page where it was", () => {
    const href = pageHref({ evt_a: "1", nws_b: "4" }, "evt_a", 2);
    expect(href).toContain("nws_b=4");
    expect(href).toContain("evt_a=2");
  });

  it("omits the param on the first page", () => {
    expect(pageHref({ locale: "de", evt_a: "3" }, "evt_a", 0)).toBe("?locale=de");
  });

  it("preserves a repeated param it does not own", () => {
    expect(pageHref({ tag: ["jazz", "live"] }, "evt_a", 1)).toBe(
      "?tag=jazz&tag=live&evt_a=1",
    );
  });

  it("stops carrying a query string padded past what a page ever has", () => {
    // Each href reflects the whole incoming query, and a block emits up to
    // MAX_PAGE_LINKS of them, so an unbounded carry multiplies a padded request
    // into a response a few hundred times its size.
    const padded = Object.fromEntries(
      Array.from({ length: 500 }, (_, i) => [`junk${i}`, "x".repeat(200)]),
    );

    const href = pageHref({ ...padded, evt_a: "1" }, "evt_a", 2);

    expect(href.length).toBeLessThan(2_000);
    // The block's own pagination survives the truncation.
    expect(href).toContain("evt_a=2");
  });

  it("budgets what it writes, not what it read", () => {
    // The params arrive decoded and go back out percent-encoded. An astral
    // character is one budgeted unit per code unit and twelve written ones, so
    // a budget measured on the decoded value passes a query string an order of
    // magnitude over it — into every link the block emits.
    //
    // 200 of them, deliberately: that is 400 code units, comfortably *under*
    // MAX_CARRIED_QUERY, so a decoded-length budget would carry the param and
    // write 2.4kB. Enough of them to exceed the budget decoded as well would
    // be dropped either way, and the assertion would hold against the bug.
    const href = pageHref({ junk: "🎉".repeat(200), evt_a: "1" }, "evt_a", 2);

    expect(href.length).toBeLessThan(2_000);
    expect(href).toContain("evt_a=2");
  });
});

describe("pageLinks", () => {
  const meta = metaWithCount({ page: 1, pageSize: 10, count: 35 });

  it("is null without search params, so a template draws no pager", () => {
    expect(pageLinks(null, "evt_a", meta)).toBeNull();
  });

  it("gives both directions in the middle of a listing", () => {
    const links = pageLinks({}, "evt_a", meta);
    expect(links).toMatchObject({
      param: "evt_a",
      prevHref: "?",
      nextHref: "?evt_a=2",
    });
  });

  it("drops the direction that has nowhere to go", () => {
    const first = pageLinks({}, "evt_a", metaWithCount({ page: 0, pageSize: 10, count: 5 }));
    expect(first?.prevHref).toBeNull();
    expect(first?.nextHref).toBeNull();
  });

  it("gives one href per page", () => {
    expect(pageLinks({}, "evt_a", meta)?.hrefs).toEqual([
      "?",
      "?evt_a=1",
      "?evt_a=2",
      "?evt_a=3",
    ]);
  });

  it("stops offering a next page at the deepest one a URL can name", () => {
    // Past MAX_PAGE `readPage` clamps, so a next link here would land back on
    // the page it was clicked from and still offer to go forward.
    const deepest = metaWithCount({
      page: MAX_PAGE,
      pageSize: 10,
      count: 10_000_000,
    });

    expect(deepest.hasNext).toBe(true);
    expect(pageLinks({}, "evt_a", deepest)?.nextHref).toBeNull();
    expect(pageLinks({}, "evt_a", deepest)?.prevHref).not.toBeNull();
  });

  it("truncates the href list while leaving pageCount exact", () => {
    const huge = metaWithCount({ page: 0, pageSize: 1, count: 10_000 });
    const links = pageLinks({}, "evt_a", huge);

    expect(huge.pageCount).toBe(10_000);
    expect(links?.hrefs).toHaveLength(MAX_PAGE_LINKS);
  });
});
