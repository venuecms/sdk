[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [packages/sdk-next/src/lib/api/index.ts:37](https://github.com/venuecms/sdk/blob/b577ca42e1528e0087fd3a3363af76781ba1fd0a/packages/sdk-next/src/lib/api/index.ts#L37)

Get a list of events (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `null` \| `boolean`; `gt`: `null` \| `number`; `legacyId`: `string`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `rootOnly`: `null` \| `boolean`; `tags`: `string` \| `string`[]; `upcoming`: `null` \| `boolean`; \} |

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
