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

Defined in: [sdk-next/src/lib/api/index.ts:30](https://github.com/venuecms/sdk/blob/d5d72c45d7b0513f04d62c7a6de8be79efa76035/packages/sdk-next/src/lib/api/index.ts#L30)

Get the site configured via the siteKey (cached)

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
