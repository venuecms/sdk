/**
 * The listing blocks an author can drop into rich-text content.
 *
 * The platform's editor can place an event/news/page/product/profile listing in
 * any content. Each arrives as a node whose `attrs` are that endpoint's filters.
 * This layer recognises such a node, validates its attributes, queries the
 * endpoint, and hands the records to the component the caller supplied — so a
 * template says how a listing *looks* and nothing more:
 *
 *   <VenueContent
 *     content={content}
 *     contentStyles={{
 *       p: "my-4",                                    // a class name
 *       eventListing: ({ records, site }) => (        // a component
 *         <EventsList>
 *           {records.map((e) => <ListEvent key={e.id} event={e} site={site} />)}
 *         </EventsList>
 *       ),
 *     }}
 *   />
 *
 * Class names and listing components go on one map, keyed by node type: a
 * caller has one place to say how content renders, and does not have to know
 * which of its entries the renderer treats as which.
 *
 * The querying lives here rather than in the component because every template
 * would otherwise repeat it — the same attribute parsing, the same query
 * building, the same in-band failure handling — and get it subtly differently.
 * A listing component is handed its records and is not async.
 */
import type { Site } from "@venuecms/sdk";
import { Suspense } from "react";

import { ErrorBoundary } from "../../utils/ErrorBoundary";
import type { NodeHandler, NodeHandlers, NodeProps, RenderNode } from "../types";

import { listingParamBase, listingParamNames } from "./identity";
import type {
  ListingPagination,
  PaginatedListingNodeType,
  SearchParams,
} from "./pagination";
import {
  isPaginatedListing,
  pageLinks,
  paginationMeta,
  readPage,
} from "./pagination";
import type { ListingBlockNodeType } from "./params";
import { parseListingAttributes } from "./params";
import type { ListingRecords, ResolvedListing } from "./resolve";
import { resolveListing } from "./resolve";

export type { ListingBlockNodeType, ListingRecords, ResolvedListing };
export { LISTING_BLOCK_NODE_TYPES } from "./params";
export { listingParamNames };
export type {
  ListingPagination,
  ListingPageLinks,
  PaginatedListingNodeType,
  PaginationMeta,
  SearchParams,
} from "./pagination";
export {
  MAX_PAGE,
  MAX_PAGE_LINKS,
  MAX_PAGE_SIZE,
  PAGINATED_LISTING_NODE_TYPES,
} from "./pagination";

/**
 * What a listing component receives: the block's records, the site, and — for
 * the listings that paginate — the pagination.
 *
 * It is called with data already resolved, so it may be a plain function —
 * nothing here awaits it.
 *
 * `pagination` is absent from the pages listing's props rather than always
 * null, because that block does not paginate at all (see ./pagination). It is
 * nullable on the other four for the block whose author set no page size: the
 * endpoint returned every record, so there are no pages to draw.
 */
export type ListingProps<Type extends ListingBlockNodeType> = {
  records: ListingRecords[Type];
  site: Site | null;
} & (Type extends PaginatedListingNodeType
  ? { pagination: ListingPagination | null }
  : Record<never, never>);

/**
 * What the renderer knows that a listing block cannot work out for itself.
 *
 * Search params come from the route, since a nested Server Component cannot
 * read them; the param names come from a walk of the whole document, since a
 * block's param depends on the other blocks around it. Both are optional, and a
 * listing without them still renders — it only loses its links.
 */
export type ListingContext = {
  searchParams: SearchParams | null;
  paramNames: Map<RenderNode, string>;
};

const NO_CONTEXT: ListingContext = {
  searchParams: null,
  paramNames: new Map(),
};

/**
 * A block's pagination, or null when the block does not have any.
 *
 * The runtime check that decides it cannot narrow `Type`, which is still
 * generic here, so the `limit` it reads comes off the union rather than off the
 * parameter's declared shape.
 */
