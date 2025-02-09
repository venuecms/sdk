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

Defined in: [sdk/dist/index.d.mts:395](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/dist/index.d.mts#L395)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `gt`: `null` \| `number`; `legacyId`: `string`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `upcoming`: `null` \| `boolean`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `null` \| `boolean` |
| `params.gt`? | `null` \| `number` |
| `params.legacyId`? | `string` |
| `params.limit`? | `null` \| `number` |
| `params.lt`? | `null` \| `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `null` \| `number` |
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
