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

[src/createClient.ts:40](https://github.com/venuecms/sdk/blob/a67bd36579ec58f05616b697172009f8707ee8a7/src/createClient.ts#L40)
