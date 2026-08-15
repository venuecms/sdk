import { afterEach, describe, expect, it, vi } from "vitest";

const API_KEY = "test-api-key-value";
const SITE_KEY = "test-site";

/**
 * Load `main.ts` fresh with the env the SDK reads at module load, and capture
 * the `Request` handed to `fetch` so assertions run against what actually goes
 * on the wire rather than against the configured header object.
 */
const loadSdk = async () => {
  vi.resetModules();

  vi.stubEnv("VENUE_API_KEY", API_KEY);
  vi.stubEnv("VENUE_SITE_KEY", SITE_KEY);

  const requests: Request[] = [];

  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: Request) => {
      requests.push(input);

      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }),
  );

  const main = await import("./main");

  return { main, requests };
};

/**
 * The underlying client merges into its live config rather than replacing it,
 * so the header set at module load is sticky and would mask a regression in
 * any later code path. Drop it first — `null` is the value the client's header
 * merge deletes on — so the assertions that follow are actually load-bearing.
 */
const clearConfiguredApiKey = (main: Awaited<ReturnType<typeof loadSdk>>["main"]) => {
  main.setConfig({
    siteKey: SITE_KEY,
    options: { headers: { "x-api-key": null } },
  });
};

describe("SDK request headers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  // Vercel's CDN refuses to cache any function response whose request carries
  // an `Authorization` header, with no `public`/`s-maxage` exception. Sending
  // the key there forces `x-vercel-cache: BYPASS` on every public read, which
  // is what made VEN-533's cache headers inert in production.
  it("sends the API key on x-api-key, not Authorization", async () => {
    const { main, requests } = await loadSdk();

    await main.getEvents();

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("x-api-key")).toBe(API_KEY);
    expect(requests[0].headers.get("Authorization")).toBeNull();
  });

  // `getSite` and `getSiteKeyByDomain` pass `headers` per call instead of
  // relying on the client config, so that object needs its own key.
  it("carries x-api-key on the per-call headers, independent of the config", async () => {
    const { main, requests } = await loadSdk();

    clearConfiguredApiKey(main);
    await main.getSite();

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("x-api-key")).toBe(API_KEY);
    expect(requests[0].headers.get("Authorization")).toBeNull();
  });

  // `setConfig` reconfigures the client on every server-rendered request in
  // `@venuecms/sdk-next`. It must re-apply the default headers, not just the
  // caller's options, or every public read silently loses its key.
  it("re-applies the default x-api-key on every setConfig", async () => {
    const { main, requests } = await loadSdk();

    clearConfiguredApiKey(main);
    main.setConfig({ siteKey: "other-site" });
    await main.getEvents();

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("x-api-key")).toBe(API_KEY);
    expect(requests[0].headers.get("Authorization")).toBeNull();
    expect(requests[0].url).toBe(
      "https://app.venuecms.com/api/v2/other-site/public/events",
    );
  });
});
