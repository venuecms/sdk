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

Defined in: [packages/sdk/src/main.ts:241](https://github.com/venuecms/sdk/blob/915dbe3b1ab4666bb8b6c860c00b0500d1556c80/packages/sdk/src/main.ts#L241)

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
