[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProduct()

```ts
function getProduct(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: Product;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:1016](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L1016)

Get a product

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`Product`](../type-aliases/Product.md);
  `error`: `undefined`;
 \} & `object`\>
