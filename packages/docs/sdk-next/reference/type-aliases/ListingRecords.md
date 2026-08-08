[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingRecords

```ts
type ListingRecords = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:51](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L51)

The records each listing resolves to.

Read off the endpoints' own response types rather than restated, so a record
shape that gains a field (news and pages carry a `parent` the plain `Page`
does not) stays accurate here, and a renamed `records` fails to compile.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="eventlisting"></a> `eventListing` | [`GetEventsResponse`](GetEventsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:52](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L52) |
| <a id="newslisting"></a> `newsListing` | [`GetNewsResponse`](GetNewsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:53](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L53) |
| <a id="pagelisting"></a> `pageListing` | [`GetPagesResponse`](GetPagesResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:54](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L54) |
| <a id="productlisting"></a> `productListing` | [`GetProductsResponse`](GetProductsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:55](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L55) |
| <a id="profilelisting"></a> `profileListing` | [`GetProfilesResponse`](GetProfilesResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:56](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L56) |
