[**@venuecms/sdk-next**](../Index.md)

***

# Function: splitContentEntries()

```ts
function splitContentEntries<Styles>(entries): object
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:174](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L174)

Splits a caller's one map into the class names the renderer applies and the
handlers it dispatches on.

A string is a class name for a node the renderer already draws; a function is
a listing component. That is the whole rule, and it is why the two can share
a map: no node type takes both.

## Type Parameters

| Type Parameter |
| ------ |
| `Styles` *extends* `Record`\<`string`, `unknown`\> |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `entries` | `Styles` |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="classes"></a> `classes` | `Record`\<`string`, `string`\> | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:176](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L176) |
| <a id="handlers"></a> `handlers` | [`NodeHandlers`](../interfaces/NodeHandlers.md) | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:176](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L176) |
