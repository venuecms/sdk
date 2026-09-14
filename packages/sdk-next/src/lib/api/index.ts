/**
 * The public reads. Each resolves the siteKey for the current request and hands
 * it to its counterpart in `./cached`, which is where the caching lives. Requires Next 16 with
 * `cacheComponents: true`; without it `"use cache"` is a build error.
 */
import {
  searchSite as _searchSite,
  withSiteKey,
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
import { cache } from "react";

import { resolveSiteKey } from "./siteKey";

import {
  cachedSite,
  cachedEvents,
  cachedEvent,
  cachedPages,
  cachedPage,
  cachedNews,
  cachedNewsArticle,
  cachedProfiles,
  cachedProfile,
  cachedProfileEvents,
  cachedProfileProducts,
  cachedProducts,
  cachedProduct,
} from "./cached";

/**
 * Get the site configured via the siteKey (cached)
 * @category Sites
 */
export const getSite = async () => cachedSite(resolveSiteKey());

/**
 * Get a list of events (cached)
 * @category Events
 */
export const getEvents = async (params: GetEventsData["query"] = {}) =>
  cachedEvents(resolveSiteKey(), params);

/**
 * Retrieve data for a single event (cached)
 * @category Events
 */
export const getEvent = async (params: Omit<GetEventData["path"], "siteKey">) =>
  cachedEvent(resolveSiteKey(), params);

/**
 * Get a list of all pages (cached)
 * @category Pages
 */
export const getPages = async (params: GetPagesData["query"] = {}) =>
  cachedPages(resolveSiteKey(), params);

/**
 * Get a single page using the slug (cached)
 * @category Pages
 */
export const getPage = async (params: Omit<GetPageData["path"], "siteKey">) =>
  cachedPage(resolveSiteKey(), params);

/**
 * Get a list of all news items (cached)
 * @category News
 */
export const getNews = async (params: GetNewsData["query"] = {}) =>
  cachedNews(resolveSiteKey(), params);

/**
 * Get a single news item using the slug (cached)
 * @category News
 */
export const getNewsArticle = async (
  params: Omit<GetNewsArticleData["path"], "siteKey">,
) => cachedNewsArticle(resolveSiteKey(), params);

/**
 * Get a list of profiles (cached)
 * @category Profiles
 */
export const getProfiles = async (params: GetProfilesData["query"] = {}) =>
  cachedProfiles(resolveSiteKey(), params);

/**
 * Get a profile (cached)
 * @category Profiles
 */
export const getProfile = async (
  params: Omit<GetProfileData["path"], "siteKey">,
) => cachedProfile(resolveSiteKey(), params);

/**
 * Get a listing of events for a profile (cached)
 * @category Profiles
 */
export const getProfileEvents = async (
  params: Omit<GetProfileEventsData["path"], "siteKey"> &
    GetProfileEventsData["query"],
) => cachedProfileEvents(resolveSiteKey(), params);

/**
 * Get a listing of products for a profile (cached)
 * @category Profiles
 */
export const getProfileProducts = async (
  params: Omit<GetProfileProductsData["path"], "siteKey"> &
    GetProfileProductsData["query"],
) => cachedProfileProducts(resolveSiteKey(), params);

/**
 * Get a listing of products (cached)
 * @category Products
 */
export const getProducts = async (params: GetProductsData["query"]) =>
  cachedProducts(resolveSiteKey(), params);

/**
 * Get a product (cached)
 * @category Products
 */
export const getProduct = async (
  params: Omit<GetProductData["path"], "siteKey">,
) => cachedProduct(resolveSiteKey(), params);

/**
 * Search a site for all content types (deduped per render, not cached across
 * requests: the key is visitor input, so entries would be unbounded)
 *
 * @category Sites
 */
export const searchSite = cache((params: SearchSiteData["query"]) =>
  withSiteKey(resolveSiteKey(), () => _searchSite(params)),
);
