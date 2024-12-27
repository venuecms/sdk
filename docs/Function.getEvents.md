[@venuecms/sdk](../wiki/Home) / getEvents

# Function: getEvents()

> **getEvents**(`params`): `Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`GetEventsResponse`](../wiki/TypeAlias.GetEventsResponse); `error`: `undefined`; \} & `object`\>

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

`Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`GetEventsResponse`](../wiki/TypeAlias.GetEventsResponse); `error`: `undefined`; \} & `object`\>

## Defined in

[src/createClient.ts:40](https://github.com/venuecms/sdk/blob/237fa033828e8f78d40380a5c39f6cf5abc00484/src/createClient.ts#L40)
