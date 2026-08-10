[**@venuecms/sdk-next**](../Index.md)

***

# Function: cache()

```ts
function cache<T>(__namedParameters): Promise<T>
```

Defined in: [packages/sdk/dist/index.d.mts:3725](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk/dist/index.d.mts#L3725)

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
