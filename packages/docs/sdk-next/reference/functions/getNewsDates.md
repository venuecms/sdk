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

Defined in: [packages/sdk/dist/index.d.mts:1712](https://github.com/venuecms/sdk/blob/ed1e980a18956c14408ea4f812e24d6b4c2c1fee/packages/sdk/dist/index.d.mts#L1712)

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
