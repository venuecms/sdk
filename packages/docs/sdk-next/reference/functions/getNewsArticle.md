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

Defined in: [packages/sdk-next/src/lib/api/index.ts:88](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L88)

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
