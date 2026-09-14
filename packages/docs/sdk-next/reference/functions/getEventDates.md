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

Defined in: [packages/sdk/dist/index.d.mts:4402](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk/dist/index.d.mts#L4402)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `gt`: `null` \| `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `null` \| `number`; `upcoming`: `boolean`; \} |

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
