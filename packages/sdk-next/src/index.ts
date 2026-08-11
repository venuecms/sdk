// Re-export everything from SDK except the data-fetching functions we override
export {
  // Configuration
  setConfig,

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

// The request URL, stamped onto a header in the proxy and read back inside the
// render, so listing blocks paginate without a page threading `searchParams`
// down to them. `SearchParams` itself comes out through ./components, which is
// where it was already exported from.
export {
  VENUE_URL_HEADER,
  getRequestSearchParams,
  venueRequestHeaders,
} from "./lib/searchParams";

export * from "./components";
