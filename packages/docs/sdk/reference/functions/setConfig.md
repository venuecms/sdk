[**@venuecms/sdk**](../Index.md)

***

# Function: setConfig()

```ts
function setConfig(params): void
```

Defined in: [packages/sdk/src/main.ts:35](https://github.com/venuecms/sdk/blob/bc8b8c4174423a3d8d92fe0cce4d46883acf7584/packages/sdk/src/main.ts#L35)

Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: `Partial`\<`RequestOptions`\>; `siteKey`: `string`; \} |
| `params.options`? | `Partial`\<`RequestOptions`\> |
| `params.siteKey` | `string` |

## Returns

`void`
