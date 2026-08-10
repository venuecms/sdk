[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ListingContext

```ts
type ListingContext = object;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/index.tsx:99](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L99)

What the renderer knows that a listing block cannot work out for itself.

Search params are the ones a caller threaded in, which override what the
block would otherwise read off the request; the param names come from a walk
of the whole document, since a block's param depends on the other blocks
around it. Both are optional, and a listing without either still renders.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="paramnames"></a> `paramNames` | `Map`\<[`RenderNode`](../interfaces/RenderNode.md), `string`\> | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:101](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L101) |
| <a id="searchparams"></a> `searchParams` | [`SearchParams`](SearchParams.md) \| `null` | [packages/sdk-next/src/components/VenueContent/listings/index.tsx:100](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/listings/index.tsx#L100) |
