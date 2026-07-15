[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfileProducts()

```ts
function getProfileProducts(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfileProductsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:119](https://github.com/venuecms/sdk/blob/6af46ae3b5b61e0d4cb381a0141c00dccc61886c/packages/sdk-next/src/lib/api/index.ts#L119)

Get a listing of products for a profile (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> & `object` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProfileProductsResponse`](../type-aliases/GetProfileProductsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
