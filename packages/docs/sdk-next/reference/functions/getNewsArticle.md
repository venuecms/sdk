[**@venuecms/sdk-next**](../Index.md)

***

# Function: getNewsArticle()

```ts
function getNewsArticle(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetNewsArticleResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:83](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/lib/api/index.ts#L83)

Get a single news item using the slug (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetNewsArticleResponse`](../type-aliases/GetNewsArticleResponse.md);
  `error`: `undefined`;
 \} & `object`\>
