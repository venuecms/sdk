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

## Defined in

[src/main.ts:120](https://github.com/venuecms/sdk/blob/b5a1c75896c488e0559678cc7e28425c90f79b9e/src/main.ts#L120)
