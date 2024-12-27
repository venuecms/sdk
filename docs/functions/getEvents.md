[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getEvents

# Function: getEvents()

> **getEvents**(`params`): `Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`GetEventsResponse`](../type-aliases/GetEventsResponse.md); `error`: `undefined`; \} & `object`\>

## Parameters

### params

#### dir

`"asc"` \| `"desc"`

#### featured

`boolean`

#### gt

`number`

#### legacyId

`string`

#### limit

`number`

#### lt

`number`

#### orderBy

`string`

#### page

`number`

#### upcoming

`boolean`

## Returns

`Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`GetEventsResponse`](../type-aliases/GetEventsResponse.md); `error`: `undefined`; \} & `object`\>

## Defined in

[src/createClient.ts:40](https://github.com/venuecms/sdk/blob/8a6c84653ba60be7399cb6d469978abeb0f847f0/src/createClient.ts#L40)
