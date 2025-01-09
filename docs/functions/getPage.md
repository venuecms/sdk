[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getPage

# Function: getPage()

```ts
function getPage(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetPageResponse;
  error: undefined;
} & object>
```

Get a single page using the slug

## Parameters

### params

`Omit`\<\{
  `siteKey`: `string`;
  `slug`: `string`;
 \}, `"siteKey"`\>

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetPageResponse`](../type-aliases/GetPageResponse.md);
  `error`: `undefined`;
 \} & `object`\>

## Defined in

[src/main.ts:120](https://github.com/venuecms/sdk/blob/7d93df2eefed457c19a4c5aaa8f3aab0d6372cf0/src/main.ts#L120)
