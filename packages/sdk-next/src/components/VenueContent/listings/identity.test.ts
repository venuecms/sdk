import { describe, expect, it } from "vitest";

import type { RenderNode } from "../types";

import { listingParamBase, listingParamNames } from "./identity";

const listing = (type: string, attrs: Record<string, unknown> = {}) =>
  ({ type, attrs }) as RenderNode;

const doc = (...content: RenderNode[]) =>
  ({ type: "doc", content }) as RenderNode;

describe("listingParamBase", () => {
  it("prefixes with the listing type, so a URL says what it moves", () => {
    expect(listingParamBase("eventListing", { limit: 10 })).toMatch(/^evt_/);
    expect(listingParamBase("newsListing", { limit: 10 })).toMatch(/^nws_/);
  });

  it("ignores the order the attributes were serialized in", () => {
    expect(listingParamBase("eventListing", { limit: 10, featured: true })).toBe(
      listingParamBase("eventListing", { featured: true, limit: 10 }),
    );
  });

  it("separates blocks that filter differently", () => {
    expect(listingParamBase("eventListing", { tags: ["jazz"] })).not.toBe(
      listingParamBase("eventListing", { tags: ["rock"] }),
    );
  });

  it("separates the same filters on different listing types", () => {
    expect(listingParamBase("eventListing", { limit: 10 })).not.toBe(
      listingParamBase("productListing", { limit: 10 }),
    );
  });
});

describe("listingParamNames", () => {
  it("gives each distinct block its own param", () => {
    const events = listing("eventListing", { limit: 10 });
    const news = listing("newsListing", { limit: 5 });

    const names = listingParamNames([doc(events, news)]);

    expect(names.get(events)).not.toBe(names.get(news));
  });

  it("finds blocks nested anywhere in the document", () => {
    const nested = listing("eventListing", { limit: 10 });
    const names = listingParamNames([
      doc({ type: "column", content: [nested] } as RenderNode),
    ]);

    expect(names.get(nested)).toBeDefined();
  });

  it("skips the pages listing, which does not paginate", () => {
    const pages = listing("pageListing", {});
    expect(listingParamNames([doc(pages)]).get(pages)).toBeUndefined();
  });

  it("separates two identical blocks with an ordinal", () => {
    const first = listing("eventListing", { limit: 10 });
    const second = listing("eventListing", { limit: 10 });

    const names = listingParamNames([doc(first, second)]);

    expect(names.get(first)).not.toBe(names.get(second));
    expect(names.get(second)).toBe(`${names.get(first)}_2`);
  });

  it("leaves a distinct block's param alone when the document is reordered", () => {
    const events = listing("eventListing", { limit: 10 });
    const news = listing("newsListing", { limit: 5 });

    const before = listingParamNames([doc(events, news)]);
    const after = listingParamNames([doc(news, events)]);

    expect(after.get(events)).toBe(before.get(events));
  });

  it("is stable across separate walks of the same document", () => {
    const events = listing("eventListing", { limit: 10 });
    const content = doc(events);

    expect(listingParamNames([content]).get(events)).toBe(
      listingParamNames([content]).get(events),
    );
  });
});
