/**
 * Which site a read actually reads from, when the process is serving several.
 *
 * The core SDK holds its siteKey in a module-level variable. Everything here
 * exists because that variable is shared by every in-flight request, and the
 * consequence under `"use cache"` is worse than a single mixed-up response: an
 * entry is keyed and tagged by the siteKey passed in and filled by whatever the
 * variable said when the fetch was built, so one tenant's content can be stored
 * under another's tag — served for the whole cache lifetime and untouched by
 * the right site's revalidation.
 *
 * `resolveSiteKey`'s request scoping is not exercised here: it comes from
 * React's `cache`, which only holds a scope inside a Server Component render,
 * and outside one it deliberately degrades to the configured global. That
 * fallback is what these tests pin — it is the behaviour every non-render
 * caller gets.
 */
import {
  getPage,
  getSiteKey,
  setConfig as coreSetConfig,
  withSiteKey,
} from "@venuecms/sdk";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { resolveSiteKey, setConfig } from "./siteKey";

let requested: Array<string> = [];

/** Resolves only when released, so a read can be held mid-flight. */
const deferred = () => {
  let release!: () => void;
  const held = new Promise<void>((resolve) => {
    release = resolve;
  });

  return { held, release };
};

beforeEach(() => {
  requested = [];
  vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
    requested.push(input instanceof Request ? input.url : String(input));

    return new Response(JSON.stringify({}), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("withSiteKey", () => {
  it("reads against the key it is given, not the configured one", async () => {
    coreSetConfig({ siteKey: "site-a" });

    await withSiteKey("site-b", () => getPage({ slug: "about" }));

    expect(requested[0]).toContain("/site-b/");
    expect(requested[0]).not.toContain("/site-a/");
  });

  it("puts the configured key back afterwards", async () => {
    coreSetConfig({ siteKey: "site-a" });

    await withSiteKey("site-b", () => getPage({ slug: "about" }));

    expect(getSiteKey()).toBe("site-a");
    await getPage({ slug: "about" });
    expect(requested[1]).toContain("/site-a/");
  });

  it("returns what the call returned", async () => {
    coreSetConfig({ siteKey: "site-a" });

    await expect(
      withSiteKey("site-b", () => getPage({ slug: "about" })),
    ).resolves.toMatchObject({ response: expect.anything() });
  });

  it("restores the configured key even when the call throws", () => {
    coreSetConfig({ siteKey: "site-a" });

    expect(() =>
      withSiteKey("site-b", () => {
        throw new Error("boom");
      }),
    ).toThrow("boom");
    expect(getSiteKey()).toBe("site-a");
  });

  it("is not disturbed by another site configuring itself mid-read", async () => {
    // The race the cached reads are exposed to: one request is awaiting its
    // fetch when the next request, for a different site, runs `setConfig`.
    const { held, release } = deferred();
    vi.mocked(fetch).mockImplementation(async (input) => {
      requested.push(input instanceof Request ? input.url : String(input));
      await held;

      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });

    coreSetConfig({ siteKey: "site-a" });
    const inFlight = withSiteKey("site-a", () => getPage({ slug: "about" }));

    coreSetConfig({ siteKey: "site-b" });
    release();
    await inFlight;

    expect(requested).toHaveLength(1);
    expect(requested[0]).toContain("/site-a/");
  });
});

describe("setConfig", () => {
  it("still configures the core SDK, so direct SDK use keeps working", async () => {
    setConfig({ siteKey: "site-a" });

    expect(getSiteKey()).toBe("site-a");
    await getPage({ slug: "about" });
    expect(requested[0]).toContain("/site-a/");
  });
});

describe("resolveSiteKey", () => {
  it("falls back to the configured key outside a request scope", () => {
    setConfig({ siteKey: "site-a" });

    expect(resolveSiteKey()).toBe("site-a");
  });
});
