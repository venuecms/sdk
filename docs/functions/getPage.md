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

[src/createClient.ts:104](https://github.com/venuecms/sdk/blob/f338eea324f851f70433ff3fb95078fc3e71e02a/src/createClient.ts#L104)
