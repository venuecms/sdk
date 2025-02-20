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

Defined in: [packages/sdk/src/main.ts:80](https://github.com/venuecms/sdk/blob/fbf02bcc9fd4a34da75d81536c54bdc995edf6c4/packages/sdk/src/main.ts#L80)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `number`; `legacyId`: `string`; `limit`: `number`; `lt`: `number`; `orderBy`: `string`; `page`: `number`; `upcoming`: `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.gt`? | `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `number` |
| `params.lt`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |
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
