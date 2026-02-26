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
  fetch: fetch2,
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
  const newData = await fetch2();
  if (newData) {
    memCache.set(cacheKey, { createdAt: Date.now(), data: newData });
  }
  return newData;
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
var getEventDates = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/events/dates"
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
var getProfileProducts = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/profiles/{slug}/products"
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
var getTags = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/tags"
  });
};
var listSiteDomains = (options) => {
  return (options?.client ?? client).get({
    ...options,
    url: "/api/v2/{siteKey}/public/domains"
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
var customFetch = (url, options) => fetch(url, { ...options, next: { revalidate: 60 } });
var defaultOptions = {
  baseUrl,
  headers,
  fetch: customFetch
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
var listSiteDomains2 = () => listSiteDomains({ path: { siteKey: "noop" } });
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
var getEventDates2 = (params) => {
  return getEventDates({
    path: {
      siteKey
    },
    query: params
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
var getProfileProducts2 = (params) => {
  const { slug, ...query } = params;
  return getProfileProducts({
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
var getTags2 = (params) => {
  return getTags({
    path: {
      siteKey
    },
    query: params
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
  cache,
  getEvent2 as getEvent,
  getEventDates2 as getEventDates,
  getEvents2 as getEvents,
  getLocalizedContent,
  getPage2 as getPage,
  getPages2 as getPages,
  getProduct2 as getProduct,
  getProducts2 as getProducts,
  getProfile2 as getProfile,
  getProfileEvents2 as getProfileEvents,
  getProfileProducts2 as getProfileProducts,
  getProfiles2 as getProfiles,
  getSite2 as getSite,
  getSiteKeyByDomain,
  getTags2 as getTags,
  listSiteDomains2 as listSiteDomains,
  searchSite2 as searchSite,
  setConfig
};
