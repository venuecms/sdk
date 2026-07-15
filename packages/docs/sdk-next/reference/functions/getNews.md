[**@venuecms/sdk-next**](../Index.md)

***

# Function: getNews()

```ts
function getNews(params?): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetNewsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/dist/index.d.mts:1684](https://github.com/venuecms/sdk/blob/bb1137b16c817ba8d33cf05998a0f270a24c5cbe/packages/sdk/dist/index.d.mts#L1684)

Get a list of all news items

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `gt`: `null` \| `number`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; `upcoming`: `null` \| `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `null` \| `boolean` |
| `params.gt`? | `null` \| `number` |
| `params.limit`? | `null` \| `number` |
| `params.lt`? | `null` \| `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `null` \| `number` |
| `params.query`? | `null` \| `string` |
| `params.tags`? | `string` \| `string`[] |
| `params.upcoming`? | `null` \| `boolean` |

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
