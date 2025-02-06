[**@venuecms/sdk-next**](../Index.md)

***

# Function: getPages()

```ts
function getPages(params?): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetPagesResponse;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:445](https://github.com/venuecms/sdk/blob/da35bc89025fb85e596c6443c84da7b9eb9593b5/packages/sdk/dist/index.d.mts#L445)

Get a list of all pages

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `null` \| `boolean` |
| `params.limit`? | `null` \| `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `null` \| `number` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetPagesResponse`](../type-aliases/GetPagesResponse.md);
  `error`: `undefined`;
 \} & `object`\>
