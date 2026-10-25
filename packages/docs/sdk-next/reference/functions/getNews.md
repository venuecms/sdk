[**@venuecms/sdk-next**](../Index.md)

***

# Function: getNews()

```ts
function getNews(params): Promise<{
  data: undefined | GetNewsResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:81](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L81)

Get a list of all news items (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `null` \| `number`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; `upcoming`: `boolean`; \} |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`GetNewsResponse`](../type-aliases/GetNewsResponse.md);
  `error`: `unknown`;
 \}\>
