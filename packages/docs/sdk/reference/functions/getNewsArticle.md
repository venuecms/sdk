[**@venuecms/sdk**](../Index.md)

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

Defined in: [packages/sdk/src/main.ts:244](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk/src/main.ts#L244)

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
