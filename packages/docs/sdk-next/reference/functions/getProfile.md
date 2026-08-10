[**@venuecms/sdk-next**](../Index.md)

***

# Function: getProfile()

```ts
function getProfile(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: Profile;
  error: undefined;
} & object>
```

Defined in: [packages/sdk-next/src/lib/api/index.ts:100](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/lib/api/index.ts#L100)

Get a profile (cached)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\> |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`Profile`](../type-aliases/Profile.md);
  `error`: `undefined`;
 \} & `object`\>
