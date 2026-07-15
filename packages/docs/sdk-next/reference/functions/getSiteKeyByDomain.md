[**@venuecms/sdk-next**](../Index.md)

***

# Function: getSiteKeyByDomain()

```ts
function getSiteKeyByDomain(__namedParameters): Promise<any>
```

Defined in: [packages/sdk/dist/index.d.mts:1572](https://github.com/venuecms/sdk/blob/6af46ae3b5b61e0d4cb381a0141c00dccc61886c/packages/sdk/dist/index.d.mts#L1572)

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
