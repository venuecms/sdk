[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [packages/sdk-next/src/lib/api/index.ts:67](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/lib/api/index.ts#L67)

Get a single page using the slug (cached)

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
