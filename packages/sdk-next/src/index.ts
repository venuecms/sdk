// Re-export everything from SDK except the data-fetching functions we override
export {
  // Domain lookup (already has custom caching in SDK)
  getSiteKeyByDomain,
  listSiteDomains,

  // Date listings (pass-through)
  getEventDates,
  getNewsDates,

  // Tags (pass-through)
  getTags,

  // Utilities
  getLocalizedContent,
} from "@venuecms/sdk";

// Re-export all types from SDK
export type * from "@venuecms/sdk";

// Export cached versions of data-fetching functions
export {
  getSite,
  getEvents,
  getEvent,
  getPages,
  getPage,
  getNews,
  getNewsArticle,
  getProfiles,
  getProfile,
  getProfileEvents,
  getProfileProducts,
  getProducts,
  getProduct,
  searchSite,
} from "./lib/api";

// Configuration. This package's own `setConfig`, which scopes the siteKey to
// the request as well as configuring the core SDK — see `./lib/api/siteKey`.
export { setConfig } from "./lib/api/siteKey";

export { venueCacheTag, type VenueCollection } from "./lib/api/tags";

export * from "./components";
