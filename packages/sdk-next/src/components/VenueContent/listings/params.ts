/**
 * The listing blocks' attribute contract.
 *
 * The platform's editor can drop an event/news/page/product/profile listing into
 * any rich-text content. Each block serializes the query params of its public
 * endpoint, and reaches us as a node in `contentJSON` whose `attrs` carry the
 * block's own param names.
 *
 * Values are validated rather than trusted: an author-editable attribute is
 * untrusted input, and a bad one should drop out of the query instead of
 * reaching the endpoint.
 *
 * This module is the pure half of a listing — attrs in, endpoint query out. It
 * calls nothing, so it is testable without a network and reusable by any caller
 * that wants the query without the request. ./resolve owns the request.
 */
import type {
  GetEventsData,
  GetNewsData,
  GetPagesData,
  GetProductsData,
  GetProfilesData,
} from "@venuecms/sdk";

// A value import, and not a cycle: ./pagination imports nothing at all, from
// here or anywhere. It is the leaf the bounds live on, which is what lets both
// the attribute path here and the URL path there clamp against one definition.
// Keep it a leaf — an import back into this module is the cycle.
import { MAX_PAGE, MAX_PAGE_SIZE } from "./pagination";

/** Every TipTap node type rendered as a listing. */
export const LISTING_BLOCK_NODE_TYPES = [
  "eventListing",
  "newsListing",
  "pageListing",
  "productListing",
  "profileListing",
] as const;

export type ListingBlockNodeType = (typeof LISTING_BLOCK_NODE_TYPES)[number];

export type NodeAttrs = Record<string, unknown>;

type Dir = "asc" | "desc";

const DIRS = ["asc", "desc"] as const;

const EVENT_ORDER_BY = ["startDate", "createdAt", "updatedAt"] as const;
const NEWS_ORDER_BY = ["date", "order", "createdAt", "updatedAt"] as const;
const PAGE_ORDER_BY = ["createdAt", "updatedAt"] as const;
const PRODUCT_ORDER_BY = ["order", "createdAt", "updatedAt"] as const;
const PROFILE_ORDER_BY = ["slug", "createdAt", "updatedAt"] as const;

const LISTING_TYPES = ["upcoming", "past", "all"] as const;

const PROFILE_TYPES = ["member"] as const;

type ListingType = (typeof LISTING_TYPES)[number];

// Query shapes are read off the generated endpoint types, so a param the
// endpoint drops or renames surfaces as a type error rather than a silent
// no-op. The guard is the annotated local in each builder below: an object
// literal assigned to an annotated target gets excess-property checked, and
// that is what catches a param the endpoint no longer has. Returning the
// literal straight out of the generic `compact` erases the check — don't.
export type EventsQuery = NonNullable<GetEventsData["query"]>;
export type NewsQuery = NonNullable<GetNewsData["query"]>;
export type PagesQuery = NonNullable<GetPagesData["query"]>;
export type ProductsQuery = NonNullable<GetProductsData["query"]>;
export type ProfilesQuery = NonNullable<GetProfilesData["query"]>;

// `limit=0` is falsy server-side — `take` drops out of the pagination and the
// endpoint returns every record — so only positive limits are representable.
const isValidLimit = (value: number) => Number.isInteger(value) && value >= 1;
const isValidPage = (value: number) => Number.isInteger(value) && value >= 0;
const isValidTimestamp = (value: number) =>
  Number.isInteger(value) && value > 0;

const toNumber = (
  value: unknown,
  isValid: (value: number) => boolean,
): number | null => {
  if (typeof value === "number") {
    return isValid(value) ? value : null;
  }

  if (typeof value !== "string" || value.trim() === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) && isValid(parsed) ? parsed : null;
};

const toFlag = (value: unknown): boolean => value === true || value === "true";

/**
 * The bounds on the free-text fields.
 *
 * These are lengths no author types, so they cost real content nothing. What
 * they bound is what one block can make a consumer's deployment do on every
 * uncached render of the article it sits in: an uncapped `query` is a full-text
 * search run on the site's own credentials that misses the upstream cache on
 * every distinct string, and an uncapped `tags` array serializes into a
 * multi-megabyte URL the consumer's server builds in-process before the
 * endpoint ever sees it. The attributes come from the platform's editor rather
 * than from a reader, so this is a bound on a mistake rather than on an attack —
 * but the article is public and the render is uncached, so the mistake is paid
 * for once per request. The numeric bounds are enforced the same way, for the
 * same reason — see `parsePagination`.
 */
