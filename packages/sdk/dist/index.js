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
  cache: () => cache,
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
  getSiteKeyByDomain: () => getSiteKeyByDomain,
  searchSite: () => searchSite2,
  setConfig: () => setConfig
});
module.exports = __toCommonJS(index_exports);

// src/utils/content.ts
var getLocalizedContent = (localizedContent, locale) => {
  const currentLocale = locale;
  const foundLocalizedContent = localizedContent?.find(
    (content2) => content2.locale === currentLocale
  );
  const content = foundLocalizedContent ?? localizedContent?.[0] ?? {};
  return { content, currentLocale };
};

// src/utils/cache.ts
var memCache = /* @__PURE__ */ new Map();
var MEMCACHE_EXPIRE = 2 * 60 * 1e3;
var TypeMap = {
  site: "site",
  customDomain: "customDomain"
};
var getCacheKey = (type, siteKey2 = "global", params) => {
  const key = TypeMap[type];
  const [fullSlug, ...otherParams] = params;
  const slug = fullSlug?.split("/").slice(-1)[0] ?? "";
  return `${siteKey2}/${key}/${slug}${otherParams?.length ? `:${otherParams.join(":")}` : ""}`;
};
var cache = async ({
  type,
  siteKey: siteKey2,
  params = [],
  fetch,
  disable,
  ttl = MEMCACHE_EXPIRE
}) => {
  const cacheKey = getCacheKey(type, siteKey2, params);
  if (!disable) {
    if (memCache.has(cacheKey)) {
      const cachedVal = memCache.get(cacheKey);
      if (Date.now() - cachedVal.createdAt < ttl) {
        return cachedVal.data;
      }
    }
  }
  const newData = await fetch();
  if (newData) {
    memCache.set(cacheKey, { createdAt: Date.now(), data: newData });
  }
  return newData;
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
  return cache({
    type: "site",
    params: [domain],
    ttl: 24 * 60 * 60 * 1e3,
    // 24 hour
    fetch: () => getSiteByDomain({
      path: {
        siteKey: "-",
        // this is arbitrary and may be fixed later
        domain
      },
      headers
    })
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cache,
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
  getSiteKeyByDomain,
  searchSite,
  setConfig
});
