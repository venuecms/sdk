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

Defined in: [packages/sdk/src/main.ts:65](https://github.com/venuecms/sdk/blob/fbf02bcc9fd4a34da75d81536c54bdc995edf6c4/packages/sdk/src/main.ts#L65)

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
