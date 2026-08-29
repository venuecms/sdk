/**
 * The cached read layer.
 *
 * Every getter here is the same call as the one in `@venuecms/sdk`, wrapped in
 * a Next cache entry with a lifetime and a set of tags. Two things make that
 * wrapping necessary rather than an optimisation:
 *
 * 1. Under `cacheComponents`, a `fetch`'s `next: { revalidate }` no longer sets
 *    how long the *route* may be reused. A route with no dynamic API and no
 *    `"use cache"` is prerendered at build time and never revalidates — which is
 *    how a published edit went a week without reaching a live news page. The
 *    directive is what gives the render an expiry at all.
 *
 * 2. Nothing purges on publish yet (VEN-543). Tags are the hook that a webhook
 *    will pull: see `./tags`. They are attached now, before the handler exists,
 *    because a cache entry written without a tag can never be invalidated by
 *    one — the tags have to be in the entries before the purge is written, not
 *    after.
 *
 * ## The two-function shape
 *
 * Each getter is a plain wrapper that reads the siteKey and calls a cached
 * function taking it as an argument. That split is not stylistic. The siteKey
 * lives in the SDK's module scope, set per request by `setConfig` — a
 * multi-tenant template serves many sites from one deployment. A cache entry is
 * keyed by its function's arguments, so a cached function that read the siteKey
 * from module scope itself would produce one entry shared by every tenant, and
 * the first site rendered after a cold start would be served to all of them.
 * Reading it *outside* the cache scope and passing it *in* is what puts it in
 * the key.
 *
 * ## The return shape
 *
 * The underlying SDK resolves to `{ data, error, request, response }`, and
 * `Request`/`Response` cannot cross a cache boundary — they are not
 * serializable. So these return `{ data, error }`. No call site in the templates
 * reads `request` or `response`; `error` is preserved because search does.
 */
import {
  getSiteKey,
  getSite as _getSite,
  getEvents as _getEvents,
  getEvent as _getEvent,
  getPages as _getPages,
  getPage as _getPage,
  getNews as _getNews,
  getNewsArticle as _getNewsArticle,
  getProfiles as _getProfiles,
  getProfile as _getProfile,
  getProfileEvents as _getProfileEvents,
  getProfileProducts as _getProfileProducts,
  getProducts as _getProducts,
  getProduct as _getProduct,
  searchSite as _searchSite,
  type GetEventsData,
  type GetEventData,
  type GetPagesData,
  type GetPageData,
  type GetNewsData,
  type GetNewsArticleData,
  type GetProfilesData,
  type GetProfileData,
  type GetProfileEventsData,
  type GetProfileProductsData,
  type GetProductsData,
  type GetProductData,
  type SearchSiteData,
} from "@venuecms/sdk";
import { cacheLife, cacheTag } from "next/cache";
import { cache } from "react";

import { venueCacheTag } from "./tags";

/**
 * How long a read may be reused before Next refetches it.
 *
 * `"minutes"` is Next's built-in profile: reuse for a minute, serve stale for
 * up to an hour while revalidating. It matches the `revalidate: 60` the SDK
 * already puts on its fetches — that value clamps anything longer, so a larger
 * profile here would have no effect without a change in `@venuecms/sdk` too.
 *
 * A minute is the tolerable staleness for content nothing purges. Once the
 * publish webhook lands, the tags do the real work and this becomes the
 * backstop for a purge that never arrived.
 */
const LIFETIME = "minutes";

/**
 * Drops the parts of an SDK result a cache entry cannot hold.
 *
 * `Request` and `Response` are live objects with streams attached; returning
 * one from a `"use cache"` function is a serialization error at runtime, not a
 * silent pass-through.
 */
const serializable = <T extends { data?: unknown; error?: unknown }>(
  result: T,
): { data: T["data"]; error: T["error"] } => ({
  data: result.data,
  error: result.error,
});

/**
 * Get the site configured via the siteKey (cached)
 * @category Sites
 */
export const getSite = async () => cachedSite(getSiteKey());

const cachedSite = async (siteKey: string) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "site"),
  );
  return serializable(await _getSite());
};

/**
 * Get a list of events (cached)
 * @category Events
 */
export const getEvents = async (params: GetEventsData["query"] = {}) =>
  cachedEvents(getSiteKey(), params);

const cachedEvents = async (
  siteKey: string,
  params: GetEventsData["query"],
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
  );
  return serializable(await _getEvents(params));
};

/**
 * Retrieve data for a single event (cached)
 * @category Events
 */
export const getEvent = async (
  params: Omit<GetEventData["path"], "siteKey">,
) => cachedEvent(getSiteKey(), params);

const cachedEvent = async (
  siteKey: string,
  params: Omit<GetEventData["path"], "siteKey">,
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
    venueCacheTag.record(siteKey, "events", params.slug),
  );
  return serializable(await _getEvent(params));
};

