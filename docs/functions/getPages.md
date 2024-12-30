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

src/main.ts:90
