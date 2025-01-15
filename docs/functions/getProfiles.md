[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getProfiles

# Function: getProfiles()

```ts
function getProfiles(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfilesResponse;
  error: undefined;
} & object>
```

Get a list of profiles

## Parameters

### params

#### dir

`"asc"` \| `"desc"`

#### limit

`number`

#### orderBy

`string`

#### page

`number`

#### type

`"member"`

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetProfilesResponse`](../type-aliases/GetProfilesResponse.md);
  `error`: `undefined`;
 \} & `object`\>

## Defined in

[src/main.ts:135](https://github.com/venuecms/sdk/blob/915971a29eb95acc8223db796957e1d217a65139/src/main.ts#L135)
