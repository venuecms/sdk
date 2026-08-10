[**@venuecms/sdk-next**](../Index.md)

***

# Function: getRequestSearchParams()

```ts
function getRequestSearchParams(): Promise<null | SearchParams>
```

Defined in: [packages/sdk-next/src/lib/searchParams/index.ts:34](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/lib/searchParams/index.ts#L34)

The current request's search params, or null when they cannot be read.

Null means "nobody stamped the URL" — the proxy helper is not installed —
and never "the URL had no query", which is an empty object. Callers that draw
links need that distinction: no params means there is no URL to link to,
where empty params still make `?p=1`.

The URL is request data, so this marks the calling subtree dynamic and throws
where there is no request to read — the same contract as the `headers()` it
is built on, and the same one a listing block already has.

Cached per request: several listing blocks in one document would otherwise
each parse the same query string.

## Returns

`Promise`\<`null` \| [`SearchParams`](../type-aliases/SearchParams.md)\>
