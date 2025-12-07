[**@venuecms/sdk-next**](../Index.md)

***

# Function: getSiteKeyByDomain()

```ts
function getSiteKeyByDomain(__namedParameters): Promise<any>
```

Defined in: [sdk/dist/index.d.mts:869](https://github.com/venuecms/sdk/blob/d5d72c45d7b0513f04d62c7a6de8be79efa76035/packages/sdk/dist/index.d.mts#L869)

Get the siteKey and site id from a domain name.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `domain`: `string`; \} |
| `__namedParameters.domain` | `string` |

## Returns

`Promise`\<`any`\>

## Example

```typescript
// It should not include the 'https://' component.
import { getSiteKeyByDomain } from "@venuecms/sdk";
const { data: { siteKey, id } = await getSiteKeyByDomain({ domain: 'mywebsite.com' });
```
