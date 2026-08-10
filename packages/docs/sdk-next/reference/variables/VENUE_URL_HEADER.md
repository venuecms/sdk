[**@venuecms/sdk-next**](../Index.md)

***

# Variable: VENUE\_URL\_HEADER

```ts
const VENUE_URL_HEADER: "x-venue-url" = "x-venue-url";
```

Defined in: packages/sdk-next/src/lib/searchParams/url.ts:33

The header the request URL travels on.

Exported so a template that builds its proxy response by hand — or asserts on
it in a test — names the same header the SDK reads, rather than a copy of the
string that can drift.
