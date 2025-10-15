const memCache = new Map();
const MEMCACHE_EXPIRE = 2 * 60 * 1000; // two minutes

const TypeMap = {
  site: "site",
  customDomain: "customDomain",
};

const getCacheKey = (
  type: keyof typeof TypeMap,
  siteKey: string = 'global',
  params: Array<string>,
) => {
  const key = TypeMap[type];
  const [fullSlug, ...otherParams] = params;

  // this matches the ability to disregard full paths so pages can be moved without a 404
  const slug = fullSlug?.split("/").slice(-1)[0] ?? "";
  return `${siteKey}/${key}/${slug}${otherParams?.length ? `:${otherParams.join(":")}` : ""
    }`;
};

// A simple in-memory cache for faster resolution. THIS CAN BE GLOBAL so be careful with site-specific items
export const cache = async <T = any>({
  type,
  siteKey,
  params = [],
  fetch,
  disable,
  ttl = MEMCACHE_EXPIRE,
}: {
  type: keyof typeof TypeMap;
  siteKey?: string;
  params?: any[];
  fetch: () => Promise<any>;
  disable?: boolean,
  ttl?: number;
}): Promise<T> => {
  const cacheKey = getCacheKey(type, siteKey, params);

  if (!disable) {
    if (memCache.has(cacheKey)) {
      const cachedVal = memCache.get(cacheKey);
      if (Date.now() - cachedVal.createdAt < ttl) {
        return cachedVal.data;
      }
    }
  }

  // retrieve the data from the fetch call if no memcache
  const newData = await fetch();
  if (newData) {
    memCache.set(cacheKey, { createdAt: Date.now(), data: newData });
  }

  return newData as T;

};