const buildPagination = <Type extends ListingBlockNodeType>(
  nodeType: Type,
  params: object,
  page: number,
  count: number | null,
  pageLength: number,
  param: string | null,
  searchParams: SearchParams | null,
): ListingPagination | null => {
  // The pages listing's params carry no `limit` at all, so it is read off the
  // union rather than declared on the parameter — the check below is what
  // decides whether this block has pages, not the shape of its attributes.
  const { limit, page: authorPage } = params as {
    limit?: number | null;
    page?: number | null;
  };

  if (!isPaginatedListing(nodeType) || limit == null || !param) {
    return null;
  }

  const meta = paginationMeta({ page, pageSize: limit, count, pageLength });

  // The author's own starting page, not the one being rendered: it is what a
  // URL silent about this block falls back to, so it decides whether a page-0
  // href can leave the param off. See `pageHref`.
  return {
    ...meta,
    links: pageLinks(searchParams, param, meta, authorPage ?? 0),
  };
};

/** A component that renders one listing block's records. */
export type ListingComponent<Type extends ListingBlockNodeType> = (
  props: ListingProps<Type>,
) => React.ReactNode;

/**
 * The listing components a caller may supply, keyed by node type.
 *
 * Every key is optional: a template with no way to render a given listing
 * leaves it off, and the renderer keeps whatever it would otherwise do with
 * that node rather than drawing nothing. Keying off ListingBlockNodeType makes
 * a key that is not a listing type a compile error rather than a silently
 * unused entry.
 */
export type ListingComponents = {
  [Type in ListingBlockNodeType]?: ListingComponent<Type>;
};

/**
 * The same map with every listing required.
 *
 * A template that means to render all of them annotates its map with this, so a
 * listing type added to the contract fails to compile until it has a component
 * — rather than being dropped from the published page with a console warning.
 */
export type AllListingComponents = {
  [Type in ListingBlockNodeType]: ListingComponent<Type>;
};

/**
 * Binds one listing node type to the component that renders it.
 *
 * The renderer's handlers are synchronous, so the awaiting happens in a
 * component of its own that Suspense contains. Suspending here keeps the
 * surrounding prose streaming: a block sits mid-content, so without a boundary
 * the whole article would wait on the listing's request.
 *
 * The two boundaries cover different failures. Rendering on the server React
 * does not run error boundaries — it is Suspense that contains a throw, falling
 * back to null and leaving the rest of the article intact. The ErrorBoundary
 * covers the client, where React retries the failed boundary and a second
 * failure would escape to the route's error page. Neither fires on the ordinary
 * failure, because a bad request comes back as absent data rather than a throw;
 * that reaches the component as no records.
 *
 * A listing that matched nothing renders nothing rather than an empty state: it
 * sits mid-prose, where a "nothing found" message would read as author's copy.
 * A page *past* the end of a listing that did match is not that case — it still
 * renders, so the pager comes with it and a reader who over-shot has a link
 * back rather than a block that vanished.
 */
