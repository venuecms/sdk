[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / setConfig

# Function: setConfig()

```ts
function setConfig(params): void
```

Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.

## Parameters

### params

#### options

`Partial`\<`RequestOptions`\>

#### siteKey

`string`

## Returns

`void`

## Defined in

[src/main.ts:32](https://github.com/venuecms/sdk/blob/915971a29eb95acc8223db796957e1d217a65139/src/main.ts#L32)
