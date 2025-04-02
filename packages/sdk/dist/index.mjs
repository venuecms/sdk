// src/utils/content.ts
var getLocalizedContent = (localizedContent, locale) => {
  const currentLocale = locale;
  const foundLocalizedContent = localizedContent?.find(
    (content2) => content2.locale === currentLocale
  );
  const content = foundLocalizedContent ?? localizedContent?.[0] ?? {};
  return { content, currentLocale };
};

// src/client/sdk.gen.ts
import { createClient, createConfig } from "@hey-api/client-fetch";
var client = createClient(createConfig());
var getSite = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/site"
  });
};
var getEvents = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/events"
  });
};
var getEvent = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/events/{slug}"
  });
};
var getPages = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/pages"
  });
};
var getPage = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/pages/{slug}"
  });
};
var getProfiles = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/profiles"
  });
};
var getProfile = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/profiles/{slug}"
  });
};
var getProfileEvents = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/profiles/{slug}/events"
  });
};
var getProducts = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/products"
  });
};
var getProduct = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/products/{slug}"
  });
};
var searchSite = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/search"
  });
};
var getSiteByDomain = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/domain/{domain}"
  });
};

// src/main.ts
var siteKey = process.env.VENUE_SITE_KEY;
var apiKey = process.env.VENUE_API_KEY;
var headers = {
  Authorization: `Bearer ${apiKey}`
};
var baseUrl = `https://app.venuecms.com`;
var defaultOptions = {
  baseUrl,
  headers
};
client.setConfig(defaultOptions);
var setConfig = (params) => {
  siteKey = params.siteKey;
  client.setConfig({ ...defaultOptions, ...params.options });
};
var getSite2 = () => {
  return getSite({
    path: {
      siteKey
    },
    headers
  });
};
var getSiteKeyByDomain = ({ domain }) => {
  return getSiteByDomain({
    path: {
      siteKey: "-",
      // this is arbitrary and may be fixed later
      domain
    },
    headers
  });
};
var getEvents2 = (params = {}) => {
  return getEvents({
    path: {
      siteKey
    },
    query: params
  });
};
var getEvent2 = (params) => {
  return getEvent({
    path: {
      ...params,
      siteKey
    }
  });
};
var getPages2 = (params = {}) => {
  return getPages({
    path: {
      siteKey
    },
    query: params
  });
};
var getPage2 = (params) => {
  return getPage({
    path: {
      ...params,
      siteKey
    }
  });
};
var getProfiles2 = (params = {}) => {
  return getProfiles({
    path: {
      siteKey
    },
    query: params
  });
};
var getProfile2 = (params) => {
  return getProfile({
    path: {
      ...params,
      siteKey
    }
  });
};
var getProfileEvents2 = (params) => {
  const { slug, ...query } = params;
  return getProfileEvents({
    path: {
      slug,
      siteKey
    },
    query
  });
};
var getProducts2 = (params) => {
  return getProducts({
    path: {
      siteKey
    },
    query: params
  });
};
var getProduct2 = (params) => {
  return getProduct({
    path: {
      ...params,
      siteKey
    }
  });
};
var searchSite2 = (params) => {
  return searchSite({
    path: {
      siteKey
    },
    query: params
  });
};
export {
  getEvent2 as getEvent,
  getEvents2 as getEvents,
  getLocalizedContent,
  getPage2 as getPage,
  getPages2 as getPages,
  getProduct2 as getProduct,
  getProducts2 as getProducts,
  getProfile2 as getProfile,
  getProfileEvents2 as getProfileEvents,
  getProfiles2 as getProfiles,
  getSite2 as getSite,
  getSiteKeyByDomain,
  searchSite2 as searchSite,
  setConfig
};
