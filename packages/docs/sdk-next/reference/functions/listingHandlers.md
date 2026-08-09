[**@venuecms/sdk-next**](../Index.md)

***

# Function: listingHandlers()

```ts
function listingHandlers(components): NodeHandlers
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:138](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L138)

The supplied listing components wrapped into node handlers.

Built per render rather than memoised: the renderer resolves to the server
build under the app router, so handlers are minted once per request and these
fresh component identities never reach a client reconciliation that could
remount them.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `components` | [`ListingComponents`](../type-aliases/ListingComponents.md) |

## Returns

[`NodeHandlers`](../interfaces/NodeHandlers.md)
