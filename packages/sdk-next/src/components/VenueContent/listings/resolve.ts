/**
 * The querying half of a listing block.
 *
 * A block's validated params (from ./params) become that endpoint's query, and
 * this is what calls it. Every read goes through the cached wrappers in
 * ../../../lib/api, so two listings that resolve the same query in one render
 * share a single request, as does the page that already read the site.
 *
 * Records come back as an array in every case, including failure: the API
 * reports a bad request in-band as absent `data` rather than throwing, so a
 * listing whose filters the endpoint rejected reaches the renderer as no
 * records — the same as a listing that legitimately matched nothing.
 */
import type { Site } from "@venuecms/sdk";
import type {
  GetEventsResponse,
  GetNewsResponse,
  GetPagesResponse,
  GetProductsResponse,
  GetProfilesResponse,
} from "@venuecms/sdk";

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
  ) => Promise<ListingRecords[Type]>;
} = {
  eventListing: async (params) => {
    const { data } = await getEvents(
      buildEventListingQuery(params, minuteRoundedNow()),
    );
    return data?.records ?? [];
  },
  newsListing: async (params) => {
    const { data } = await getNews(
      buildNewsListingQuery(params, minuteRoundedNow()),
    );
    return data?.records ?? [];
  },
  pageListing: async (params) => {
    const { data } = await getPages(buildPageListingQuery(params));
    return data?.records ?? [];
  },
  productListing: async (params) => {
    const { data } = await getProducts(buildProductListingQuery(params));
    return data?.records ?? [];
  },
  profileListing: async (params) => {
    const { data } = await getProfiles(buildProfileListingQuery(params));
    return data?.records ?? [];
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
  const [records, site] = await Promise.all([
    resolveRecords[nodeType](params),
    getSite().then(({ data }) => data ?? null),
  ]);

  return { records, site };
};
