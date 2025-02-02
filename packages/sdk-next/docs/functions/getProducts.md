[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProducts()

```ts
function getProducts(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: {
     count: number;
     records: Product[];
    };
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/main.ts:181](https://github.com/venuecms/sdk/blob/827e1eaa472dae7093291e9dcf3855760c75d0d4/packages/sdk-next/src/main.ts#L181)

Get a listing of products

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: \{
     `count`: `number`;
     `records`: [`Product`](../type-aliases/Product.md)[];
    \};
  `error`: `undefined`;
 \} & `object`\>
