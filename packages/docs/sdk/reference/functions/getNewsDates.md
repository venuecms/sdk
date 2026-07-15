[**@venuecms/sdk**](../Index.md)

***

# Function: getNewsDates()

```ts
function getNewsDates(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: NewsDates;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:216](https://github.com/venuecms/sdk/blob/bb1137b16c817ba8d33cf05998a0f270a24c5cbe/packages/sdk/src/main.ts#L216)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `gt`: `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `number`; \} |
| `params.gt`? | `number` |
| `params.interval`? | `"day"` \| `"month"` \| `"year"` |
| `params.lt`? | `number` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`NewsDates`](../type-aliases/NewsDates.md);
  `error`: `undefined`;
 \} & `object`\>
