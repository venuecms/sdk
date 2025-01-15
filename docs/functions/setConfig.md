[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / setConfig

# Function: setConfig()

```ts
function setConfig(params): void
```

Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: `Partial`\<`RequestOptions`\>; `siteKey`: `string`; \} |
| `params.options`? | `Partial`\<`RequestOptions`\> |
| `params.siteKey` | `string` |

## Returns

`void`

## Defined in

[src/main.ts:32](https://github.com/venuecms/sdk/blob/b5a1c75896c488e0559678cc7e28425c90f79b9e/src/main.ts#L32)
