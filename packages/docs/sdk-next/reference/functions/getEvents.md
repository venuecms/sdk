[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEvents()

```ts
function getEvents(params): Promise<{
  data: undefined | GetEventsResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:51](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L51)

Get a list of events (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `gt`: `null` \| `number`; `legacyId`: `string`; `limit`: `null` \| `number`; `lt`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `rootOnly`: `boolean`; `tags`: `string` \| `string`[]; `upcoming`: `boolean`; \} |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`GetEventsResponse`](../type-aliases/GetEventsResponse.md);
  `error`: `unknown`;
 \}\>
