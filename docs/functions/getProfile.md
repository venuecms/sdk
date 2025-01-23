[**@venuecms/sdk**](../Index.md)

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

## Defined in

[src/main.ts:149](https://github.com/venuecms/sdk/blob/5ae39368afca7845a7db783bc57e3aef70f1be64/src/main.ts#L149)
