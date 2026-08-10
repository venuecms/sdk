[**@venuecms/sdk-next**](../Index.md)

***

# Function: searchSite()

```ts
function searchSite(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: SearchSiteResults;
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:146](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/lib/api/index.ts#L146)

Search a site for all content types (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `debug`: `"0"` \| `"true"` \| `"false"` \| `"1"`; `dir`: `"asc"` \| `"desc"`; `disableVector`: `"0"` \| `"true"` \| `"false"` \| `"1"`; `limit`: `null` \| `number`; `minResultSimilarity`: `null` \| `number`; `noCache`: `"0"` \| `"true"` \| `"false"` \| `"1"`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `searchProvider`: `null` \| `"algolia"` \| `"trigram"` \| `"hybrid"`; `trigramThreshold`: `null` \| `number`; `vectorThreshold`: `null` \| `number`; \} |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`SearchSiteResults`](../type-aliases/SearchSiteResults.md);
  `error`: `undefined`;
 \} & `object`\>
