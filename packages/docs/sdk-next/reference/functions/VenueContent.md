[**@venuecms/sdk-next**](../Index.md)

***

# Function: VenueContent()

```ts
function VenueContent(__namedParameters): null | Element
```

Defined in: [packages/sdk-next/src/components/VenueContent/index.tsx:437](https://github.com/venuecms/sdk/blob/f128cd64889c85395a45aac3e35805d327908fc7/packages/sdk-next/src/components/VenueContent/index.tsx#L437)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | \{ `className`: `string`; `components`: [`NodeHandlers`](../interfaces/NodeHandlers.md); `content`: [`LocalizedContent`](../type-aliases/LocalizedContent.md); `contentStyles`: [`ContentEntries`](../type-aliases/ContentEntries.md); `searchParams`: [`SearchParams`](../type-aliases/SearchParams.md); \} | - |
| `__namedParameters.className`? | `string` | - |
| `__namedParameters.components`? | [`NodeHandlers`](../interfaces/NodeHandlers.md) | - |
| `__namedParameters.content` | [`LocalizedContent`](../type-aliases/LocalizedContent.md) | - |
| `__namedParameters.contentStyles`? | [`ContentEntries`](../type-aliases/ContentEntries.md) | - |
| `__namedParameters.searchParams`? | [`SearchParams`](../type-aliases/SearchParams.md) | The route's search params, for listing blocks that paginate by link. Only a route segment can read search params — a listing sits too deep to ask for them — so a caller that wants paginated listings to produce hrefs passes them down from the page. Leaving it off costs a listing only its `pagination.links`, which is then null; the records and the counts arrive without it. |

## Returns

`null` \| `Element`
