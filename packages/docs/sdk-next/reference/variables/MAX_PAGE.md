[**@venuecms/sdk-next**](../Index.md)

***

# Variable: MAX\_PAGE

```ts
const MAX_PAGE: 1000 = 1000;
```

Defined in: packages/sdk-next/src/components/VenueContent/listings/pagination.ts:66

The deepest page a URL may name.

The endpoints page by offset, so an arbitrary page number is an arbitrary
offset for the database to walk — and the page comes off the query string,
which is a reader's to edit. No pager a reader clicks reaches this far: a
listing long enough to need page 1001 is a search, not a block in an article.
