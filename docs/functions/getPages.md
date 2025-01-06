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

## Parameters

### params

#### dir

`"asc"` \| `"desc"`

#### featured

`boolean`

#### limit

`number`

#### orderBy

`string`

#### page

`number`

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

[src/main.ts:102](https://github.com/venuecms/sdk/blob/df9684e4c8d8b9ec64f5682904234454e23baf21/src/main.ts#L102)
