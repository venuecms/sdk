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

Defined in: [packages/sdk/dist/index.d.mts:1602](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/dist/index.d.mts#L1602)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `gt`: `null` \| `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `null` \| `number`; `upcoming`: `null` \| `boolean`; \} |

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
