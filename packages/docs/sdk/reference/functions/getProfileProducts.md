[**@venuecms/sdk**](../Index.md)

***

# Function: getProfileProducts()

```ts
function getProfileProducts(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfileProductsResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:229](https://github.com/venuecms/sdk/blob/6f104eb2b15689b8e7db6a19e5768915c3f1825f/packages/sdk/src/main.ts#L229)

Get a listing of products for a profile

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> & `object` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProfileProductsResponse`](../type-aliases/GetProfileProductsResponse.md);
  `error`: `undefined`;
 \} & `object`\>
