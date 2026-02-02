[**@venuecms/sdk**](../Index.md)

***

# Function: getEvents()

```ts
function getEvents(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetEventsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:92](https://github.com/venuecms/sdk/blob/70ad9934d35bf6956de529fe1a4e8c72c6b39e01/packages/sdk/src/main.ts#L92)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `number`; `legacyId`: `string`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `rootOnly`: `boolean`; `tags`: `string` \| `string`[]; `upcoming`: `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.gt`? | `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
| `params.rootOnly`? | `boolean` |
| `params.tags`? | `string` \| `string`[] |
| `params.upcoming`? | `boolean` |

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
