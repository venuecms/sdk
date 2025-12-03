[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [sdk/dist/index.d.mts:847](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L847)

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
