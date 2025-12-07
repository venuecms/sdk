import { cache } from "react";
import {
  getSite as _getSite,
  getEvents as _getEvents,
  getEvent as _getEvent,
  getPages as _getPages,
  getPage as _getPage,
  getProfiles as _getProfiles,
  getProfile as _getProfile,
  getProfileEvents as _getProfileEvents,
  getProducts as _getProducts,
  getProduct as _getProduct,
  searchSite as _searchSite,
  type GetEventsData,
  type GetEventData,
  type GetPagesData,
  type GetPageData,
  type GetProfilesData,
  type GetProfileData,
  type GetProfileEventsData,
  type GetProductsData,
  type GetProductData,
  type SearchSiteData,
} from "@venuecms/sdk";

/**
 * Get the site configured via the siteKey (cached)
 * @category Sites
 */
export const getSite = cache(_getSite);

/**
 * Get a list of events (cached)
 * @category Events
 */
export const getEvents = cache(
  (params: GetEventsData["query"] = {}) => _getEvents(params)
);

/**
 * Retrieve data for a single event (cached)
 * @category Events
 */
export const getEvent = cache(
  (params: Omit<GetEventData["path"], "siteKey">) => _getEvent(params)
);

/**
 * Get a list of all pages (cached)
 * @category Pages
 */
export const getPages = cache(
  (params: GetPagesData["query"] = {}) => _getPages(params)
);

/**
 * Get a single page using the slug (cached)
 * @category Pages
 */
export const getPage = cache(
  (params: Omit<GetPageData["path"], "siteKey">) => _getPage(params)
);

/**
 * Get a list of profiles (cached)
 * @category Profiles
 */
export const getProfiles = cache(
  (params: GetProfilesData["query"] = {}) => _getProfiles(params)
);

/**
 * Get a profile (cached)
 * @category Profiles
 */
export const getProfile = cache(
  (params: Omit<GetProfileData["path"], "siteKey">) => _getProfile(params)
);

/**
 * Get a listing of events for a profile (cached)
 * @category Profiles
 */
export const getProfileEvents = cache(
  (
    params: Omit<GetProfileEventsData["path"], "siteKey"> &
      GetProfileEventsData["query"]
  ) => _getProfileEvents(params)
);

/**
 * Get a listing of products (cached)
 * @category Products
 */
export const getProducts = cache(
  (params: GetProductsData["query"]) => _getProducts(params)
);

/**
 * Get a product (cached)
 * @category Products
 */
export const getProduct = cache(
  (params: Omit<GetProductData["path"], "siteKey">) => _getProduct(params)
);

/**
 * Search a site for all content types (cached)
 * @category Sites
 */
export const searchSite = cache(
  (params: SearchSiteData["query"]) => _searchSite(params)
);
