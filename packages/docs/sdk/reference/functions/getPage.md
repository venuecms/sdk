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

Defined in: [packages/sdk/src/main.ts:153](https://github.com/venuecms/sdk/blob/439d59d1d7fe9370b9001a4a50fb3715778714a4/packages/sdk/src/main.ts#L153)

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
