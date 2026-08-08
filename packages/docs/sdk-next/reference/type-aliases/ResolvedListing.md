[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ResolvedListing\<Type\>

```ts
type ResolvedListing<Type> = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:69](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L69)

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

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="records"></a> `records` | [`ListingRecords`](ListingRecords.md)\[`Type`\] | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:70](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L70) |
| <a id="site"></a> `site` | [`Site`](Site.md) \| `null` | [packages/sdk-next/src/components/VenueContent/listings/resolve.ts:71](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/resolve.ts#L71) |
