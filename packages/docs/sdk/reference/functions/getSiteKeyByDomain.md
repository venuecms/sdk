[**@venuecms/sdk**](../Index.md)

***

# Function: getSiteKeyByDomain()

```ts
function getSiteKeyByDomain(__namedParameters): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: GetSiteByDomainResponse;
  error: undefined;
} & object>
```

Defined in: [packages/sdk/src/main.ts:66](https://github.com/venuecms/sdk/blob/bc8b8c4174423a3d8d92fe0cce4d46883acf7584/packages/sdk/src/main.ts#L66)

Get the siteKey and site id from a domain name.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `domain`: `string`; \} |
| `__namedParameters.domain` | `string` |

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`GetSiteByDomainResponse`](../type-aliases/GetSiteByDomainResponse.md);
  `error`: `undefined`;
 \} & `object`\>

## Example

```typescript
// It should not include the 'https://' component.
import { getSiteKeyByDomain } from "@venuecms/sdk";
const { data: { siteKey, id } = await getSiteKeyByDomain({ domain: 'mywebsite.com' });
```
