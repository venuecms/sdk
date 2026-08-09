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
import { Suspense } from "react";

import { ErrorBoundary } from "../../utils/ErrorBoundary";
import type { NodeHandler, NodeHandlers, NodeProps } from "../types";

import type { ListingBlockNodeType } from "./params";
import { parseListingAttributes } from "./params";
import type { ListingRecords, ResolvedListing } from "./resolve";
import { resolveListing } from "./resolve";

export type { ListingBlockNodeType, ListingRecords, ResolvedListing };
export { LISTING_BLOCK_NODE_TYPES } from "./params";

/**
 * What a listing component receives: the block's records and the site.
 *
 * It is called with data already resolved, so it may be a plain function —
 * nothing here awaits it.
 */
export type ListingProps<Type extends ListingBlockNodeType> =
  ResolvedListing<Type>;

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
 * An empty listing renders nothing rather than an empty state: it sits
 * mid-prose, where a "nothing found" message would read as author's copy.
 */
const listingHandler = <Type extends ListingBlockNodeType>(
  nodeType: Type,
  Component: ListingComponent<Type>,
): NodeHandler => {
  // Parsing and resolving sit inside their own component so both run while the
  // subtree under the boundaries renders. Doing that work in the handler body
  // would run it while this handler's element is being built — outside the
  // boundaries it appears to sit inside — and a synchronous throw would escape
  // them and take the whole document with it.
  const Listing = async ({ node }: NodeProps) => {
    const params = parseListingAttributes[nodeType](node.attrs ?? {});
    const { records, site } = await resolveListing(nodeType, params);

    if (!records.length) {
      return null;
    }

    return <Component records={records} site={site} />;
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
): NodeHandlers => {
  const build = <Type extends ListingBlockNodeType>(
    nodeType: Type,
    Component: ListingComponent<Type> | undefined,
  ) => (Component ? listingHandler(nodeType, Component) : undefined);

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

  return { classes, handlers: listingHandlers(components) };
};
