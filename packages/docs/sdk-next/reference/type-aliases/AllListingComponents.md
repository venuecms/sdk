[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: AllListingComponents

```ts
type AllListingComponents = { [Type in ListingBlockNodeType]: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:172](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L172)

The same map with every listing required.

A template that means to render all of them annotates its map with this, so a
listing type added to the contract fails to compile until it has a component
— rather than being dropped from the published page with a console warning.
