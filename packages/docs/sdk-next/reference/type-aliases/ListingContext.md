[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingContext

```ts
type ListingContext = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:98](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L98)

What the renderer knows that a listing block cannot work out for itself.

Search params come from the route, since a nested Server Component cannot
read them; the param names come from a walk of the whole document, since a
block's param depends on the other blocks around it. Both are optional, and a
listing without them still renders — it only loses its links.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="paramnames"></a> `paramNames` | `Map`\<[`RenderNode`](../interfaces/RenderNode.md), `string`\> | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:100](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L100) |
| <a id="searchparams"></a> `searchParams` | [`SearchParams`](SearchParams.md) \| `null` | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:99](https://github.com/venuecms/sdk/blob/52a170b94961883aa6efb382ae765b76c72e1f24/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L99) |
