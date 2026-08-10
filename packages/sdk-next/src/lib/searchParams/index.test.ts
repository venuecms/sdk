import { beforeEach, describe, expect, it, vi } from "vitest";

import { VENUE_URL_HEADER, getRequestSearchParams } from "./index";

// The request scope is Next's, so it is what gets stubbed: these tests are
// about what the SDK does with the header, not about how Next produces it.
vi.mock("next/headers", () => ({ headers: vi.fn() }));

const { headers } = await import("next/headers");

const mockHeaders = vi.mocked(headers);

const requestWith = (values: Record<string, string>) =>
  mockHeaders.mockResolvedValue(new Headers(values) as never);

beforeEach(() => {
  vi.clearAllMocks();
});

describe("getRequestSearchParams", () => {
  it("reads the params off the URL the proxy stamped", async () => {
    requestWith({ [VENUE_URL_HEADER]: "https://example.com/news?p=2" });

    await expect(getRequestSearchParams()).resolves.toEqual({ p: "2" });
  });

  it("gives empty params for a request with no query", async () => {
    requestWith({ [VENUE_URL_HEADER]: "https://example.com/news" });

    await expect(getRequestSearchParams()).resolves.toEqual({});
  });

  it("gives no params when nothing stamped the URL", async () => {
    // The proxy helper is not installed. A listing still renders; it only loses
    // its links, and the null is what tells a template to draw no pager.
    requestWith({ host: "example.com" });

    await expect(getRequestSearchParams()).resolves.toBeNull();
  });

  it("reports a read outside a request rather than swallowing it", async () => {
    // The same contract as the `headers()` it is built on, which is also what
    // marks the render dynamic: catching here would swallow the interrupt Next
    // throws to bail a prerender out, and bake a pager-less page into a shell.
    mockHeaders.mockImplementation(() => {
      throw new Error("`headers` was called outside a request scope");
    });

    await expect(getRequestSearchParams()).rejects.toThrow(
      "outside a request scope",
    );
  });
});
