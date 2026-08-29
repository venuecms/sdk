"use cache";

/**
 * The cached reads. The directive is at module level, not inside each function
 * body: an inline `"use cache"` is a build error in any module a client
 * component imports, and every template pulls this package's barrel into client
 * code. Next drops non-function exports from a cached module, so helpers here
 * stay local.
 */
import {
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
} from "@venuecms/sdk";
import { cacheLife, cacheTag } from "next/cache";

import { venueCacheTag } from "./tags";

// Clamped by the `revalidate: 60` @venuecms/sdk puts on its fetches, so a
// longer profile needs a change there too.
const LIFETIME = "minutes";

// A failed read is held only long enough to absorb a burst. Caching it for
// LIFETIME would freeze one transient 5xx onto the page for every visitor.
const ERROR_LIFETIME = "seconds";

/**
 * Drops `request`/`response`, which are not serializable and cannot cross a
 * cache boundary, and sets the entry's lifetime from the outcome.
 */
const settle = <T extends { data?: unknown; error?: unknown }>(result: T) => {
  cacheLife(result.error ? ERROR_LIFETIME : LIFETIME);
  return { data: result.data, error: result.error } as {
    data: T["data"];
    error: T["error"];
  };
};

// Every read takes the siteKey as an argument rather than reading it from the
// SDK's module scope: entries are keyed by arguments, so a siteKey read inside
// the cache scope would give every tenant one shared entry.

export const cachedSite = async (siteKey: string) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "site"),
  );
  return settle(await _getSite());
};

export const cachedEvents = async (
  siteKey: string,
  params: GetEventsData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
  );
  return settle(await _getEvents(params));
};

export const cachedEvent = async (
  siteKey: string,
  params: Omit<GetEventData["path"], "siteKey">,
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
    venueCacheTag.record(siteKey, "events", params.slug),
  );
  return settle(await _getEvent(params));
};

export const cachedPages = async (
  siteKey: string,
  params: GetPagesData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "pages"),
  );
  return settle(await _getPages(params));
};

export const cachedPage = async (
  siteKey: string,
  params: Omit<GetPageData["path"], "siteKey">,
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "pages"),
    venueCacheTag.record(siteKey, "pages", params.slug),
  );
  return settle(await _getPage(params));
};

export const cachedNews = async (
  siteKey: string,
  params: GetNewsData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "news"),
  );
  return settle(await _getNews(params));
};

export const cachedNewsArticle = async (
  siteKey: string,
  params: Omit<GetNewsArticleData["path"], "siteKey">,
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "news"),
    venueCacheTag.record(siteKey, "news", params.slug),
  );
  return settle(await _getNewsArticle(params));
};

export const cachedProfiles = async (
  siteKey: string,
  params: GetProfilesData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "profiles"),
  );
  return settle(await _getProfiles(params));
};

export const cachedProfile = async (
  siteKey: string,
  params: Omit<GetProfileData["path"], "siteKey">,
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "profiles"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return settle(await _getProfile(params));
};

// Tagged under events too: a new event changes this listing.
export const cachedProfileEvents = async (
  siteKey: string,
  params: Omit<GetProfileEventsData["path"], "siteKey"> &
    GetProfileEventsData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "events"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return settle(await _getProfileEvents(params));
};

export const cachedProfileProducts = async (
  siteKey: string,
  params: Omit<GetProfileProductsData["path"], "siteKey"> &
    GetProfileProductsData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
    venueCacheTag.record(siteKey, "profiles", params.slug),
  );
  return settle(await _getProfileProducts(params));
};

export const cachedProducts = async (
  siteKey: string,
  params: GetProductsData["query"],
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
  );
  return settle(await _getProducts(params));
};

export const cachedProduct = async (
  siteKey: string,
  params: Omit<GetProductData["path"], "siteKey">,
) => {
  cacheTag(
    venueCacheTag.site(siteKey),
    venueCacheTag.collection(siteKey, "products"),
    venueCacheTag.record(siteKey, "products", params.slug),
  );
  return settle(await _getProduct(params));
};
