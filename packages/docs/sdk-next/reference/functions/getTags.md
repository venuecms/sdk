[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [packages/sdk/dist/index.d.mts:4010](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk/dist/index.d.mts#L4010)

Get a listing of tags in use

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `parentId`: `string`; `query`: `string`; \} |

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
