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

Defined in: [sdk/dist/index.d.mts:655](https://github.com/venuecms/sdk/blob/c6cec40cde126501ec4bb978346ee3aecb0217b6/packages/sdk/dist/index.d.mts#L655)

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