/**
 * Get a list of all pages (cached)
 * @category Pages
 */
export const getPages = async (params: GetPagesData["query"] = {}) =>
  cachedPages(getSiteKey(), params);

const cachedPages = async (siteKey: string, params: GetPagesData["query"]) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "pages"),
  );
  return serializable(await _getPages(params));
};

/**
 * Get a single page using the slug (cached)
 * @category Pages
 */
export const getPage = async (params: Omit<GetPageData["path"], "siteKey">) =>
  cachedPage(getSiteKey(), params);

const cachedPage = async (
  siteKey: string,
  params: Omit<GetPageData["path"], "siteKey">,
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "pages"),
    venueCacheTag.record(siteKey, "pages", params.slug),
  );
  return serializable(await _getPage(params));
};

/**
 * Get a list of all news items (cached)
 * @category News
 */
export const getNews = async (params: GetNewsData["query"] = {}) =>
  cachedNews(getSiteKey(), params);

const cachedNews = async (siteKey: string, params: GetNewsData["query"]) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "news"),
  );
  return serializable(await _getNews(params));
};

/**
 * Get a single news item using the slug (cached)
 * @category News
 */
export const getNewsArticle = async (
  params: Omit<GetNewsArticleData["path"], "siteKey">,
) => cachedNewsArticle(getSiteKey(), params);

const cachedNewsArticle = async (
  siteKey: string,
  params: Omit<GetNewsArticleData["path"], "siteKey">,
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "news"),
    venueCacheTag.record(siteKey, "news", params.slug),
  );
  return serializable(await _getNewsArticle(params));
};

/**
 * Get a list of profiles (cached)
 * @category Profiles
 */
export const getProfiles = async (params: GetProfilesData["query"] = {}) =>
  cachedProfiles(getSiteKey(), params);

const cachedProfiles = async (
  siteKey: string,
  params: GetProfilesData["query"],
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "profiles"),
  );
  return serializable(await _getProfiles(params));
};

/**
 * Get a profile (cached)
 * @category Profiles
 */
export const getProfile = async (
  params: Omit<GetProfileData["path"], "siteKey">,
) => cachedProfile(getSiteKey(), params);

const cachedProfile = async (
  siteKey: string,
  params: Omit<GetProfileData["path"], "siteKey">,
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "profiles"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return serializable(await _getProfile(params));
};

/**
 * Get a listing of events for a profile (cached)
 * @category Profiles
 */
export const getProfileEvents = async (
  params: Omit<GetProfileEventsData["path"], "siteKey"> &
    GetProfileEventsData["query"],
) => cachedProfileEvents(getSiteKey(), params);

// Tagged under both collections it depends on: the listing changes when the
// profile changes and when any event does, so either publish has to purge it.
const cachedProfileEvents = async (
  siteKey: string,
  params: Omit<GetProfileEventsData["path"], "siteKey"> &
    GetProfileEventsData["query"],
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return serializable(await _getProfileEvents(params));
};

/**
 * Get a listing of products for a profile (cached)
 * @category Profiles
 */
export const getProfileProducts = async (
  params: Omit<GetProfileProductsData["path"], "siteKey"> &
    GetProfileProductsData["query"],
) => cachedProfileProducts(getSiteKey(), params);

const cachedProfileProducts = async (
  siteKey: string,
  params: Omit<GetProfileProductsData["path"], "siteKey"> &
    GetProfileProductsData["query"],
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return serializable(await _getProfileProducts(params));
};

/**
 * Get a listing of products (cached)
 * @category Products
 */
export const getProducts = async (params: GetProductsData["query"]) =>
  cachedProducts(getSiteKey(), params);

const cachedProducts = async (
  siteKey: string,
  params: GetProductsData["query"],
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
  );
  return serializable(await _getProducts(params));
};

/**
 * Get a product (cached)
 * @category Products
 */
export const getProduct = async (
  params: Omit<GetProductData["path"], "siteKey">,
) => cachedProduct(getSiteKey(), params);

const cachedProduct = async (
  siteKey: string,
  params: Omit<GetProductData["path"], "siteKey">,
) => {
  "use cache";
  cacheLife(LIFETIME);
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
    venueCacheTag.record(siteKey, "products", params.slug),
  );
  return serializable(await _getProduct(params));
};

/**
 * Search a site for all content types (cached)
 *
 * Deliberately the one getter with no `"use cache"`. Its key is a query string
 * a visitor typed, so a persistent entry per distinct query is unbounded — and
 * a searcher expects to find what was published a moment ago, which is the one
 * place a minute of staleness is visible as a bug. `cache` from React still
 * dedupes it within a single render.
 *
 * @category Sites
 */
export const searchSite = cache((params: SearchSiteData["query"]) =>
  _searchSite(params),
);
