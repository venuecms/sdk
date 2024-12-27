[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getProfiles

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

[src/createClient.ts:117](https://github.com/venuecms/sdk/blob/f129a52a8dada040e7d47cae058990c6423a868d/src/createClient.ts#L117)
