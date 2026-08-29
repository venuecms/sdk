/**
 * Cached wrappers around the `@venuecms/sdk` reads. Requires Next 16 with
 * `cacheComponents: true`; without it `"use cache"` is a build error.
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

// Clamped by the `revalidate: 60` @venuecms/sdk puts on its fetches, so a
// longer profile needs a change there too.
const LIFETIME = "minutes";

/** `Request`/`Response` are not serializable and cannot cross a cache boundary. */
const serializable = <T extends { data?: unknown; error?: unknown }>(
  result: T,
): { data: T["data"]; error: T["error"] } => ({
  data: result.data,
  error: result.error,
});

// Every read passes the siteKey in rather than letting the cached function read
// it from module scope: entries are keyed by arguments, so a siteKey read inside
// the cache scope would give every tenant one shared entry.

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

// Tagged under events too: a new event changes this listing.
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
 * Search a site for all content types (deduped per render, not cached across
 * requests: the key is visitor input, so entries would be unbounded)
 *
 * @category Sites
 */
export const searchSite = cache((params: SearchSiteData["query"]) =>
  _searchSite(params),
);
