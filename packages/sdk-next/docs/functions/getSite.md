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

Defined in: [packages/sdk-next/src/main.ts:46](https://github.com/venuecms/sdk/blob/93f6bf3ae5c71ab7e4dd72baca4ddff927ddbc9f/packages/sdk-next/src/main.ts#L46)

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
