[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: AllListingComponents

```ts
type AllListingComponents = { [Type in ListingBlockNodeType]: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:173](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L173)

The same map with every listing required.

A template that means to render all of them annotates its map with this, so a
listing type added to the contract fails to compile until it has a component
— rather than being dropped from the published page with a console warning.
