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

Defined in: [sdk/dist/index.d.mts:567](https://github.com/venuecms/sdk/blob/fbf02bcc9fd4a34da75d81536c54bdc995edf6c4/packages/sdk/dist/index.d.mts#L567)

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
