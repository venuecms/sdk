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

Defined in: [packages/sdk-next/src/lib/api/index.ts:119](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L119)

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
