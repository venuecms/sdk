/**
 * The public reads. Each resolves the siteKey and hands it to its counterpart
 * in `./cached`, which is where the caching lives. Requires Next 16 with
 * `cacheComponents: true`; without it `"use cache"` is a build error.
 */
import {
  getSiteKey,
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
import { cache } from "react";

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
export const getSite = async () => cachedSite(getSiteKey());

/**
 * Get a list of events (cached)
 * @category Events
 */
export const getEvents = async (params: GetEventsData["query"] = {}) =>
  cachedEvents(getSiteKey(), params);

/**
 * Retrieve data for a single event (cached)
 * @category Events
 */
export const getEvent = async (
  params: Omit<GetEventData["path"], "siteKey">,
) => cachedEvent(getSiteKey(), params);

/**
 * Get a list of all pages (cached)
 * @category Pages
 */
export const getPages = async (params: GetPagesData["query"] = {}) =>
  cachedPages(getSiteKey(), params);

/**
 * Get a single page using the slug (cached)
 * @category Pages
 */
export const getPage = async (params: Omit<GetPageData["path"], "siteKey">) =>
  cachedPage(getSiteKey(), params);

/**
 * Get a list of all news items (cached)
 * @category News
 */
export const getNews = async (params: GetNewsData["query"] = {}) =>
  cachedNews(getSiteKey(), params);

/**
 * Get a single news item using the slug (cached)
 * @category News
 */
export const getNewsArticle = async (
  params: Omit<GetNewsArticleData["path"], "siteKey">,
) => cachedNewsArticle(getSiteKey(), params);

/**
 * Get a list of profiles (cached)
 * @category Profiles
 */
export const getProfiles = async (params: GetProfilesData["query"] = {}) =>
  cachedProfiles(getSiteKey(), params);

/**
 * Get a profile (cached)
 * @category Profiles
 */
export const getProfile = async (
  params: Omit<GetProfileData["path"], "siteKey">,
) => cachedProfile(getSiteKey(), params);

/**
 * Get a listing of events for a profile (cached)
 * @category Profiles
 */
export const getProfileEvents = async (
  params: Omit<GetProfileEventsData["path"], "siteKey"> &
    GetProfileEventsData["query"],
) => cachedProfileEvents(getSiteKey(), params);

/**
 * Get a listing of products for a profile (cached)
 * @category Profiles
 */
export const getProfileProducts = async (
  params: Omit<GetProfileProductsData["path"], "siteKey"> &
    GetProfileProductsData["query"],
) => cachedProfileProducts(getSiteKey(), params);

/**
 * Get a listing of products (cached)
 * @category Products
 */
export const getProducts = async (params: GetProductsData["query"]) =>
  cachedProducts(getSiteKey(), params);

/**
 * Get a product (cached)
 * @category Products
 */
export const getProduct = async (
  params: Omit<GetProductData["path"], "siteKey">,
) => cachedProduct(getSiteKey(), params);

/**
 * Search a site for all content types (deduped per render, not cached across
 * requests: the key is visitor input, so entries would be unbounded)
 *
 * @category Sites
 */
export const searchSite = cache((params: SearchSiteData["query"]) =>
  _searchSite(params),
);
