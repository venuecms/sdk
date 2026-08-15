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

  // `getSite` and `getSiteKeyByDomain` pass `headers` per call rather than
  // relying solely on the client config, so they need their own coverage.
  it("sends x-api-key on calls that pass headers explicitly", async () => {
    const { main, requests } = await loadSdk();

    await main.getSite();

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("x-api-key")).toBe(API_KEY);
    expect(requests[0].headers.get("Authorization")).toBeNull();
  });

  // `setConfig` reconfigures the client on every server-rendered request in
  // `@venuecms/sdk-next`, and it merges caller options over the defaults. A
  // change there that drops the default headers would silently put every
  // public read back on the uncacheable path, so pin it.
  it("keeps x-api-key after setConfig overrides other options", async () => {
    const { main, requests } = await loadSdk();

    main.setConfig({
      siteKey: "other-site",
      options: { baseUrl: "https://example.test" },
    });
    await main.getEvents();

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("x-api-key")).toBe(API_KEY);
    expect(requests[0].headers.get("Authorization")).toBeNull();
    expect(requests[0].url).toBe(
      "https://example.test/api/v2/other-site/public/events",
    );
  });
});
