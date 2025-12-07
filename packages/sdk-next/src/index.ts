// Re-export everything from SDK except the data-fetching functions we override
export {
  // Configuration
  setConfig,

  // Domain lookup (already has custom caching in SDK)
  getSiteKeyByDomain,

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
  getProfiles,
  getProfile,
  getProfileEvents,
  getProducts,
  getProduct,
  searchSite,
} from "./lib/api";

export * from "./components";
