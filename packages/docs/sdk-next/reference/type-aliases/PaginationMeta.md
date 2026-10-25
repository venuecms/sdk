[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: PaginationMeta

```ts
type PaginationMeta = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:68](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L68)

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` \| `null` | Total records matching the block's filters, across all pages — or null when the endpoint did not report one, which products and profiles are permitted to do. Guard on it before rendering "N results". | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:80](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L80) |
| <a id="hasnext"></a> `hasNext` | `boolean` | - | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:84](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L84) |
| <a id="hasprev"></a> `hasPrev` | `boolean` | - | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:83](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L83) |
| <a id="page"></a> `page` | `number` | The current page, 0-indexed, as the endpoints index them. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:70](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L70) |
| <a id="pagecount"></a> `pageCount` | `number` \| `null` | Pages in the whole match; null whenever `count` is. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:82](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L82) |
| <a id="pagenumber"></a> `pageNumber` | `number` | The same page, 1-based, for display. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:72](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L72) |
| <a id="pagesize"></a> `pageSize` | `number` | The author's page size. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:74](https://github.com/venuecms/sdk/blob/cfed6bdc583cc0d277b4fe1af72727ff7219484d/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L74) |
