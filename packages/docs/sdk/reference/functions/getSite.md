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

Defined in: [packages/sdk/src/main.ts:47](https://github.com/venuecms/sdk/blob/fccd7a6c5d53db66655878a682d412275fbffc69/packages/sdk/src/main.ts#L47)

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
