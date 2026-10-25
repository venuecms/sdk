[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:186](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk/src/main.ts#L186)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `gt`: `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `number`; `upcoming`: `boolean`; \} |
| `params.gt`? | `number` |
| `params.interval`? | `"day"` \| `"month"` \| `"year"` |
| `params.lt`? | `number` |
| `params.upcoming`? | `boolean` |

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
