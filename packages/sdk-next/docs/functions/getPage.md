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
  data: Page & object;
  error: undefined;
} & object>
```

Defined in: packages/sdk-next/src/main.ts:123

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
  `data`: [`Page`](../type-aliases/Page.md) & `object`;
  `error`: `undefined`;
 \} & `object`\>
