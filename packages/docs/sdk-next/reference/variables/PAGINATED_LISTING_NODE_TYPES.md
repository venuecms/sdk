[**@venuecms/sdk-next**](../Index.md)

***

# Variable: PAGINATED\_LISTING\_NODE\_TYPES

```ts
const PAGINATED_LISTING_NODE_TYPES: readonly ["eventListing", "newsListing", "productListing", "profileListing"];
```

Defined in: packages/sdk-next/src/components/VenueContent/listings/pagination.ts:27

The listings that paginate.

`pageListing` is deliberately absent: the pages block serializes no
`limit`/`page` (see ./params), because a page read has to return everything
for parent-path resolution. Naming the paginated four here rather than
excluding one from `ListingBlockNodeType` is what keeps `pagination` off the
pages component's props entirely, instead of always-null.
