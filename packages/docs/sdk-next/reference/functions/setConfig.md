[**@venuecms/sdk-next**](../Index.md)

***

# Function: setConfig()

```ts
function setConfig(params): void
```

Defined in: [sdk/dist/index.d.mts:373](https://github.com/venuecms/sdk/blob/6283acc845335a99eac7e210bd07dad1da30061f/packages/sdk/dist/index.d.mts#L373)

Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: `Partial`\<`RequestOptions`\>; `siteKey`: `string`; \} |
| `params.options`? | `Partial`\<`RequestOptions`\> |
| `params.siteKey` | `string` |

## Returns

`void`
