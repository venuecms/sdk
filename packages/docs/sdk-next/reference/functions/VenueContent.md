[**@venuecms/sdk-next**](../Index.md)

***

# Function: VenueContent()

```ts
function VenueContent(__namedParameters): null | Element
```

Defined in: [packages/sdk-next/src/components/VenueContent/index.tsx:437](https://github.com/venuecms/sdk/blob/a5fc3f24dc596f59818f1be9e45a5dfde69b8661/packages/sdk-next/src/components/VenueContent/index.tsx#L437)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | \{ `className`: `string`; `components`: [`NodeHandlers`](../interfaces/NodeHandlers.md); `content`: [`LocalizedContent`](../type-aliases/LocalizedContent.md); `contentStyles`: [`ContentEntries`](../type-aliases/ContentEntries.md); `searchParams`: [`SearchParams`](../type-aliases/SearchParams.md); \} | - |
| `__namedParameters.className`? | `string` | - |
| `__namedParameters.components`? | [`NodeHandlers`](../interfaces/NodeHandlers.md) | - |
| `__namedParameters.content` | [`LocalizedContent`](../type-aliases/LocalizedContent.md) | - |
| `__namedParameters.contentStyles`? | [`ContentEntries`](../type-aliases/ContentEntries.md) | - |
| `__namedParameters.searchParams`? | [`SearchParams`](../type-aliases/SearchParams.md) | The route's search params, for listing blocks that paginate by link. Optional, and normally left off: a listing reads them off the request itself, which is what `venueRequestHeaders` in the site's proxy is for. Pass them to override that — content rendered for a URL other than the one being requested, or a site with no proxy of its own. With neither, a listing loses only its `pagination.links`, which is then null; the records and the counts arrive without it. |

## Returns

`null` \| `Element`
