[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:337](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk/src/main.ts#L337)

Search a site for all content types

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `debug`: `"true"` \| `"false"` \| `"1"` \| `"0"`; `dir`: `"asc"` \| `"desc"`; `disableVector`: `"true"` \| `"false"` \| `"1"` \| `"0"`; `limit`: `number`; `minResultSimilarity`: `number`; `noCache`: `"true"` \| `"false"` \| `"1"` \| `"0"`; `orderBy`: `string`; `page`: `number`; `query`: `string`; `searchProvider`: `"algolia"` \| `"trigram"` \| `"hybrid"`; `trigramThreshold`: `number`; `vectorThreshold`: `number`; \} |
| `params.debug`? | `"true"` \| `"false"` \| `"1"` \| `"0"` |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.disableVector`? | `"true"` \| `"false"` \| `"1"` \| `"0"` |
| `params.limit`? | `number` |
| `params.minResultSimilarity`? | `number` |
| `params.noCache`? | `"true"` \| `"false"` \| `"1"` \| `"0"` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.query`? | `string` |
| `params.searchProvider`? | `"algolia"` \| `"trigram"` \| `"hybrid"` |
| `params.trigramThreshold`? | `number` |
| `params.vectorThreshold`? | `number` |

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
