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

Defined in: [packages/sdk/src/main.ts:66](https://github.com/venuecms/sdk/blob/9df621babf2d64de41bd45733e16986e94017e8a/packages/sdk/src/main.ts#L66)

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
