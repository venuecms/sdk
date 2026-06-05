"use client";

import { useEffect } from "react";

/**
 * Listens for iframely-style resize messages from embedded iframes and applies
 * the reported height to the matching iframe. This is what lets dynamic-height
 * embeds (tweets, link cards, article readers) size to their content.
 *
 * A cross-origin iframe cannot resize its own frame, so the page showing it
 * must run this listener. Rendering <VenueContent> mounts it automatically, so
 * consumers don't add a script tag or a third-party include — it ships with the
 * SDK. Fixed-ratio embeds (video/audio) don't rely on this; they size via CSS
 * aspect-ratio.
 *
 * Iframes are matched by their content window (event.source), so no id/data
 * attribute is required on the iframe.
 */

// Module-level guard: only one global listener regardless of how many
// <VenueContent> / <EmbedResize> instances mount.
let installed = false;

const applyResize = (event: MessageEvent) => {
  const data = event.data;
  if (!data || typeof data !== "object") return;

  // iframely resize protocol: { method: "resize", height: <number> }.
  if (data.method !== "resize") return;

  const height = Number(data.height);
  if (!Number.isFinite(height) || height <= 0) return;

  const iframes = document.querySelectorAll("iframe");
  for (const iframe of Array.from(iframes)) {
    if (iframe.contentWindow === event.source) {
      iframe.style.height = `${Math.round(height)}px`;
      break;
    }
  }
};

export const useEmbedResize = () => {
  useEffect(() => {
    if (installed || typeof window === "undefined") return;
    installed = true;
    window.addEventListener("message", applyResize);
    // Intentionally not removed: a single passive listener is shared across the
    // app's lifetime and de-duplicated via the module guard.
  }, []);
};

/**
 * Component form of {@link useEmbedResize}. Renders nothing. Mounted once by
 * VenueContent; can also be placed in a layout if rendering embeds elsewhere.
 */
export const EmbedResize = (): null => {
  useEmbedResize();
  return null;
};
