[**@venuecms/sdk-next**](../Index.md)

***

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

Defined in: [sdk-next/src/lib/api/index.ts:69](https://github.com/venuecms/sdk/blob/d5d72c45d7b0513f04d62c7a6de8be79efa76035/packages/sdk-next/src/lib/api/index.ts#L69)

Get a list of profiles (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \| `undefined` \| \{ `dir`: `"asc"` \| `"desc"`; `limit`: `null` \| `number`; `orderBy`: `string`; `page`: `null` \| `number`; `tags`: `string` \| `string`[]; `type`: `"member"`; \} |

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
