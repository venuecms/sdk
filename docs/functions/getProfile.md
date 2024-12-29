[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getProfile

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

[src/createClient.ts:129](https://github.com/venuecms/sdk/blob/f338eea324f851f70433ff3fb95078fc3e71e02a/src/createClient.ts#L129)
