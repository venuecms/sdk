[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingComponents

```ts
type ListingComponents = { [Type in ListingBlockNodeType]?: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:162](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L162)

The listing components a caller may supply, keyed by node type.

Every key is optional: a template with no way to render a given listing
leaves it off, and the renderer keeps whatever it would otherwise do with
that node rather than drawing nothing. Keying off ListingBlockNodeType makes
a key that is not a listing type a compile error rather than a silently
unused entry.
