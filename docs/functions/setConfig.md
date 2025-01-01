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

#### siteKey

`string`

## Returns

`void`

## Defined in

[src/main.ts:30](https://github.com/venuecms/sdk/blob/2edfd13c06baf443bbea491be2ef200d66919dd4/src/main.ts#L30)
