[**@venuecms/sdk-next**](../Index.md)

***

# Function: getPages()

```ts
function getPages(params): Promise<{
  data: undefined | GetPagesResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:67](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L67)

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
