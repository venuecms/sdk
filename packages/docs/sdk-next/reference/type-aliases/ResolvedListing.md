[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ResolvedListing\<Type\>

```ts
type ResolvedListing<Type> = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:72](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L72)

What a listing component is handed: the block's records, plus the site.

`site` is passed because a list component generally needs it to render a
record (a date needs the site's timezone, a price its currency) and a
component the renderer calls cannot fetch it — it is handed its data, not
asked to resolve it. It is nullable because the site read fails in-band like
any other, and a listing that does not use the site (profiles) should still
render when it is missing.

## Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* [`ListingBlockNodeType`](ListingBlockNodeType.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` \| `null` | Total records matching the block's filters, across every page, or null when the endpoint did not report one. The products and profiles endpoints declare `count` optional, so null is a response they are allowed to give. It is carried through as null rather than substituted, because every plausible substitute is a lie a template would print: the page's own length says "12 products" for a match of a hundred and takes the next page's link away with it, and zero renders the block as nothing at all. Downstream, an unknown count means a pager that can still go forward — see `paginationMeta` — but cannot say how far. Null on a failed read too, since the endpoint reports a bad request in-band as absent data. | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:90](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L90) |
| <a id="records"></a> `records` | [`ListingRecords`](ListingRecords.md)\[`Type`\] | - | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:73](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L73) |
| <a id="site"></a> `site` | [`Site`](Site.md) \| `null` | - | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:74](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L74) |