const MAX_TEXT_LENGTH = 200;
const MAX_TAGS = 20;
const MAX_TAG_LENGTH = 100;

/**
 * Cuts a string to a length without splitting a character in half.
 *
 * `slice` counts UTF-16 code units, so a cut landing between the halves of an
 * astral character leaves a lone surrogate on the end. That is not merely
 * mangled text: the query serializer percent-encodes what it is given, and
 * `encodeURIComponent` throws `URIError` on an unpaired surrogate. The throw
 * surfaces as a listing block that vanishes from the article with no
 * diagnostic — and vanishes on every page of it, since the attributes that
 * produced the throw are the same on each.
 *
 * Counting code points also means the bound is the same for every author: a cap
 * meant as "200 characters" that admits 200 emoji from one author and 100 from
 * another is not a bound anyone can predict.
 */
const cut = (value: string, max: number): string => {
  const points = [...value];

  return points.length > max ? points.slice(0, max).join("") : value;
};

const toText = (value: unknown): string | null =>
  typeof value === "string" && value !== ""
    ? cut(value, MAX_TEXT_LENGTH)
    : null;

// Tags are trimmed: a comma-separated list an author typed by hand ("jazz,
// live") would otherwise send a space-prefixed tag that matches no record and
// silently empty the listing.
const toTags = (value: unknown): string[] => {
  const tags = Array.isArray(value)
    ? value.filter((tag): tag is string => typeof tag === "string")
    : typeof value === "string"
      ? value.split(",")
      : [];

  // Cut to the count before trimming, so a long list has MAX_TAGS strings cut
  // to length rather than all of them. The split above already walked the whole
  // value — this bounds the work after it, not the split.
  return tags
    .slice(0, MAX_TAGS)
    .map((tag) => cut(tag.trim(), MAX_TAG_LENGTH))
    .filter(Boolean);
};

const toOption = <T extends string>(
  value: unknown,
  options: readonly T[],
): T | null => options.find((option) => option === value) ?? null;

/** Drops the params an author left unset so they never reach the endpoint. */
const compact = <T extends object>(query: T): T =>
  Object.fromEntries(
    Object.entries(query).filter(([, value]) => value !== undefined),
  ) as T;

const optional = <T>(value: T | null): T | undefined => value ?? undefined;

/**
 * A flag only narrows a listing, so an unset one is omitted rather than sent.
 * The endpoint types its flags as raw query values (`string | string[]`, the
 * same shape as `tags`), so a set flag is serialized as `"true"`.
 */
const optionalFlag = (value: boolean): "true" | undefined =>
  value ? "true" : undefined;

const optionalTags = (tags: string[]): string[] | undefined =>
  tags.length ? tags : undefined;

/** The filters every block shares; only the sortable columns differ. */
type CommonFilters<Column extends string> = {
  orderBy: Column | null;
  dir: Dir | null;
  tags: string[];
  query: string | null;
};

const parseCommonFilters = <Column extends string>(
  attrs: NodeAttrs,
  columns: readonly Column[],
): CommonFilters<Column> => ({
  orderBy: toOption(attrs.orderBy, columns),
  dir: toOption(attrs.dir, DIRS),
  tags: toTags(attrs.tags),
  query: toText(attrs.query),
});

type Pagination = { limit: number | null; page: number | null };

/**
 * The page size and page, clamped to what the endpoint may be asked for.
 *
 * The ceiling on `limit` is applied here rather than at the query builders, so
 * that `pagination.pageSize` — which is read off the parsed params — reports the
 * size actually asked for. Clamping further downstream would leave a block
 * whose author typed 500 drawing a pager numbered against 500 while the
 * endpoint returned 100, so every page but the first would be numbered wrong.
 *
 * `page` is bounded because the endpoints page by offset, so a page number is
 * an offset for the endpoint to walk. A URL asking for a deeper page is already
 * clamped when it is read (see `readPage`), but a block whose author typed one
 * into the `page` attribute reaches the endpoint through here, on every
 * uncached render of the article.
 */
