[**@venuecms/sdk-next**](../Index.md)

***

# Function: cache()

```ts
function cache<T>(__namedParameters): Promise<T>
```

Defined in: node\_modules/.pnpm/@venuecms+sdk@1.6.1/node\_modules/@venuecms/sdk/dist/index.d.mts:1491

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `disable`: `boolean`; `fetch`: () => `Promise`\<`any`\>; `params`: `any`[]; `siteKey`: `string`; `ttl`: `number`; `type`: `"site"` \| `"customDomain"`; \} |
| `__namedParameters.disable`? | `boolean` |
| `__namedParameters.fetch` | () => `Promise`\<`any`\> |
| `__namedParameters.params`? | `any`[] |
| `__namedParameters.siteKey`? | `string` |
| `__namedParameters.ttl`? | `number` |
| `__namedParameters.type` | `"site"` \| `"customDomain"` |

## Returns

`Promise`\<`T`\>
