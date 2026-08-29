/**
 * The cache tags every cached read in this package attaches.
 *
 * These exist so an invalidation can be written at all. A cached read expires
 * on its own clock; nothing about a publish in the platform reaches a rendered
 * site until something calls `revalidateTag` with a string the read used. That
 * string has to be built the same way on both sides, and a webhook handler
 * cannot be expected to reconstruct it from prose — so the builders are the
 * package's public surface, and the format below is an implementation detail
 * that may change.
 *
 * Three levels, because a publish invalidates three different things:
 *
 * - the record itself, for the article page that renders it;
 * - the collection, for every listing that includes it — a new news item
 *   changes the sidebar of every *other* news article, not just its own page;
 * - the site, as the blunt instrument for a change with no obvious scope
 *   (a rename, a settings change, a restore from backup).
 *
 * Every read attaches all of the levels that apply to it, so a purge can be as
 * narrow or as wide as the event warrants.
 *
 * @category Caching
 */

/**
 * Namespaces the tags against anything else in a consumer's cache. The tag
 * space is global to a deployment and shared with the app's own `cacheTag`
 * calls, so an unprefixed `"news"` is a collision waiting to happen.
 */
const NAMESPACE = "venue";

/**
 * The content types this package reads, and therefore the ones a purge can
 * name. Kept as a union rather than `string` so a typo in a webhook handler is
 * a type error instead of a tag that quietly matches nothing.
 *
 * @category Caching
 */
export type VenueCollection =
  | "site"
  | "events"
  | "pages"
  | "news"
  | "profiles"
  | "products";

/**
 * Builders for the tags attached by this package's cached reads. Pass the
 * results to `revalidateTag` from `next/cache`.
 *
 * The `siteKey` is required on all three because one deployment can serve many
 * sites — the multi-tenant templates set it per request via `setConfig` — and
 * a tag that omitted it would purge every tenant on any tenant's publish.
 *
 * @example
 * ```ts
 * import { revalidateTag } from "next/cache";
 * import { venueCacheTag } from "@venuecms/sdk-next";
 *
 * // A news article was published: drop its page and every listing it appears in.
 * revalidateTag(venueCacheTag.record(siteKey, "news", slug));
 * revalidateTag(venueCacheTag.collection(siteKey, "news"));
 * ```
 *
 * @category Caching
 */
export const venueCacheTag = {
  /** Everything this package has cached for one site. */
  site: (siteKey: string) => `${NAMESPACE}:${siteKey}`,

  /** Every read of one content type — the listings a new record changes. */
  collection: (siteKey: string, collection: VenueCollection) =>
    `${NAMESPACE}:${siteKey}:${collection}`,

  /** One record, for the narrow purge a single publish needs. */
  record: (siteKey: string, collection: VenueCollection, slug: string) =>
    `${NAMESPACE}:${siteKey}:${collection}:${slug}`,
};
