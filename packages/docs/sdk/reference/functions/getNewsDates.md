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

Defined in: [packages/sdk/src/main.ts:256](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk/src/main.ts#L256)

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
