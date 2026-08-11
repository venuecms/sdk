/**
 * A listing block's pagination: the arithmetic, and the links.
 *
 * The endpoints page with `limit`/`page` and report the total match as `count`,
 * so everything a pager needs is derivable from those three numbers. This module
 * is the pure half — numbers and strings in, numbers and strings out — so the
 * off-by-ones are testable without a network or a render.
 *
 * Every field is plain data — strings and numbers, no functions. A pager is a
 * set of hrefs a reader follows, so paging is a navigation the server handles
 * and the listing component stays a Server Component; and props that are all
 * data cross to a Client Component unchanged if a consumer wants one.
 *
 * `links` is null when the search params could not be resolved at all — neither
 * threaded into `VenueContent` nor stamped onto the request by the proxy helper
 * — because there is then no URL to link to. The type says so rather than
 * leaving a consumer to discover an href that never populates.
 */
// Declared with the reader that produces them, so the params a route threads in
// and the params the SDK reads off the request are the one type. Re-exported
// below, where consumers have always got it from.
import type { SearchParams } from "../../../lib/searchParams/url";

/**
 * The listings that paginate.
 *
 * `pageListing` is deliberately absent: the pages block serializes no
 * `limit`/`page` (see ./params), because a page read has to return everything
 * for parent-path resolution. Naming the paginated four here rather than
 * excluding one from `ListingBlockNodeType` is what keeps `pagination` off the
 * pages component's props entirely, instead of always-null.
 */
export const PAGINATED_LISTING_NODE_TYPES = [
  "eventListing",
  "newsListing",
  "productListing",
  "profileListing",
] as const;

export type PaginatedListingNodeType =
  (typeof PAGINATED_LISTING_NODE_TYPES)[number];

export const isPaginatedListing = (
  nodeType: string,
): nodeType is PaginatedListingNodeType =>
  (PAGINATED_LISTING_NODE_TYPES as readonly string[]).includes(nodeType);

export type { SearchParams };

/**
 * How many page hrefs `links.hrefs` carries at most.
 *
 * A listing of 100k records at a page size of 10 would otherwise put 10k
 * strings on a component's props. Numbered pagers past this are not a UI
 * anyone builds, and prev/next is unaffected — but `pageCount` stays exact, so
 * a consumer mapping over `hrefs` can tell it has been truncated.
 */
export const MAX_PAGE_LINKS = 200;

/** What the endpoint is allowed to be asked for on an author's say-so. */
export const MAX_PAGE_SIZE = 100;

/**
 * The deepest page a URL may name.
 *
 * The endpoints page by offset, so an arbitrary page number is an arbitrary
 * offset for the database to walk — and the page comes off the query string,
 * which is a reader's to edit. No pager a reader clicks reaches this far: a
 * listing long enough to need page 1001 is a search, not a block in an article.
 */
export const MAX_PAGE = 1000;

export type PaginationMeta = {
  /** The current page, 0-indexed, as the endpoints index them. */
  page: number;
  /** The same page, 1-based, for display. */
  pageNumber: number;
  /** The author's page size. */
  pageSize: number;
  /**
   * Total records matching the block's filters, across all pages — or null when
   * the endpoint did not report one, which products and profiles are permitted
   * to do. Guard on it before rendering "N results".
   */
  count: number | null;
  /** Pages in the whole match; null whenever `count` is. */
  pageCount: number | null;
  hasPrev: boolean;
  hasNext: boolean;
};

export type ListingPageLinks = {
  /** The search param this block owns; unique among the blocks on a page. */
  param: string;
  prevHref: string | null;
  nextHref: string | null;
  /** One href per page, `hrefs[0]` being page 1. Capped at MAX_PAGE_LINKS. */
  hrefs: string[];
};

export type ListingPagination = PaginationMeta & {
  links: ListingPageLinks | null;
};

/**
 * The page arithmetic.
 *
 * `hasNext` is derived from the record offset rather than from `pageCount`, so
 * it stays right on the edges `pageCount` rounds away — an exactly-full last
 * page has no next, and a count of zero has neither direction.
 *
 * Without a count, a full page is the only evidence another page exists, so
 * that is what `hasNext` falls back to. It costs one empty page at the end of a
 * listing whose length happens to be a multiple of the page size — the reader
 * gets a next link that lands on nothing — which is the standard price of
 * paging a total nobody reported, and cheaper than the alternatives: assuming
 * no next hides real records, and assuming one never stops.
 */
export const paginationMeta = ({
  page,
  pageSize,
  count,
  pageLength,
}: {
  page: number;
  pageSize: number;
  count: number | null;
  /** How many records this page actually returned. */
  pageLength: number;
}): PaginationMeta => ({
  page,
  pageNumber: page + 1,
  pageSize,
  count,
  pageCount: count == null ? null : Math.ceil(count / pageSize),
  hasPrev: page > 0,
  hasNext:
    count == null ? pageLength >= pageSize : (page + 1) * pageSize < count,
});

