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

[src/main.ts:42](https://github.com/venuecms/sdk/blob/d518c8aac3a863994a7c808a9c7d9d339366ea38/src/main.ts#L42)
