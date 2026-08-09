[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingComponents

```ts
type ListingComponents = { [Type in ListingBlockNodeType]?: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:67](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L67)

The listing components a caller may supply, keyed by node type.

Every key is optional: a template with no way to render a given listing
leaves it off, and the renderer keeps whatever it would otherwise do with
that node rather than drawing nothing. Keying off ListingBlockNodeType makes
a key that is not a listing type a compile error rather than a silently
unused entry.
