[**@venuecms/sdk**](../Index.md)

***

# Function: getNews()

```ts
function getNews(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetNewsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:190](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk/src/main.ts#L190)

Get a list of all news items

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `string` \| `string`[]; `gt`: `number`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `query`: `string`; `tags`: `string` \| `string`[]; `upcoming`: `string` \| `string`[]; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `string` \| `string`[] |
| `params.gt`? | `number` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.query`? | `string` |
| `params.tags`? | `string` \| `string`[] |
| `params.upcoming`? | `string` \| `string`[] |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetNewsResponse`](../type-aliases/GetNewsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
