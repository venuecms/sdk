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

Defined in: [packages/sdk-next/src/lib/api/index.ts:95](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L95)

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
