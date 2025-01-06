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

[src/main.ts:42](https://github.com/venuecms/sdk/blob/2ca50bf1921627009457658807ac341d342a13a9/src/main.ts#L42)
