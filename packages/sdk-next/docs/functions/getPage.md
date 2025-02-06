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

Defined in: [sdk/dist/index.d.mts:460](https://github.com/venuecms/sdk/blob/da35bc89025fb85e596c6443c84da7b9eb9593b5/packages/sdk/dist/index.d.mts#L460)

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
