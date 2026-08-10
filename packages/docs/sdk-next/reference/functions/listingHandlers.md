[**@venuecms/sdk-next**](../Index.md)

***

# Function: listingHandlers()

```ts
function listingHandlers(components, context): NodeHandlers
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:310](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L310)

The supplied listing components wrapped into node handlers.

Built per render rather than memoised: the renderer resolves to the server
build under the app router, so handlers are minted once per request and these
fresh component identities never reach a client reconciliation that could
remount them.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `components` | [`ListingComponents`](../type-aliases/ListingComponents.md) | `undefined` |
| `context` | [`ListingContext`](../type-aliases/ListingContext.md) | `NO_CONTEXT` |

## Returns

[`NodeHandlers`](../interfaces/NodeHandlers.md)
