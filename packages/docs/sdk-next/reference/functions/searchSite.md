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
  data: SearchSiteResponse;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:684](https://github.com/venuecms/sdk/blob/856f3c21fe737a18a698a4045f39e91f8662f370/packages/sdk/dist/index.d.mts#L684)

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
  `data`: [`SearchSiteResponse`](../type-aliases/SearchSiteResponse.md);
  `error`: `undefined`;
 \} & `object`\>
