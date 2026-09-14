[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfileProducts()

```ts
function getProfileProducts(params): Promise<{
  data:   | undefined
     | GetProfileProductsResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:120](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L120)

Get a listing of products for a profile (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> & `object` |

## Returns

`Promise`\<\{
  `data`:   \| `undefined`
     \| [`GetProfileProductsResponse`](../type-aliases/GetProfileProductsResponse.md);
  `error`: `unknown`;
 \}\>
