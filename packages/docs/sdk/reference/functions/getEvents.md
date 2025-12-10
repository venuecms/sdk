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

Defined in: [packages/sdk/src/main.ts:91](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/src/main.ts#L91)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `number`; `legacyId`: `string`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `tags`: `string` \| `string`[]; `upcoming`: `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.gt`? | `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
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
