[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingProps\<Type\>

```ts
type ListingProps<Type> = object & Type extends PaginatedListingNodeType ? object : Record<never, never>;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:83](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L83)

What a listing component receives: the block's records, the site, and — for
the listings that paginate — the pagination.

It is called with data already resolved, so it may be a plain function —
nothing here awaits it.

`pagination` is absent from the pages listing's props rather than always
null, because that block does not paginate at all (see ./pagination). It is
nullable on the other four for the block whose author set no page size: the
endpoint returned every record, so there are no pages to draw.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `records` | [`ListingRecords`](ListingRecords.md)\[`Type`\] | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:84](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L84) |
| `site` | [`Site`](Site.md) \| `null` | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:85](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L85) |

## Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* [`ListingBlockNodeType`](ListingBlockNodeType.md) |
