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

[src/main.ts:32](https://github.com/venuecms/sdk/blob/7553f2f1dfb552861476dc6bc82e87fac13c2999/src/main.ts#L32)
