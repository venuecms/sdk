const NAMESPACE = "venue";

/** @category Caching */
export type VenueCollection =
  | "site"
  | "events"
  | "pages"
  | "news"
  | "profiles"
  | "products";

/**
 * Cache tags attached by this package's cached reads. Pass these to
 * `revalidateTag` to purge on publish.
 *
 * @example
 * ```ts
 * revalidateTag(venueCacheTag.record(siteKey, "news", slug));
 * revalidateTag(venueCacheTag.collection(siteKey, "news"));
 * ```
 *
 * @category Caching
 */
export const venueCacheTag = {
  site: (siteKey: string) => `${NAMESPACE}:${siteKey}`,

  collection: (siteKey: string, collection: VenueCollection) =>
    `${NAMESPACE}:${siteKey}:${collection}`,

  record: (siteKey: string, collection: VenueCollection, slug: string) =>
    `${NAMESPACE}:${siteKey}:${collection}:${slug}`,
};
