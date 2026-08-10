[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: PaginationMeta

```ts
type PaginationMeta = object;
```

Defined in: packages/sdk-next/src/components/VenueContent/listings/pagination.ts:68

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` \| `null` | Total records matching the block's filters, across all pages — or null when the endpoint did not report one, which products and profiles are permitted to do. Guard on it before rendering "N results". | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:80 |
| <a id="hasnext"></a> `hasNext` | `boolean` | - | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:84 |
| <a id="hasprev"></a> `hasPrev` | `boolean` | - | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:83 |
| <a id="page"></a> `page` | `number` | The current page, 0-indexed, as the endpoints index them. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:70 |
| <a id="pagecount"></a> `pageCount` | `number` \| `null` | Pages in the whole match; null whenever `count` is. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:82 |
| <a id="pagenumber"></a> `pageNumber` | `number` | The same page, 1-based, for display. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:72 |
| <a id="pagesize"></a> `pageSize` | `number` | The author's page size. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:74 |
