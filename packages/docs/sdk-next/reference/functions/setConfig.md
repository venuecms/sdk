[**@venuecms/sdk-next**](../Index.md)

***

# Function: setConfig()

```ts
function setConfig(params): void
```

Defined in: [packages/sdk/dist/index.d.mts:3738](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk/dist/index.d.mts#L3738)

Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: `Partial`\<`RequestOptions`\<`boolean`, `string`\>\>; `siteKey`: `string`; \} |
| `params.options`? | `Partial`\<`RequestOptions`\<`boolean`, `string`\>\> |
| `params.siteKey` | `string` |

## Returns

`void`
