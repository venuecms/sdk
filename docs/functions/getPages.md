[**@venuecms/sdk**](../Index.md)

***

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

[src/main.ts:106](https://github.com/venuecms/sdk/blob/f00451b8a27a69349a724b38e003e82c432884fc/src/main.ts#L106)
