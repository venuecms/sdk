[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfile()

```ts
function getProfile(params): Promise<{
  data: undefined | Profile;
  error: unknown;
}>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:103](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/index.ts#L103)

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
