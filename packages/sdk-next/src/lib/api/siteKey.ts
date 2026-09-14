import { getSiteKey, setConfig as _setConfig } from "@venuecms/sdk";
import { cache } from "react";

/**
 * Which site a read is reading for, scoped to the request that asked.
 *
 * The core SDK keeps its siteKey in a module-level variable that `setConfig`
 * overwrites. That is fine for a process serving one site, and wrong for the
 * one this package is built for: a Next server behind several domains resolves
 * the site per request and calls `setConfig` on each, so the variable holds
 * whichever request configured itself most recently. Any await between a
 * request's `setConfig` and its reads — and a route has several, starting with
 * `await params` — is a window for another request to repoint it, and the first
 * request then reads another tenant's content under its own URL.
 *
 * `cache` from React is the request scope: within one render every call returns
 * the same object, and a different request gets its own. Called outside a
 * render it simply returns a fresh object each time, so `resolveSiteKey` falls
 * back to the configured global and nothing that worked before stops working.
 */
const requestSiteKey = cache((): { current?: string } => ({}));

/**
 * Configures the SDK for the site this request is being served as.
 *
 * Wraps the core `setConfig`, which is still called so that anything reaching
 * past this package into `@venuecms/sdk` keeps working, and additionally pins
 * the siteKey for the current request only.
 *
 * @category Configuration
 */
export const setConfig: typeof _setConfig = (params) => {
  _setConfig(params);
  requestSiteKey().current = params.siteKey;
};

/**
 * The siteKey to read with: this request's, or the configured global for a
 * caller outside a request.
 */
export const resolveSiteKey = () => requestSiteKey().current ?? getSiteKey();
