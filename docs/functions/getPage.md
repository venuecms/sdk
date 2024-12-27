[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getPage

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

[src/createClient.ts:103](https://github.com/venuecms/sdk/blob/823b04c9ee84b4d1baaafd2d6fb4c862f759e4e8/src/createClient.ts#L103)
