[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getProfile

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

## Parameters

### params

`Omit`\<\{
  `siteKey`: `string`;
  `slug`: `string`;
 \}, `"siteKey"`\>

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

## Defined in

[src/createClient.ts:129](https://github.com/venuecms/sdk/blob/f129a52a8dada040e7d47cae058990c6423a868d/src/createClient.ts#L129)
