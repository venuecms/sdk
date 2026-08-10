[**@venuecms/sdk-next**](../Index.md)

***

# Function: splitContentEntries()

```ts
function splitContentEntries<Styles>(entries, context): object
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:338](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L338)

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
| <a id="classes"></a> `classes` | `Record`\<`string`, `string`\> | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:341](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L341) |
| <a id="handlers"></a> `handlers` | [`NodeHandlers`](../interfaces/NodeHandlers.md) | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:341](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L341) |
