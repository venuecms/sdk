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

Defined in: [sdk/dist/index.d.mts:533](https://github.com/venuecms/sdk/blob/e839f07e66419aaf9ace81d080584d6bd1f8de14/packages/sdk/dist/index.d.mts#L533)

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
