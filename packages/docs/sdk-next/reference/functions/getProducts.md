[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProducts()

```ts
function getProducts(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProductsResponse;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:532](https://github.com/venuecms/sdk/blob/aa6bf5e2569259dec55e399babe648ca7df4042f/packages/sdk/dist/index.d.mts#L532)

Get a listing of products

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; \} |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProductsResponse`](../type-aliases/GetProductsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
