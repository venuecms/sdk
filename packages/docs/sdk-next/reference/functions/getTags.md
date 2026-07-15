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

Defined in: [packages/sdk/dist/index.d.mts:1813](https://github.com/venuecms/sdk/blob/6af46ae3b5b61e0d4cb381a0141c00dccc61886c/packages/sdk/dist/index.d.mts#L1813)

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
