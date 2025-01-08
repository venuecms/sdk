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

Get a profile

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

[src/main.ts:149](https://github.com/venuecms/sdk/blob/655afdbbb73b0333dc2f8ae63a5e6dccc97fd3b5/src/main.ts#L149)
