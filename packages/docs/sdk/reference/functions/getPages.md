[**@venuecms/sdk**](../Index.md)

***

# Function: getPages()

```ts
function getPages(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetPagesResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:161](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk/src/main.ts#L161)

Get a list of all pages

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `string` \| `string`[]; `limit`: `number`; `orderBy`: `string`; `page`: `number`; `query`: `string`; `tags`: `string` \| `string`[]; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `string` \| `string`[] |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.query`? | `string` |
| `params.tags`? | `string` \| `string`[] |

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
