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

Defined in: [packages/sdk/src/main.ts:143](https://github.com/venuecms/sdk/blob/6f104eb2b15689b8e7db6a19e5768915c3f1825f/packages/sdk/src/main.ts#L143)

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
