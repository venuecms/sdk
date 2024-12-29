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

[src/createClient.ts:117](https://github.com/venuecms/sdk/blob/f338eea324f851f70433ff3fb95078fc3e71e02a/src/createClient.ts#L117)
