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

Defined in: [packages/sdk/src/main.ts:329](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/src/main.ts#L329)

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
