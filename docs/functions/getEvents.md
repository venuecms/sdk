[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getEvents

# Function: getEvents()

```ts
function getEvents(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetEventsResponse;
  error: undefined;
} & object>
```

## Parameters

### params

#### dir

`"asc"` \| `"desc"`

#### featured

`boolean`

#### gt

`number`

#### legacyId

`string`

#### limit

`number`

#### lt

`number`

#### orderBy

`string`

#### page

`number`

#### upcoming

`boolean`

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetEventsResponse`](../type-aliases/GetEventsResponse.md);
  `error`: `undefined`;
 \} & `object`\>

## Defined in

[src/main.ts:54](https://github.com/venuecms/sdk/blob/7d93df2eefed457c19a4c5aaa8f3aab0d6372cf0/src/main.ts#L54)
