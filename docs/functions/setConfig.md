[**@venuecms/sdk**](../Index.md)

***

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

[src/main.ts:32](https://github.com/venuecms/sdk/blob/97b5dd87028768348fc162149733841fcbf81c7e/src/main.ts#L32)