const parsePagination = (attrs: NodeAttrs): Pagination => {
  const limit = toNumber(attrs.limit, isValidLimit);
  const page = toNumber(attrs.page, isValidPage);

  return {
    limit: limit == null ? null : Math.min(limit, MAX_PAGE_SIZE),
    page: page == null ? null : Math.min(page, MAX_PAGE),
  };
};

/**
 * The `lt` bound a listing type implies: "past" means before now unless the
 * author pinned an explicit bound, while "upcoming" and "all" leave it open.
 * Shared by the two blocks that take a time window so they cannot drift on what
 * "past" means.
 */
const resolveListingLt = (
  listingType: ListingType,
  lt: number | null,
  now: number,
): number | undefined =>
  optional(listingType === "past" && lt == null ? now : lt);

export type EventListingAttributes = CommonFilters<
  (typeof EVENT_ORDER_BY)[number]
> &
  Pagination & {
    listingType: ListingType;
    featured: boolean;
    rootOnly: boolean;
    lt: number | null;
    gt: number | null;
    legacyId: string | null;
  };

export const parseEventListingAttributes = (
  attrs: NodeAttrs,
): EventListingAttributes => ({
  ...parseCommonFilters(attrs, EVENT_ORDER_BY),
  ...parsePagination(attrs),
  listingType: toOption(attrs.listingType, LISTING_TYPES) ?? "upcoming",
  featured: toFlag(attrs.featured),
  rootOnly: toFlag(attrs.rootOnly),
  lt: toNumber(attrs.lt, isValidTimestamp),
  gt: toNumber(attrs.gt, isValidTimestamp),
  legacyId: toText(attrs.legacyId),
});

/**
 * `listingType` is the one attribute that is not a param: the endpoint takes a
 * time window, so "past" becomes `lt=<now>` resolved at render time and
 * "upcoming" becomes the `upcoming` flag. "all" applies no window.
 */
export const buildEventListingQuery = (
  attrs: EventListingAttributes,
  now: number,
): EventsQuery => {
  const query: EventsQuery = {
    upcoming: optionalFlag(attrs.listingType === "upcoming"),
    lt: resolveListingLt(attrs.listingType, attrs.lt, now),
    gt: optional(attrs.gt),
    limit: optional(attrs.limit),
    page: optional(attrs.page),
    orderBy: optional(attrs.orderBy),
    dir: optional(attrs.dir),
    featured: optionalFlag(attrs.featured),
    rootOnly: optionalFlag(attrs.rootOnly),
    tags: optionalTags(attrs.tags),
    query: optional(attrs.query),
    legacyId: optional(attrs.legacyId),
  };

  return compact(query);
};

export type NewsListingAttributes = CommonFilters<
  (typeof NEWS_ORDER_BY)[number]
> &
  Pagination & {
    listingType: ListingType;
    featured: boolean;
    lt: number | null;
    gt: number | null;
  };

export const parseNewsListingAttributes = (
  attrs: NodeAttrs,
): NewsListingAttributes => ({
  ...parseCommonFilters(attrs, NEWS_ORDER_BY),
  ...parsePagination(attrs),
  // Unlike events, a news listing shows every article by default.
  listingType: toOption(attrs.listingType, LISTING_TYPES) ?? "all",
  featured: toFlag(attrs.featured),
  lt: toNumber(attrs.lt, isValidTimestamp),
  gt: toNumber(attrs.gt, isValidTimestamp),
});

export const buildNewsListingQuery = (
  attrs: NewsListingAttributes,
  now: number,
): NewsQuery => {
  const query: NewsQuery = {
    upcoming: optionalFlag(attrs.listingType === "upcoming"),
    lt: resolveListingLt(attrs.listingType, attrs.lt, now),
    gt: optional(attrs.gt),
    limit: optional(attrs.limit),
    page: optional(attrs.page),
    orderBy: optional(attrs.orderBy),
    dir: optional(attrs.dir),
    featured: optionalFlag(attrs.featured),
    tags: optionalTags(attrs.tags),
    query: optional(attrs.query),
  };

  return compact(query);
};

