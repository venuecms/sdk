[**@venuecms/sdk-next**](../Index.md)

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

Defined in: [sdk/dist/index.d.mts:542](https://github.com/venuecms/sdk/blob/c6cec40cde126501ec4bb978346ee3aecb0217b6/packages/sdk/dist/index.d.mts#L542)

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
