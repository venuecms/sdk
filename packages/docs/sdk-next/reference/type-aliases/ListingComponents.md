[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingComponents

```ts
type ListingComponents = { [Type in ListingBlockNodeType]?: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:161](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L161)

The listing components a caller may supply, keyed by node type.

Every key is optional: a template with no way to render a given listing
leaves it off, and the renderer keeps whatever it would otherwise do with
that node rather than drawing nothing. Keying off ListingBlockNodeType makes
a key that is not a listing type a compile error rather than a silently
unused entry.
