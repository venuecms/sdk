[**@venuecms/sdk**](../Index.md)

***

# Function: cache()

```ts
function cache<T>(__namedParameters): Promise<T>
```

Defined in: [packages/sdk/src/utils/cache.ts:24](https://github.com/venuecms/sdk/blob/82995a80ff1f96ddd48a980b24e2a649cac0c1ff/packages/sdk/src/utils/cache.ts#L24)

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
