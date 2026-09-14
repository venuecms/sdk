[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfiles()

```ts
function getProfiles(params): Promise<{
  data:   | undefined
     | GetProfilesResponse;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:96](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L96)

Get a list of profiles (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `query`: `null` \| `string`; `tags`: `string` \| `string`[]; `type`: `"member"`; \} |

## Returns

`Promise`\<\{
  `data`:   \| `undefined`
     \| [`GetProfilesResponse`](../type-aliases/GetProfilesResponse.md);
  `error`: `unknown`;
 \}\>
