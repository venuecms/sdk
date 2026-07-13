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

Defined in: [packages/sdk/src/main.ts:190](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/src/main.ts#L190)

Get a list of all news items

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `number`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `query`: `string`; `tags`: `string` \| `string`[]; `upcoming`: `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.gt`? | `number` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.query`? | `string` |
| `params.tags`? | `string` \| `string`[] |
| `params.upcoming`? | `boolean` |

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
