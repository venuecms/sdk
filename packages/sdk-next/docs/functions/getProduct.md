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

Defined in: packages/sdk-next/src/main.ts:194

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
