[**@venuecms/sdk-next**](../Index.md)

***

# Function: venueRequestHeaders()

```ts
function venueRequestHeaders(request): Headers
```

Defined in: [packages/sdk-next/src/lib/searchParams/url.ts:108](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/lib/searchParams/url.ts#L108)

The request's headers with its URL stamped on, for a proxy to forward.

A template installs this once, in the `proxy.ts` (or `middleware.ts`) it
already has:

  export default function proxy(request: NextRequest) {
    return NextResponse.next({
      request: { headers: venueRequestHeaders(request) },
    });
  }

and every listing block on every page it covers paginates, with no page
passing `searchParams` to anything. A proxy that rewrites passes the same
headers to `NextResponse.rewrite(url, { request: { headers } })`.

The incoming headers are copied rather than mutated, because a `NextRequest`'s
are immutable, and the stamp is `set` rather than `append` so a client that
sent this header itself has its value replaced rather than added to.

That replacement only covers the paths the proxy runs on — a route its
`matcher` skips is a route where a reader can still supply the header. What
that reaches is their own listing's page number (clamped to MAX_PAGE) and
their own page links (built through `URLSearchParams`, so encoded), which is
a request they can already make by editing the query string they arrived on.
A site that wants the header to be its own to decide points its matcher at
every route that renders content.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Pick`\<`Request`, `"url"` \| `"headers"`\> |

## Returns

`Headers`
