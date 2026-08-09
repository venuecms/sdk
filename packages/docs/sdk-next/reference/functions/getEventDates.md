[**@venuecms/sdk-next**](../Index.md)

***

# Function: getEventDates()

```ts
function getEventDates(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: EventDates;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/dist/index.d.mts:3836](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk/dist/index.d.mts#L3836)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `gt`: `null` \| `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `null` \| `number`; `upcoming`: `string` \| `string`[]; \} |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`EventDates`](../type-aliases/EventDates.md);
  `error`: `undefined`;
 \} & `object`\>
