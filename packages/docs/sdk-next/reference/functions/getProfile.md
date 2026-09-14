[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfile()

```ts
function getProfile(params): Promise<{
  data: undefined | Profile;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:102](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/lib/api/index.ts#L102)

Get a profile (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<\{
  `data`: `undefined` \| [`Profile`](../type-aliases/Profile.md);
  `error`: `unknown`;
 \}\>
