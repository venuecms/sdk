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

Defined in: [packages/sdk/src/main.ts:139](https://github.com/venuecms/sdk/blob/d5d72c45d7b0513f04d62c7a6de8be79efa76035/packages/sdk/src/main.ts#L139)

Get a list of all pages

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; `tags`: `string` \| `string`[]; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
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
