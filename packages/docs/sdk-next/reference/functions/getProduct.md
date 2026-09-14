[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProduct()

```ts
function getProduct(params): Promise<{
  data: undefined | Product;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:135](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L135)

Get a product (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`Product`](../type-aliases/Product.md);
  `error`: `unknown`;
 \}\>
