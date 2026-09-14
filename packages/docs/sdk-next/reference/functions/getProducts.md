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

Defined in: [packages/sdk-next/src/lib/api/index.ts:128](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L128)

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
