[**@venuecms/sdk-next**](../Index.md)

***

# Function: splitContentEntries()

```ts
function splitContentEntries<Styles>(entries, context): object
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:347](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L347)

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

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entries` | `Styles` | `undefined` |
| `context` | [`ListingContext`](../type-aliases/ListingContext.md) | `NO_CONTEXT` |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="classes"></a> `classes` | `Record`\<`string`, `string`\> | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:350](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L350) |
| <a id="handlers"></a> `handlers` | [`NodeHandlers`](../interfaces/NodeHandlers.md) | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:350](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L350) |
