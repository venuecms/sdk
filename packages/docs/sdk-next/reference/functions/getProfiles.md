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

Defined in: [sdk/dist/index.d.mts:958](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L958)

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
