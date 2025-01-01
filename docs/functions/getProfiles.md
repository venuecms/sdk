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

[src/main.ts:125](https://github.com/venuecms/sdk/blob/2edfd13c06baf443bbea491be2ef200d66919dd4/src/main.ts#L125)
