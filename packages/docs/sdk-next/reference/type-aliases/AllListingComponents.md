[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: AllListingComponents

```ts
type AllListingComponents = { [Type in ListingBlockNodeType]: ListingComponent<Type> };
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:172](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L172)

The same map with every listing required.

A template that means to render all of them annotates its map with this, so a
listing type added to the contract fails to compile until it has a component
— rather than being dropped from the published page with a console warning.
