[**@venuecms/sdk-next**](../Index.md)

***

# Function: cache()

```ts
function cache<T>(__namedParameters): Promise<T>
```

Defined in: [sdk/dist/index.d.mts:825](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L825)

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
