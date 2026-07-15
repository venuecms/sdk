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

Defined in: [packages/sdk/dist/index.d.mts:1699](https://github.com/venuecms/sdk/blob/bb1137b16c817ba8d33cf05998a0f270a24c5cbe/packages/sdk/dist/index.d.mts#L1699)

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
