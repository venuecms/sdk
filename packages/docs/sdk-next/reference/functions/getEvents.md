[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvents()

```ts
function getEvents(params?): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetEventsResponse;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:875](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L875)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `gt`: `null` \| `number`; `legacyId`: `string`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `tags`: `string` \| `string`[]; `upcoming`: `null` \| `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `null` \| `boolean` |
| `params.gt`? | `null` \| `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `null` \| `number` |
| `params.lt`? | `null` \| `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `null` \| `number` |
| `params.tags`? | `string` \| `string`[] |
| `params.upcoming`? | `null` \| `boolean` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetEventsResponse`](../type-aliases/GetEventsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
