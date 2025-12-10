[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [sdk-next/src/lib/api/index.ts:53](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk-next/src/lib/api/index.ts#L53)

Get a list of all pages (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `tags`: `string` \| `string`[]; \} |

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
