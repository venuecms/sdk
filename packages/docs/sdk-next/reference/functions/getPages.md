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

Defined in: [sdk/dist/index.d.mts:582](https://github.com/venuecms/sdk/blob/9b35c3f75ba3cd0722f50bc82d98f2f4dd56e037/packages/sdk/dist/index.d.mts#L582)

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
