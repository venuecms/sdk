import * as sdk from "./client/sdk.gen";
import {
  GetEventData,
  GetEventsData,
  GetPageData,
  GetPagesData,
  GetProfileData,
  GetProfilesData,
} from "./client/types.gen";

const siteKey: string = process.env.VENUE_SITE_KEY;
const apiKey: string = process.env.VENUE_API_KEY;
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
 * @category Content
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
 * @category Content
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
 * @category Content
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
 * @category Content
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
 * @category Content
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
 * @category Content
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
 * @category Content
 */
export const getProfile = (params: Omit<GetProfileData["path"], "siteKey">) => {
  return sdk.getProfile({
    path: {
      ...params,
      siteKey,
    },
  });
};
