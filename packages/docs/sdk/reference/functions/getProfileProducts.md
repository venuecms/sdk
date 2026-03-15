[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:260](https://github.com/venuecms/sdk/blob/3bd84adbd3a78fae724fcf1d00721691a6434bb8/packages/sdk/src/main.ts#L260)

Get a listing of products for a profile

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
