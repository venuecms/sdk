[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingPageLinks

```ts
type ListingPageLinks = object;
```

Defined in: packages/sdk-next/src/components/VenueContent/listings/pagination.ts:87

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hrefs"></a> `hrefs` | `string`[] | One href per page, `hrefs[0]` being page 1. Capped at MAX_PAGE_LINKS. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:93 |
| <a id="nexthref"></a> `nextHref` | `string` \| `null` | - | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:91 |
| <a id="param"></a> `param` | `string` | The search param this block owns; unique among the blocks on a page. | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:89 |
| <a id="prevhref"></a> `prevHref` | `string` \| `null` | - | packages/sdk-next/src/components/VenueContent/listings/pagination.ts:90 |
