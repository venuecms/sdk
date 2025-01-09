[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getSite

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

## Defined in

[src/main.ts:42](https://github.com/venuecms/sdk/blob/7d93df2eefed457c19a4c5aaa8f3aab0d6372cf0/src/main.ts#L42)
