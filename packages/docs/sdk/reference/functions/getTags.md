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

Defined in: [packages/sdk/src/main.ts:315](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/src/main.ts#L315)

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
