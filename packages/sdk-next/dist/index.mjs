// src/utils/content.ts
var getLocalizedContent = (localizedContent, locale) => {
  const currentLocale = locale;
  const content = localizedContent?.find(
    (content2) => content2.locale === currentLocale
  ) ?? {};
  return { content, currentLocale };
};

// src/client/client.gen.ts
import { createClient, createConfig } from "@hey-api/client-next";
var client = createClient(createConfig({
  baseUrl: "https://app.venuecms.com"
}));

// src/client/sdk.gen.ts
var getSite = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/site",
    ...options
  });
};
var getEvents = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/events",
    ...options
  });
};
var getEvent = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/events/{slug}",
    ...options
  });
};
var getPages = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/pages",
    ...options
  });
};
var getPage = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/pages/{slug}",
    ...options
  });
};
var getProfiles = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/profiles",
    ...options
  });
};
var getProfile = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/profiles/{slug}",
    ...options
  });
};
var getProfileEvents = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/profiles/{slug}/events",
    ...options
  });
};
var getProducts = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/products",
    ...options
  });
};
var getProduct = (options) => {
  return (options.client ?? client).get({
    url: "/api/v2/{siteKey}/public/products/{slug}",
    ...options
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
};
var getSite2 = () => {
  return getSite({
    path: {
      siteKey
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
  setConfig
};
