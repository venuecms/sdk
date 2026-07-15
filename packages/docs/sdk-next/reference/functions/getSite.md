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

Defined in: [packages/sdk-next/src/lib/api/index.ts:30](https://github.com/venuecms/sdk/blob/b577ca42e1528e0087fd3a3363af76781ba1fd0a/packages/sdk-next/src/lib/api/index.ts#L30)

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
