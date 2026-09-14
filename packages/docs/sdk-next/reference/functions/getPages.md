[**@venuecms/sdk-next**](../Index.md)

***

# Function: getPages()

```ts
function getPages(params): Promise<{
  data: undefined | GetPagesResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:66](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L66)

Get a list of all pages (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; \} |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`GetPagesResponse`](../type-aliases/GetPagesResponse.md);
  `error`: `unknown`;
 \}\>
