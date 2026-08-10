[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: SearchParams

```ts
type SearchParams = Record<string, string | string[] | undefined>;
```

Defined in: [packages/sdk-next/src/lib/searchParams/url.ts:24](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/lib/searchParams/url.ts#L24)

A page's worth of search params, in the shape a route hands them over.

Matches what Next gives `page.tsx`: a repeated param arrives as an array, a
single one as a string. Templates already write against that shape, so
ambient params and a threaded `searchParams` prop stay interchangeable.
