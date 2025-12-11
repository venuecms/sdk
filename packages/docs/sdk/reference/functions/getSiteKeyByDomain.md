[**@venuecms/sdk**](../Index.md)

***

# Function: getSiteKeyByDomain()

```ts
function getSiteKeyByDomain(__namedParameters): Promise<any>
```

Defined in: [packages/sdk/src/main.ts:68](https://github.com/venuecms/sdk/blob/82995a80ff1f96ddd48a980b24e2a649cac0c1ff/packages/sdk/src/main.ts#L68)

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
