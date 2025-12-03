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

Defined in: [packages/sdk/src/main.ts:238](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/src/main.ts#L238)

Search a site for all content types

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; `query`: `string`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.query`? | `string` |

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
