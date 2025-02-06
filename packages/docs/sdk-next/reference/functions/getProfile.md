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

Defined in: [sdk/dist/index.d.mts:490](https://github.com/venuecms/sdk/blob/dfe07bbbcbeec8ddfda43f5a7fc98ecc9dc8ce66/packages/sdk/dist/index.d.mts#L490)

Get a profile

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
