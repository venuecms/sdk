[**@venuecms/sdk-next**](../Index.md)

***

# Function: getPage()

```ts
function getPage(params): Promise<{
  data: undefined | GetPageResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:73](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L73)

Get a single page using the slug (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`GetPageResponse`](../type-aliases/GetPageResponse.md);
  `error`: `unknown`;
 \}\>
