/**
 * The request URL, read back inside the render — the half that needs a request.
 *
 * ./url stamps it onto a header in the proxy; this reads it off again, so a
 * component nested anywhere under the route gets the search params Next only
 * ever gives `page.tsx`. A template installs the proxy helper once and stops
 * passing `searchParams` through its component tree entirely.
 */
import { headers } from "next/headers";
import { cache } from "react";

import type { SearchParams } from "./url";
import { VENUE_URL_HEADER, searchParamsFromUrl } from "./url";

export type { SearchParams } from "./url";
export { VENUE_URL_HEADER, venueRequestHeaders } from "./url";

/**
 * The current request's search params, or null when they cannot be read.
 *
 * Null means "nobody stamped the URL" — the proxy helper is not installed —
 * and never "the URL had no query", which is an empty object. Callers that draw
 * links need that distinction: no params means there is no URL to link to,
 * where empty params still make `?p=1`.
 *
 * The URL is request data, so this marks the calling subtree dynamic and throws
 * where there is no request to read — the same contract as the `headers()` it
 * is built on, and the same one a listing block already has.
 *
 * Cached per request: several listing blocks in one document would otherwise
 * each parse the same query string.
 */
export const getRequestSearchParams = cache(
  async (): Promise<SearchParams | null> => {
    // `headers()` is the dynamic marker as well as the read: reaching for it
    // during a prerender is what hands back a hanging promise, postpones under
    // PPR, or interrupts static generation, depending on the mode. So it is
    // left to do that — nothing here catches, because swallowing one of those
    // would bake a pager-less page into a static shell.
    const requestHeaders = await headers();

    return searchParamsFromUrl(requestHeaders.get(VENUE_URL_HEADER));
  },
);
