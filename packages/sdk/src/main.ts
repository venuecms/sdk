import { RequestOptions } from "@hey-api/client-fetch";
import * as sdk from "./client/sdk.gen";
import {
  GetEventData,
  GetEventsData,
  GetPageData,
  GetPagesData,
  GetProductData,
  GetProductsData,
  GetProfileData,
  GetProfileEventsData,
  GetProfilesData,
} from "./client/types.gen";

let siteKey: string = process.env.VENUE_SITE_KEY;
let apiKey: string = process.env.VENUE_API_KEY;

const headers = {
  Authorization: `Bearer ${apiKey}`,
};
const baseUrl = `https://app.venuecms.com`;

const defaultOptions = {
  baseUrl,
  headers,
};

sdk.client.setConfig(defaultOptions);

/**
 * Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.
 * @category Configuration
 */
export const setConfig = (params: { siteKey: string; options?: Partial<RequestOptions> }, ) => {
  siteKey = params.siteKey;
  sdk.client.setConfig({...defaultOptions, ...params.options});
}

/**
 * Get the site configured via the siteKey
 *
 * @category Sites
 */
export const getSite = () => {
  return sdk.getSite({
    path: {
      siteKey,
    },
    headers,
  });
};

/**
 * Get the siteKey and site id from a domain name.
 *
 * @category Sites
 * @example
 * ```typescript
 * // It should not include the 'https://' component.
 * import { getSiteKeyByDomain } from "@venuecms/sdk";
 * const { data: { siteKey, id } = await getSiteKeyByDomain({ domain: 'mywebsite.com' });
 * ```
 *
 */
export const getSiteKeyByDomain = ({ domain }: { domain: string }) => {
  return sdk.getSiteByDomain({
    path: {
      siteKey: '-', // this is arbitrary and may be fixed later
      domain,
    },
    headers,
  });
};



/**
 * @category Events
 */
export const getEvents = (params: GetEventsData["query"] = {}) => {
  return sdk.getEvents({
    path: {
      siteKey,
    },
    query: params,
  });
};

/**
 * Retrieve data for a single event
 *
 * @category Events
 * @example
 * ```typescript
 * import { getEvent } from "@venuecms/sdk";
 * import { ContentRender, type RenderNode } from "@/lib/utils/renderer";
 *
 * const { data: event } = await getEvent({ slug });
 *
 * // If the event is not found, you should do something like a 404
 * if (!event) {
 *   notFound();
 * }
 * const { localizedContent, location, artists } = event;
 *
 * // Get the content in a localized form (usually locale is pulled from somewhere like your url params)
 * const { content } = getLocalizedContent(event.localizedContent, locale);
 *
 * // Render content for the event
 * return (
 *   <div>
 *     <VenueContent classes={renderedStyles} content={content} />
 *   </div>
 * );
 * ```
 */
export const getEvent = (params: Omit<GetEventData["path"], "siteKey">) => {
  return sdk.getEvent({
    path: {
      ...params,
      siteKey,
    },
  });
};

// PAGES
/**
 * Get a list of all pages
 *
 * @category Pages
 */
export const getPages = (params: GetPagesData["query"] = {}) => {
  return sdk.getPages({
    path: {
      siteKey,
    },
    query: params,
  });
};

/**
 * Get a single page using the slug
 *
 * @category Pages
 */
export const getPage = (params: Omit<GetPageData["path"], "siteKey">) => {
  return sdk.getPage({
    path: {
      ...params,
      siteKey,
    },
  });
};

// PROFILES
/**
 * Get a list of profiles
 *
 * @category Profiles
 */
export const getProfiles = (params: GetProfilesData["query"] = {}) => {
  return sdk.getProfiles({
    path: {
      siteKey,
    },
    query: params,
  });
};

/**
 * Get a profile
 *
 * @category Profiles
 */
export const getProfile = (params: Omit<GetProfileData["path"], "siteKey">) => {
  return sdk.getProfile({
    path: {
      ...params,
      siteKey,
    },
  });
};

/**
 * Get a listing of events for a profile
 * @category Profiles
 */
export const getProfileEvents = (params: Omit<GetProfileEventsData["path"], "siteKey"> & GetProfileEventsData["query"])  => {
  const {slug, ...query} = params;
  return sdk.getProfileEvents({
    path: {
      slug,
      siteKey,
    },
    query,
  });
};

/**
 * Get a listing of products
 * @category Products
 */
export const getProducts = (params: GetProductsData["query"])  => {
  return sdk.getProducts({
    path: {
      siteKey,
    },
    query: params,
  });
};

/**
 * Get a product
 *
 * @category Products
 */
export const getProduct = (params: Omit<GetProductData["path"], "siteKey">) => {
  return sdk.getProduct({
    path: {
      ...params,
      siteKey,
    },
  });
};

