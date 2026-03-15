[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:289](https://github.com/venuecms/sdk/blob/3bd84adbd3a78fae724fcf1d00721691a6434bb8/packages/sdk/src/main.ts#L289)

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
