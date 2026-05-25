[**@venuecms/sdk**](../Index.md)

***

# Function: getTags()

```ts
function getTags(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetTagsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:315](https://github.com/venuecms/sdk/blob/cb09188b47f9ac25f1f81e21ef5a4b3057b36e8c/packages/sdk/src/main.ts#L315)

Get a listing of tags in use

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; `parentId`: `string`; `query`: `string`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.parentId`? | `string` |
| `params.query`? | `string` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetTagsResponse`](../type-aliases/GetTagsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
