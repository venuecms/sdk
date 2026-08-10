[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingRecords

```ts
type ListingRecords = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:54](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L54)

The records each listing resolves to.

Read off the endpoints' own response types rather than restated, so a record
shape that gains a field (news and pages carry a `parent` the plain `Page`
does not) stays accurate here, and a renamed `records` fails to compile.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="eventlisting"></a> `eventListing` | [`GetEventsResponse`](GetEventsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:55](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L55) |
| <a id="newslisting"></a> `newsListing` | [`GetNewsResponse`](GetNewsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:56](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L56) |
| <a id="pagelisting"></a> `pageListing` | [`GetPagesResponse`](GetPagesResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:57](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L57) |
| <a id="productlisting"></a> `productListing` | [`GetProductsResponse`](GetProductsResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:58](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L58) |
| <a id="profilelisting"></a> `profileListing` | [`GetProfilesResponse`](GetProfilesResponse.md)\[`"records"`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:59](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L59) |
