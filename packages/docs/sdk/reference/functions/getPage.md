[**@venuecms/sdk**](../Index.md)

***

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

Defined in: [packages/sdk/src/main.ts:174](https://github.com/venuecms/sdk/blob/3bd84adbd3a78fae724fcf1d00721691a6434bb8/packages/sdk/src/main.ts#L174)

Get a single page using the slug

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
  `data`: [`GetPageResponse`](../type-aliases/GetPageResponse.md);
  `error`: `undefined`;
 \} & `object`\>
