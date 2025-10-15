[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfiles()

```ts
function getProfiles(params?): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetProfilesResponse;
  error: undefined;
} & object>
```

Defined in: [sdk/dist/index.d.mts:644](https://github.com/venuecms/sdk/blob/439d59d1d7fe9370b9001a4a50fb3715778714a4/packages/sdk/dist/index.d.mts#L644)

Get a list of profiles

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params`? | \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `tags`: `string` \| `string`[]; `type`: `"member"`; \} |
| `params.dir`? | `"asc"` \| `"desc"` |
| `params.limit`? | `null` \| `number` |
| `params.orderBy`? | `string` |
| `params.page`? | `null` \| `number` |
| `params.tags`? | `string` \| `string`[] |
| `params.type`? | `"member"` |

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
