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

Defined in: [packages/sdk/src/main.ts:193](https://github.com/venuecms/sdk/blob/f0a33ef2da5aac33574dc9934ae8ba73e5fde3eb/packages/sdk/src/main.ts#L193)

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
