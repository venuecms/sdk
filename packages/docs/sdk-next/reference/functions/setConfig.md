[**@venuecms/sdk-next**](../Index.md)

***

# Function: setConfig()

```ts
function setConfig(params): void
```

Defined in: [packages/sdk-next/src/lib/api/siteKey.ts:32](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/lib/api/siteKey.ts#L32)

Configures the SDK for the site this request is being served as.

Wraps the core `setConfig`, which is still called so that anything reaching
past this package into `@venuecms/sdk` keeps working, and additionally pins
the siteKey for the current request only.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: `Partial`\<`RequestOptions`\<`boolean`, `string`\>\>; `siteKey`: `string`; \} |
| `params.options`? | `Partial`\<`RequestOptions`\<`boolean`, `string`\>\> |
| `params.siteKey` | `string` |

## Returns

`void`
