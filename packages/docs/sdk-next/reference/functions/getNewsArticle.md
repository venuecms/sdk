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

Defined in: [packages/sdk/dist/index.d.mts:1662](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/dist/index.d.mts#L1662)

Get a single news item using the slug

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
