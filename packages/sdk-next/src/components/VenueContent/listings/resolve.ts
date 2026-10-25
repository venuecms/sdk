/**
 * The querying half of a listing block.
 *
 * A block's validated params (from ./params) become that endpoint's query, and
 * this is what calls it. Every read goes through the wrappers in ../../../lib/api,
 * so the site read is shared with the page that already made it — React's
 * `cache` keys on argument identity, and `getSite` takes none. The record reads
 * are not deduplicated by it, each call building a fresh query object; two
 * listings with identical filters coalesce at the fetch layer instead, if at all.
 *
 * Records come back as an array in every case, including failure: the API
 * reports a bad request in-band as absent `data` rather than throwing, so a
 * listing whose filters the endpoint rejected reaches the renderer as no
 * records — the same as a listing that legitimately matched nothing. Nothing
 * downstream distinguishes them, because both draw the same thing: nothing.
 */
import type { Site } from "@venuecms/sdk";
import type {
  GetEventsResponse,
  GetNewsResponse,
  GetPagesResponse,
  GetProductsResponse,
  GetProfilesResponse,
} from "@venuecms/sdk";

import { connection } from "next/server";

import {
  getEvents,
  getNews,
  getPages,
  getProducts,
  getProfiles,
  getSite,
} from "../../../lib/api";

import type { ListingBlockNodeType, ListingParams } from "./params";
import {
  buildEventListingQuery,
  buildNewsListingQuery,
  buildPageListingQuery,
  buildProductListingQuery,
  buildProfileListingQuery,
  minuteRoundedNow,
} from "./params";

/**
 * The records each listing resolves to.
 *
 * Read off the endpoints' own response types rather than restated, so a record
 * shape that gains a field (news and pages carry a `parent` the plain `Page`
 * does not) stays accurate here, and a renamed `records` fails to compile.
 */
export type ListingRecords = {
  eventListing: GetEventsResponse["records"];
  newsListing: GetNewsResponse["records"];
  pageListing: GetPagesResponse["records"];
  productListing: GetProductsResponse["records"];
  profileListing: GetProfilesResponse["records"];
};

/**
 * What a listing component is handed: the block's records, plus the site.
 *
 * `site` is passed because a list component generally needs it to render a
 * record (a date needs the site's timezone, a price its currency) and a
 * component the renderer calls cannot fetch it — it is handed its data, not
 * asked to resolve it. It is nullable because the site read fails in-band like
 * any other, and a listing that does not use the site (profiles) should still
 * render when it is missing.
 */
export type ResolvedListing<Type extends ListingBlockNodeType> = {
  records: ListingRecords[Type];
  site: Site | null;
  /**
   * Total records matching the block's filters, across every page, or null when
   * the endpoint did not report one.
   *
   * The products and profiles endpoints declare `count` optional, so null is a
   * response they are allowed to give. It is carried through as null rather than
   * substituted, because every plausible substitute is a lie a template would
   * print: the page's own length says "12 products" for a match of a hundred and
   * takes the next page's link away with it, and zero renders the block as
   * nothing at all. Downstream, an unknown count means a pager that can still go
   * forward — see `paginationMeta` — but cannot say how far.
   *
   * Null on a failed read too, since the endpoint reports a bad request in-band
   * as absent data.
   */
  count: number | null;
};

/** A page of records and the size of the whole match behind it, if reported. */
type RecordPage<Type extends ListingBlockNodeType> = {
  records: ListingRecords[Type];
  count: number | null;
};

/**
 * How each listing turns its params into records.
 *
 * The mapped-type annotation pairs each entry with its own param and record
 * shapes, so a listing wired to the wrong endpoint fails to compile here.
 *
 * `now` is resolved per call rather than shared: the two time-windowed blocks
 * round it to the minute, so separate calls in one render still agree on the
 * window while keeping each resolver independent.
 */
const resolveRecords: {
  [Type in ListingBlockNodeType]: (
    params: ListingParams[Type],
  ) => Promise<RecordPage<Type>>;
} = {
  eventListing: async (params) => {
    const { data } = await getEvents(
      buildEventListingQuery(params, minuteRoundedNow()),
    );
    return {
      records: data?.records ?? [],
      count: data?.count ?? null,
    };
  },
  newsListing: async (params) => {
    const { data } = await getNews(
      buildNewsListingQuery(params, minuteRoundedNow()),
    );
    return {
      records: data?.records ?? [],
      count: data?.count ?? null,
    };
  },
  pageListing: async (params) => {
    const { data } = await getPages(buildPageListingQuery(params));
    return {
      records: data?.records ?? [],
      count: data?.count ?? null,
    };
  },
  productListing: async (params) => {
    const { data } = await getProducts(buildProductListingQuery(params));
    return {
      records: data?.records ?? [],
      count: data?.count ?? null,
    };
  },
  profileListing: async (params) => {
    const { data } = await getProfiles(buildProfileListingQuery(params));
    return {
      records: data?.records ?? [],
      count: data?.count ?? null,
    };
  },
};

/**
 * Resolves one listing block: its records and the site, in parallel.
 *
 * Generic over the node type so the caller gets back exactly the records that
 * type promises, rather than a union it has to narrow.
 */
export const resolveListing = async <Type extends ListingBlockNodeType>(
  nodeType: Type,
  params: ListingParams[Type],
): Promise<ResolvedListing<Type>> => {
  // A listing is request-time data — it reads the configured site key, and a
  // "past" window reads the clock — so it has to be marked dynamic before any of
  // that runs, or a prerender under `cacheComponents` bails out. It is marked
  // here rather than by the caller because this is the function that does the
  // reading. The listing renders inside a Suspense boundary, so this makes only
  // that subtree dynamic and leaves the rest of the page prerenderable.
  await connection();

  const [{ records, count }, site] = await Promise.all([
    resolveRecords[nodeType](params),
    getSite().then(({ data }) => data ?? null),
  ]);

  return { records, count, site };
};
