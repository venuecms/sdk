[**@venuecms/sdk-next**](../Index.md)

***

# Function: getSiteKeyByDomain()

```ts
function getSiteKeyByDomain(__namedParameters): Promise<any>
```

Defined in: [packages/sdk/dist/index.d.mts:1535](https://github.com/venuecms/sdk/blob/d7f812fa56e163f7f856b97d8ff40b967233ef00/packages/sdk/dist/index.d.mts#L1535)

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
