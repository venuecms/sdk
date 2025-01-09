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

[src/main.ts:106](https://github.com/venuecms/sdk/blob/d518c8aac3a863994a7c808a9c7d9d339366ea38/src/main.ts#L106)
