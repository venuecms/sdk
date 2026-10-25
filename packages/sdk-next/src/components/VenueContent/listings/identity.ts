/**
 * The search param each listing block owns.
 *
 * A page can hold more than one listing, so `?page=2` is not an option: it would
 * move every block at once. Each block instead gets a param of its own, derived
 * from what the block *is* — its node type and its filters — rather than from
 * where it sits, so a param stays valid when an author reorders the article
 * around it and a link someone shared keeps working.
 *
 * Two identical blocks on one page hash alike, which is the one case identity
 * alone cannot separate; the second and later occurrences take an ordinal
 * suffix. Only the duplicates pay for it, so the ordinary page of distinct
 * listings keeps params that survive reordering.
 */
import type { RenderNode } from "../types";

import type { PaginatedListingNodeType } from "./pagination";
import { isPaginatedListing } from "./pagination";

/**
 * A short, readable prefix per listing type.
 *
 * The param lands in a URL a person may read, so `?evt_1k3f9q=2` beats an
 * opaque digest — you can tell at a glance which block a link moves.
 */
const PARAM_PREFIX: Record<PaginatedListingNodeType, string> = {
  eventListing: "evt",
  newsListing: "nws",
  productListing: "prd",
  profileListing: "prf",
};

/**
 * FNV-1a, base36.
 *
 * A URL wants something short and stable rather than cryptographic — this is an
 * identifier, not a signature, and nothing trusts it. Written out rather than
 * pulled in, since a hash is the whole dependency.
 */
const hash = (input: string): string => {
  let value = 0x811c9dc5;

  for (let index = 0; index < input.length; index++) {
    value ^= input.charCodeAt(index);
    value = Math.imul(value, 0x01000193) >>> 0;
  }

  return value.toString(36);
};

/**
 * JSON with object keys in a fixed order.
 *
 * Attribute order is whatever the editor serialized, and two blocks that differ
 * only in key order are the same block. Sorting is what stops the param from
 * moving when the platform reorders how it writes an attribute out.
 */
const stableStringify = (value: unknown): string => {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value) ?? "null";
  }

  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, entry]) => entry !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([key, entry]) => `${JSON.stringify(key)}:${stableStringify(entry)}`);

  return `{${entries.join(",")}}`;
};

/** The param a block would own were it the only one of its kind on the page. */
export const listingParamBase = (
  nodeType: PaginatedListingNodeType,
  attrs: Record<string, unknown>,
): string => `${PARAM_PREFIX[nodeType]}_${hash(stableStringify(attrs))}`;

/**
 * Every paginated block in a document, mapped to the param it owns.
 *
 * Built by walking the content once up front rather than counted as the tree
 * renders: React may render a subtree more than once, and a counter that
 * advanced per render would hand the same block a different param each time.
 * Keyed on the node object, which is stable for the render that produced it.
 */
export const listingParamNames = (
  nodes: readonly RenderNode[],
): Map<RenderNode, string> => {
  const names = new Map<RenderNode, string>();
  const occurrences = new Map<string, number>();

  const walk = (node: RenderNode) => {
    if (isPaginatedListing(node.type)) {
      const base = listingParamBase(node.type, node.attrs ?? {});
      const seen = (occurrences.get(base) ?? 0) + 1;

      occurrences.set(base, seen);
      names.set(node, seen === 1 ? base : `${base}_${seen}`);
    }

    node.content?.forEach(walk);
  };

  nodes.forEach(walk);

  return names;
};
