[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [packages/sdk/dist/index.d.mts:3909](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk/dist/index.d.mts#L3909)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `gt`: `null` \| `number`; `interval`: `"day"` \| `"month"` \| `"year"`; `lt`: `null` \| `number`; \} |

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
