[**@venuecms/sdk-next**](../Index.md)

***

# Function: getLocalizedContent()

```ts
function getLocalizedContent(localizedContent, locale): object
```

Defined in: [sdk/dist/index.d.mts:816](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L816)

This function will properly resolve content blocks that are localized.
It takes in the array of localized content and returns the proper content
to be used in your page.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `localizedContent` | `undefined` \| [`LocalizedContent`](../type-aliases/LocalizedContent.md)[] |
| `locale` | `string` |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="content"></a> `content` | [`LocalizedContent`](../type-aliases/LocalizedContent.md) | [sdk/dist/index.d.mts:817](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L817) |
| <a id="currentlocale"></a> `currentLocale` | `string` | [sdk/dist/index.d.mts:818](https://github.com/venuecms/sdk/blob/679843f03ad94db45890904235728c199874457d/packages/sdk/dist/index.d.mts#L818) |

## Example

```typescript
import { getEvent, getLocalizedContent } from "@venuecms/sdk";
import { ContentRender, type RenderNode } from "@/lib/utils/renderer";

// let's assume we are looking at an event and want to show the locale-specific title of that event in english
const { data: event } = await getEvent({ slug });

// Use getLocalizedContent to retrieve all localized content in the correct locale
// typically you will pass a locale from your app (such as from a i18n library) but
// for clarity I am passing "en" explicitly to retrieve the english version
const { content } = getLocalizedContent(event.localizedContent, "en");

// Render the content in english using the renderer
return (
  <div>
    <VenueContent classes={renderedStyles} content={content} />
  </div>
);
```
