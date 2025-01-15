[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getPages

# Function: getPages()

```ts
function getPages(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetPagesResponse;
  error: undefined;
} & object>
```

Get a list of all pages

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `dir`: `"asc"` \| `"desc"`; `featured`: `boolean`; `limit`: `number`; `orderBy`: `string`; `page`: `number`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.featured`? | `boolean` |
| `params.limit`? | `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `number` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetPagesResponse`](../type-aliases/GetPagesResponse.md);
  `error`: `undefined`;
 \} & `object`\>

## Defined in

[src/main.ts:106](https://github.com/venuecms/sdk/blob/535f6cc6bb8e343eb77f7a779e895c729df808ed/src/main.ts#L106)
