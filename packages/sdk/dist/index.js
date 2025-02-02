var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  getEvent: () => getEvent2,
  getEvents: () => getEvents2,
  getLocalizedContent: () => getLocalizedContent,
  getPage: () => getPage2,
  getPages: () => getPages2,
  getProduct: () => getProduct2,
  getProducts: () => getProducts2,
  getProfile: () => getProfile2,
  getProfileEvents: () => getProfileEvents2,
  getProfiles: () => getProfiles2,
  getSite: () => getSite2,
  setConfig: () => setConfig
});
module.exports = __toCommonJS(index_exports);

// src/utils/content.ts
var getLocalizedContent = (localizedContent, locale) => {
  const currentLocale = locale;
  const content = localizedContent?.find(
    (content2) => content2.locale === currentLocale
  ) ?? {};
  return { content, currentLocale };
};

// src/client/sdk.gen.ts
var import_client_fetch = require("@hey-api/client-fetch");
var client = (0, import_client_fetch.createClient)((0, import_client_fetch.createConfig)());
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEvent,
  getEvents,
  getLocalizedContent,
  getPage,
  getPages,
  getProduct,
  getProducts,
  getProfile,
  getProfileEvents,
  getProfiles,
  getSite,
  setConfig
});