/**
 * Reads a block's page out of the route's search params, or null when the URL
 * does not name this block.
 *
 * Null and 0 are different answers and the caller needs both: a URL that says
 * nothing has to leave the author's own `page` attribute standing, where a URL
 * that says `=0` has to override it. Collapsing the two is what made threading
 * `searchParams` into a page silently reset every block its author had started
 * on a later page.
 *
 * Anything that is not a whole page number reads as page 0 rather than
 * erroring: a hand-edited URL should show the listing's first page, not break
 * the article it sits in. A repeated param takes its first value, matching how
 * a route would read `?p=1&p=2`. A number past MAX_PAGE clamps to it rather
 * than resetting, so the deepest reachable page still renders a link back.
 */
export const readPage = (
  searchParams: SearchParams,
  param: string,
): number | null => {
  const raw = searchParams[param];

  if (raw === undefined) {
    return null;
  }

  const value = Array.isArray(raw) ? raw[0] : raw;

  if (typeof value !== "string" || value.trim() === "") {
    return 0;
  }

  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed >= 0
    ? Math.min(parsed, MAX_PAGE)
    : 0;
};

/**
 * How much of the incoming query string one href carries forward.
 *
 * Every param a reader arrived with is reflected into every page link, and
 * there can be MAX_PAGE_LINKS of those per block and several blocks per
 * document — so the query string is an input that gets multiplied by a few
 * hundred before it reaches the response. Left unbounded, a request padded with
 * a few kilobytes of junk params turns into megabytes of hrefs, rendered twice
 * (HTML and the flight payload) on a route that is dynamic and therefore
 * uncached. The budget is far above any real page's query string; params past
 * it are dropped, so a padded request degrades the attacker's own links and
 * nobody else's.
 */
const MAX_CARRIED_QUERY = 1024;

/**
 * The href for one page of one block.
 *
 * Every other param is carried through, so a block paginating beside a
 * consumer's own `?filter=` does not drop it, and a second listing keeps its
 * page while the first moves. Page 0 omits the param rather than writing `=0`,
 * which keeps the first page's URL the one a reader arrived on.
 *
 * Unless `nameZero`, which is for the block whose author started it on a later
 * page. A URL that does not name the block is what leaves that attribute
 * standing, so there the shorter href does not mean page 0 — it means the
 * author's page, and "Previous" from page 1 would jump forward to it while the
 * pages before it stayed unreachable. Naming the param explicitly is what makes
 * the link mean what it says; the cost is a `=0` in the URL, and only for the
 * blocks that need it.
 */
export const pageHref = (
  searchParams: SearchParams,
  param: string,
  page: number,
  nameZero = false,
): string => {
  const next = new URLSearchParams();
  let carried = 0;

  // The block's own param is set last and is never counted against the budget,
  // so a padded query string cannot push a listing's own pagination out of its
  // links.
  for (const [key, value] of Object.entries(searchParams)) {
    if (key === param) {
      continue;
    }

    const values = Array.isArray(value) ? value : value === undefined ? [] : [value];

    for (const entry of values) {
      // Measured on the serialized pair rather than the decoded one. The params
      // arrive decoded and go back out percent-encoded, and encoding is not a
      // fixed overhead — a character outside the unreserved set becomes three
      // characters, an astral one twelve. Budgeting the decoded length lets a
      // request of a few kilobytes of emoji through as several hundred
      // kilobytes of href, times every link the block emits.
      carried += new URLSearchParams([[key, entry]]).toString().length + 1;

      if (carried > MAX_CARRIED_QUERY) {
        break;
      }

      next.append(key, entry);
    }

    if (carried > MAX_CARRIED_QUERY) {
      break;
    }
  }

  if (page > 0 || nameZero) {
    next.set(param, String(page));
  }

  const query = next.toString();
  return query ? `?${query}` : "?";
};

/**
 * The links for one block, or null when no search params could be resolved.
 *
 * Returning null rather than empty strings is what makes an unreadable URL
 * visible — the proxy does not stamp this route, and no caller threaded params
 * in: a template guarding on `pagination.links` shows no pager at all rather
 * than a pager whose every href is the current page.
 */
export const pageLinks = (
  searchParams: SearchParams | null,
  param: string,
  meta: PaginationMeta,
  /**
   * The page the block's own `page` attribute starts it on.
   *
   * Needed because it is what a URL silent about this block falls back to — see
   * `nameZero` on {@link pageHref}. Defaults to the ordinary case, where the
   * author started at the beginning and page 0 is the bare URL.
   */
  authorPage = 0,
): ListingPageLinks | null => {
  if (!searchParams) {
    return null;
  }

  const href = (page: number) =>
    pageHref(searchParams, param, page, authorPage > 0);

  return {
    param,
    prevHref: meta.hasPrev ? href(meta.page - 1) : null,
    // Stops at the deepest page a URL is allowed to name. Past it `readPage`
    // clamps, so a next link would land back on the page it was clicked from
    // and keep offering to go forward — a pager that visibly does nothing.
    nextHref: meta.hasNext && meta.page < MAX_PAGE ? href(meta.page + 1) : null,
    // A numbered pager needs a total to number against. Without one the list is
    // empty rather than guessed, and prev/next carry the block on their own.
    hrefs:
      meta.pageCount == null
        ? []
        : Array.from({ length: Math.min(meta.pageCount, MAX_PAGE_LINKS) }, (_, page) =>
            href(page),
          ),
  };
};
