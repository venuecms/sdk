[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:204](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/src/main.ts#L204)

Get a listing of products

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |

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
