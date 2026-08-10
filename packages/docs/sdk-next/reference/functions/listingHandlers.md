[**@venuecms/sdk-next**](../Index.md)

***

# Function: listingHandlers()

```ts
function listingHandlers(components, context): NodeHandlers
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:301](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L301)

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
