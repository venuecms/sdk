[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ContentEntries

```ts
type ContentEntries = ContentStyles & ListingComponents;
```

Defined in: [packages/sdk-next/src/components/VenueContent/index.tsx:424](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/index.tsx#L424)

One entry per node type, on a single map.

A string is a class name put on the renderer this module already has; a
function is a listing component, handed the records for that block once the
SDK has queried them. Key it by the same name `ContentStyles` uses for a
styled node, or by listing node type (`eventListing`) for a listing.

Callers pass one object rather than sorting their entries across two props:
no node type takes both a class and a component, so which is which follows
from the value.
