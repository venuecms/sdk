[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [packages/sdk-next/src/lib/api/index.ts:75](https://github.com/venuecms/sdk/blob/ed1e980a18956c14408ea4f812e24d6b4c2c1fee/packages/sdk-next/src/lib/api/index.ts#L75)

Get a list of all news items (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `gt`: `null` \| `number`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; `upcoming`: `null` \| `boolean`; \} |

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