/**
 * The pages block has no `limit`/`page` and never serializes them, so there is
 * nothing to read here. The endpoint's schema does accept both, but the pages
 * read applies them only to news listings — regular pages must all come back
 * for parent-path resolution — so the editor deliberately omits them rather
 * than offer a page size the API drops.
 */
export type PageListingAttributes = CommonFilters<
  (typeof PAGE_ORDER_BY)[number]
> & {
  featured: boolean;
};

export const parsePageListingAttributes = (
  attrs: NodeAttrs,
): PageListingAttributes => ({
  ...parseCommonFilters(attrs, PAGE_ORDER_BY),
  featured: toFlag(attrs.featured),
});

export const buildPageListingQuery = (
  attrs: PageListingAttributes,
): PagesQuery => {
  const query: PagesQuery = {
    orderBy: optional(attrs.orderBy),
    dir: optional(attrs.dir),
    featured: optionalFlag(attrs.featured),
    tags: optionalTags(attrs.tags),
    query: optional(attrs.query),
  };

  return compact(query);
};

export type ProductListingAttributes = CommonFilters<
  (typeof PRODUCT_ORDER_BY)[number]
> &
  Pagination;

export const parseProductListingAttributes = (
  attrs: NodeAttrs,
): ProductListingAttributes => ({
  ...parseCommonFilters(attrs, PRODUCT_ORDER_BY),
  ...parsePagination(attrs),
});

export const buildProductListingQuery = (
  attrs: ProductListingAttributes,
): ProductsQuery => {
  const query: ProductsQuery = {
    limit: optional(attrs.limit),
    page: optional(attrs.page),
    orderBy: optional(attrs.orderBy),
    dir: optional(attrs.dir),
    tags: optionalTags(attrs.tags),
    query: optional(attrs.query),
  };

  return compact(query);
};

export type ProfileListingAttributes = CommonFilters<
  (typeof PROFILE_ORDER_BY)[number]
> &
  Pagination & {
    type: (typeof PROFILE_TYPES)[number] | null;
  };

export const parseProfileListingAttributes = (
  attrs: NodeAttrs,
): ProfileListingAttributes => ({
  ...parseCommonFilters(attrs, PROFILE_ORDER_BY),
  ...parsePagination(attrs),
  type: toOption(attrs.type, PROFILE_TYPES),
});

export const buildProfileListingQuery = (
  attrs: ProfileListingAttributes,
): ProfilesQuery => {
  const query: ProfilesQuery = {
    limit: optional(attrs.limit),
    page: optional(attrs.page),
    orderBy: optional(attrs.orderBy),
    dir: optional(attrs.dir),
    type: optional(attrs.type),
    tags: optionalTags(attrs.tags),
    query: optional(attrs.query),
  };

  return compact(query);
};

/**
 * The parameters each listing node type carries, validated.
 *
 * Pairing the node type with its own attribute shape is what lets the handler
 * map below hand every listing component exactly the params its endpoint takes.
 */
export type ListingParams = {
  eventListing: EventListingAttributes;
  newsListing: NewsListingAttributes;
  pageListing: PageListingAttributes;
  productListing: ProductListingAttributes;
  profileListing: ProfileListingAttributes;
};

/**
 * How each listing node type reads its parameters off the node.
 *
 * The mapped-type annotation pairs each entry with its own param shape, so a
 * node type wired to another listing's parser fails to compile here rather than
 * handing a component filters that its endpoint does not take.
 */
export const parseListingAttributes: {
  [Type in ListingBlockNodeType]: (attrs: NodeAttrs) => ListingParams[Type];
} = {
  eventListing: parseEventListingAttributes,
  newsListing: parseNewsListingAttributes,
  pageListing: parsePageListingAttributes,
  productListing: parseProductListingAttributes,
  profileListing: parseProfileListingAttributes,
};

/**
 * Now, rounded down to the minute.
 *
 * Reads go through fetch with a revalidate window, keyed by URL, so an `lt` that
 * ticks every second would give every request a URL the data cache has never
 * seen. Rounding keeps the window stable between renders.
 */
export const minuteRoundedNow = () => {
  const now = new Date();
  now.setSeconds(0, 0);
  return now.getTime();
};