const listingHandler = <Type extends ListingBlockNodeType>(
  nodeType: Type,
  Component: ListingComponent<Type>,
  context: ListingContext,
): NodeHandler => {
  // Parsing and resolving sit inside their own component so both run while the
  // subtree under the boundaries renders. Doing that work in the handler body
  // would run it while this handler's element is being built — outside the
  // boundaries it appears to sit inside — and a synchronous throw would escape
  // them and take the whole document with it.
  const Listing = async ({ node }: NodeProps) => {
    const attrs = node.attrs ?? {};
    const params = parseListingAttributes[nodeType](attrs);

    // Falls back to the block's own hash when the node is not in the map, so
    // handlers built outside the renderer still paginate — the map only exists
    // to settle which of two identical blocks is which.
    const param = isPaginatedListing(nodeType)
      ? (context.paramNames.get(node) ??
        listingParamBase(nodeType, attrs as Record<string, unknown>))
      : null;

    // The URL wins over the author's starting page, which is what makes a link
    // a reader followed show the page they asked for — but only when it names
    // this block. A URL silent about it leaves the author's `page` standing,
    // rather than resetting every block that starts on a later page the moment
    // a caller threads `searchParams` in.
    const fromUrl =
      context.searchParams && param
        ? readPage(context.searchParams, param)
        : null;

    const page = fromUrl ?? (params as { page?: number | null }).page ?? 0;

    // Only a block that reports pagination has its page overridden. A paginated
    // node type whose author set no page size has a param name all the same —
    // it is a hash of the attributes, not of the page size — and shifting its
    // query by a page it will never draw a pager for would move records with
    // nothing on screen to explain it.
    const paginated = param != null && (params as { limit?: number | null }).limit != null;

    const { records, count, site } = await resolveListing(nodeType, {
      ...params,
      ...(paginated ? { page } : {}),
    } as typeof params);

    // Nothing matched, so the block renders as nothing. A reported count of
    // zero is what settles it: a reader who walked past the last page also has
    // no records, and that block still has to draw the pager that gets them
    // back.
    //
    // Where no count was reported, the page itself is the only evidence — but
    // only on the first one. A later page coming back empty means the listing
    // ran out, not that it was empty, and that is reachable through this
    // block's own next link: without a count, `hasNext` is "the last page came
    // back full", so a listing whose length is an exact multiple of its page
    // size offers a next link to nothing. Dropping the block there would delete
    // the listing from the article and take the way back with it.
    if (count === 0 || (count == null && !records.length && page === 0)) {
      return null;
    }

    const pagination = buildPagination(
      nodeType,
      params,
      page,
      count,
      records.length,
      param,
      context.searchParams,
    );

    // One cast at the boundary: `ListingProps` gives `pagination` only to the
    // paginated node types, and the runtime check that decided this one is
    // paginated lives inside buildPagination where `Type` is no longer visible.
    // The cast is on the component rather than the props because JSX cannot
    // spread a still-generic conditional type.
    const Render = Component as unknown as (props: {
      records: ListingRecords[Type];
      site: Site | null;
      pagination: ListingPagination | null;
    }) => React.ReactNode;

    return <Render records={records} site={site} pagination={pagination} />;
  };

  return ({ node }) => (
    <ErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <Listing node={node} />
      </Suspense>
    </ErrorBoundary>
  );
};

/**
 * The supplied listing components wrapped into node handlers.
 *
 * Built per render rather than memoised: the renderer resolves to the server
 * build under the app router, so handlers are minted once per request and these
 * fresh component identities never reach a client reconciliation that could
 * remount them.
 */
export const listingHandlers = (
  components: ListingComponents,
  context: ListingContext = NO_CONTEXT,
): NodeHandlers => {
  const build = <Type extends ListingBlockNodeType>(
    nodeType: Type,
    Component: ListingComponent<Type> | undefined,
  ) => (Component ? listingHandler(nodeType, Component, context) : undefined);

  // Spelled out per type rather than looped, so each entry keeps the param and
  // record shapes its own key promises — iterating the node types would widen
  // every entry to the union and lose the pairing. Annotated with every node
  // type so a listing added to the contract fails to compile until it is wired
  // here too; a bare list of calls would let it ship unregistered.
  const handlers: Record<ListingBlockNodeType, NodeHandler | undefined> = {
    eventListing: build("eventListing", components.eventListing),
    newsListing: build("newsListing", components.newsListing),
    pageListing: build("pageListing", components.pageListing),
    productListing: build("productListing", components.productListing),
    profileListing: build("profileListing", components.profileListing),
  };

  return Object.fromEntries(
    Object.entries(handlers).filter(
      (entry): entry is [string, NodeHandler] => entry[1] !== undefined,
    ),
  );
};

/**
 * Splits a caller's one map into the class names the renderer applies and the
 * handlers it dispatches on.
 *
 * A string is a class name for a node the renderer already draws; a function is
 * a listing component. That is the whole rule, and it is why the two can share
 * a map: no node type takes both.
 */
export const splitContentEntries = <Styles extends Record<string, unknown>>(
  entries: Styles,
  context: ListingContext = NO_CONTEXT,
): { classes: Record<string, string>; handlers: NodeHandlers } => {
  const classes: Record<string, string> = {};
  const components: ListingComponents = {};

  for (const [nodeType, entry] of Object.entries(entries)) {
    if (typeof entry === "string") {
      classes[nodeType] = entry;
      continue;
    }

    if (typeof entry === "function") {
      // The map's own type is what guarantees a function here is the component
      // for this node type; this narrowing only recovers that at runtime, where
      // the key is a plain string.
      components[nodeType as ListingBlockNodeType] =
        entry as ListingComponent<ListingBlockNodeType>;
    }
  }

  return { classes, handlers: listingHandlers(components, context) };
};
