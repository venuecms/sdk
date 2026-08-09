[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingProps\<Type\>

```ts
type ListingProps<Type> = ResolvedListing<Type>;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:50](https://github.com/venuecms/sdk/blob/aa185319e7ab804b356ca3caf78ab8ee4b646c47/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L50)

What a listing component receives: the block's records and the site.

It is called with data already resolved, so it may be a plain function —
nothing here awaits it.

## Type Parameters

| Type Parameter |
| ------ |
| `Type` *extends* [`ListingBlockNodeType`](ListingBlockNodeType.md) |
