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

Defined in: [sdk/dist/index.d.mts:1031](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L1031)

Search a site for all content types

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; \} |

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
