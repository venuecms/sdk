/**
 * The request URL, carried from the proxy to the components that render under
 * it — the pure half.
 *
 * Next hands a route's search params to `page.tsx` and nowhere else: a
 * component nested inside one cannot ask for them, and there is no server API
 * that returns them. So a template that wanted paginated listing blocks had to
 * thread `searchParams` down from every page through every component that might
 * eventually contain content — which is what this replaces. A proxy stamps the
 * request URL onto a request header, and anything rendering under that request
 * can read it back (see ./index).
 *
 * This module is strings in, strings out — no `next/headers`, no request scope —
 * so the parsing and the header handling are testable on their own.
 */

/**
 * A page's worth of search params, in the shape a route hands them over.
 *
 * Matches what Next gives `page.tsx`: a repeated param arrives as an array, a
 * single one as a string. Templates already write against that shape, so
 * ambient params and a threaded `searchParams` prop stay interchangeable.
 */
export type SearchParams = Record<string, string | string[] | undefined>;

/**
 * The header the request URL travels on.
 *
 * Exported so a template that builds its proxy response by hand — or asserts on
 * it in a test — names the same header the SDK reads, rather than a copy of the
 * string that can drift.
 */
export const VENUE_URL_HEADER = "x-venue-url";

/**
 * The search params of a URL, or null when there is no URL to read.
 *
 * A URL with no query is not the same as no URL at all: the first is a reader
 * on a bare page, whose listing links are still buildable (`?p=1`), and the
 * second is a request the proxy never stamped, where a pager would have nothing
 * to link to. So an empty query gives an empty object and only a missing or
 * unparseable header gives null.
 *
 * Everything from the first `?` up to any fragment is the query, so a whole
 * href and a bare `?page=2` both read the same. It is parsed as a string rather
 * than through `new URL()`, which would need an origin the stamp is not
 * required to carry.
 */
export const searchParamsFromUrl = (url: string | null): SearchParams | null => {
  if (url == null) {
    return null;
  }

  const fragment = url.indexOf("#");
  const path = fragment === -1 ? url : url.slice(0, fragment);
  const start = path.indexOf("?");
  const query = start === -1 ? "" : path.slice(start + 1);

  const search = new URLSearchParams(query);

  // Built through `Object.fromEntries` rather than by assigning each key onto an
  // object. A param is a reader's to name, and `?__proto__=a&__proto__=b`
  // assigned by key would set the result's prototype instead of storing a param
  // — losing it, and handing every consumer an object whose prototype came off
  // the query string. `fromEntries` defines own properties, so that param comes
  // back as an ordinary entry.
  return Object.fromEntries(
    // A repeated param collects into an array, in the order it was written, as
    // a route would give it: `readPage` takes `?p=1&p=2` as page 1, matching
    // what the same URL would mean to a page component. `getAll` is what groups
    // them, and the Set is what asks for each key once.
    [...new Set(search.keys())].map((key) => {
      const values = search.getAll(key);

      return [key, values.length > 1 ? values : values[0]];
    }),
  );
};

/**
 * The request's headers with its URL stamped on, for a proxy to forward.
 *
 * A template installs this once, in the `proxy.ts` (or `middleware.ts`) it
 * already has:
 *
 *   export default function proxy(request: NextRequest) {
 *     return NextResponse.next({
 *       request: { headers: venueRequestHeaders(request) },
 *     });
 *   }
 *
 * and every listing block on every page it covers paginates, with no page
 * passing `searchParams` to anything. A proxy that rewrites passes the same
 * headers to `NextResponse.rewrite(url, { request: { headers } })`.
 *
 * The incoming headers are copied rather than mutated, because a `NextRequest`'s
 * are immutable, and the stamp is `set` rather than `append` so a client that
 * sent this header itself has its value replaced rather than added to.
 *
 * That replacement only covers the paths the proxy runs on — a route its
 * `matcher` skips is a route where a reader can still supply the header. What
 * that reaches is their own listing's page number (clamped to MAX_PAGE) and
 * their own page links (built through `URLSearchParams`, so encoded), which is
 * a request they can already make by editing the query string they arrived on.
 * A site that wants the header to be its own to decide points its matcher at
 * every route that renders content.
 */
export const venueRequestHeaders = (
  request: Pick<Request, "url" | "headers">,
): Headers => {
  const headers = new Headers(request.headers);
  headers.set(VENUE_URL_HEADER, request.url);
  return headers;
};
