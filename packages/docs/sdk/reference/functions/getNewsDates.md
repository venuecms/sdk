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

Defined in: [packages/sdk/src/main.ts:224](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk/src/main.ts#L224)

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
