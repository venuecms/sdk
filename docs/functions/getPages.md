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

[src/main.ts:100](https://github.com/venuecms/sdk/blob/2edfd13c06baf443bbea491be2ef200d66919dd4/src/main.ts#L100)
