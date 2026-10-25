[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProducts()

```ts
function getProducts(params): Promise<{
  data:   | undefined
     | GetProductsResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:129](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L129)

Get a listing of products (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; `type`: `"member"`; \} |

## Returns

`Promise`\<\{
  `data`:   \| `undefined`
     \| [`GetProductsResponse`](../type-aliases/GetProductsResponse.md);
  `error`: `unknown`;
 \}\>
