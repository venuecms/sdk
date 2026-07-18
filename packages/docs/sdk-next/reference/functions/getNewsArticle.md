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

Defined in: [packages/sdk-next/src/lib/api/index.ts:83](https://github.com/venuecms/sdk/blob/480e497146161f350eebc6bb389830dfa2b4e437/packages/sdk-next/src/lib/api/index.ts#L83)

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
