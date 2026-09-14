[**@venuecms/sdk-next**](../Index.md)

***

# Function: getNewsArticle()

```ts
function getNewsArticle(params): Promise<{
  data:   | undefined
     | GetNewsArticleResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:87](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L87)

Get a single news item using the slug (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<\{
  `data`:   \| `undefined`
     \| [`GetNewsArticleResponse`](../type-aliases/GetNewsArticleResponse.md);
  `error`: `unknown`;
 \}\>
