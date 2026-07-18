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

Defined in: [packages/sdk-next/src/lib/api/index.ts:119](https://github.com/venuecms/sdk/blob/ed1e980a18956c14408ea4f812e24d6b4c2c1fee/packages/sdk-next/src/lib/api/index.ts#L119)

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
