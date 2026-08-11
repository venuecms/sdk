import { describe, expect, it } from "vitest";

import {
  VENUE_URL_HEADER,
  searchParamsFromUrl,
  venueRequestHeaders,
} from "./url";

describe("searchParamsFromUrl", () => {
  it("reads a URL's query in the shape a route hands it over", () => {
    expect(
      searchParamsFromUrl("https://example.com/news?evt_1a2b=2&locale=de"),
    ).toEqual({ evt_1a2b: "2", locale: "de" });
  });

  it("collects a repeated param into an array, first value first", () => {
    // `readPage` takes the first, which is what the same URL would mean to a
    // page component — so the order is part of the contract, not incidental.
    expect(searchParamsFromUrl("/news?p=1&p=2&p=3")).toEqual({
      p: ["1", "2", "3"],
    });
  });

  it("decodes as a query string, not as raw text", () => {
    expect(searchParamsFromUrl("/search?q=jazz+%26+noise")).toEqual({
      q: "jazz & noise",
    });
  });

  it("keeps a param the URL names with no value", () => {
    // `?p=` is how a URL says page 0 explicitly, which is a different answer
    // from a URL that does not name the block at all.
    expect(searchParamsFromUrl("/news?p=")).toEqual({ p: "" });
  });

  it("reads a bare query string, since a proxy may stamp only that", () => {
    expect(searchParamsFromUrl("?page=2")).toEqual({ page: "2" });
  });

  it("gives a URL with no query no params, rather than no URL", () => {
    // The distinction the pager rests on: an empty object still builds `?p=1`,
    // where null means there was no URL to link to at all.
    expect(searchParamsFromUrl("https://example.com/news")).toEqual({});
  });

  it("ignores the fragment", () => {
    expect(searchParamsFromUrl("/news?p=2#latest")).toEqual({ p: "2" });
    expect(searchParamsFromUrl("/news#latest?p=2")).toEqual({});
  });

  it("keeps a param named after an object's own machinery", () => {
    // A param name comes off the URL, so a reader picks it. Assigned by key,
    // `__proto__` would set the result's prototype rather than store a param.
    const params = searchParamsFromUrl("/news?__proto__=1&__proto__=2");

    expect(params).not.toBeNull();
    expect(Object.getPrototypeOf(params)).toBe(Object.prototype);
    expect(Object.prototype.hasOwnProperty.call(params, "__proto__")).toBe(true);
  });

  it("has no params to give when the header was never stamped", () => {
    expect(searchParamsFromUrl(null)).toBeNull();
  });
});

describe("venueRequestHeaders", () => {
  const request = (url: string, headers: Record<string, string> = {}) => ({
    url,
    headers: new Headers(headers),
  });

  it("stamps the request URL onto the headers it forwards", () => {
    const headers = venueRequestHeaders(request("https://example.com/news?p=2"));

    expect(headers.get(VENUE_URL_HEADER)).toBe("https://example.com/news?p=2");
  });

  it("carries the request's own headers through", () => {
    // The proxy passes the result as the whole request's headers, so anything
    // dropped here is dropped from the request the route sees.
    const headers = venueRequestHeaders(
      request("https://example.com/", { authorization: "Bearer k" }),
    );

    expect(headers.get("authorization")).toBe("Bearer k");
  });

  it("replaces a header a client sent under this name", () => {
    // A reader can otherwise choose the URL their own listings paginate
    // against. It reaches nothing but their own page links, but the site that
    // installed this helper should be the one that decides.
    const headers = venueRequestHeaders(
      request("https://example.com/news", {
        [VENUE_URL_HEADER]: "https://example.com/?p=999",
      }),
    );

    expect(headers.get(VENUE_URL_HEADER)).toBe("https://example.com/news");
  });

  it("leaves the request's own headers untouched", () => {
    // A `NextRequest`'s headers are immutable; copying is what keeps this
    // callable on one.
    const incoming = request("https://example.com/news");

    venueRequestHeaders(incoming);

    expect(incoming.headers.get(VENUE_URL_HEADER)).toBeNull();
  });
});
