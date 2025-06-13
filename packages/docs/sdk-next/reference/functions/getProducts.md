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

Defined in: [sdk/dist/index.d.mts:664](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/dist/index.d.mts#L664)

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
