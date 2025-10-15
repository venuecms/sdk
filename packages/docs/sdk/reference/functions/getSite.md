[**@venuecms/sdk**](../Index.md)

***

# Function: getSite()

```ts
function getSite(): Promise<
  | {
  data: Site;
  error: undefined;
 }
  | {
  data: undefined;
  error: unknown;
} & object>
```

Defined in: [packages/sdk/src/main.ts:46](https://github.com/venuecms/sdk/blob/439d59d1d7fe9370b9001a4a50fb3715778714a4/packages/sdk/src/main.ts#L46)

Get the site configured via the siteKey

## Returns

`Promise`\<
  \| \{
  `data`: [`Site`](../type-aliases/Site.md);
  `error`: `undefined`;
 \}
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \} & `object`\>
