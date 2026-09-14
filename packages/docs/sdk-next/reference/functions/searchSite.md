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

Defined in: [packages/sdk-next/src/lib/api/index.ts:145](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L145)

Search a site for all content types (deduped per render, not cached across
requests: the key is visitor input, so entries would be unbounded)

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
