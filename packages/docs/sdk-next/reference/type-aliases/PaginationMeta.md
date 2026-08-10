[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: PaginationMeta

```ts
type PaginationMeta = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:73](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L73)

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` \| `null` | Total records matching the block's filters, across all pages — or null when the endpoint did not report one, which products and profiles are permitted to do. Guard on it before rendering "N results". | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:85](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L85) |
| <a id="hasnext"></a> `hasNext` | `boolean` | - | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:89](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L89) |
| <a id="hasprev"></a> `hasPrev` | `boolean` | - | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:88](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L88) |
| <a id="page"></a> `page` | `number` | The current page, 0-indexed, as the endpoints index them. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:75](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L75) |
| <a id="pagecount"></a> `pageCount` | `number` \| `null` | Pages in the whole match; null whenever `count` is. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:87](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L87) |
| <a id="pagenumber"></a> `pageNumber` | `number` | The same page, 1-based, for display. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:77](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L77) |
| <a id="pagesize"></a> `pageSize` | `number` | The author's page size. | [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:79](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L79) |
