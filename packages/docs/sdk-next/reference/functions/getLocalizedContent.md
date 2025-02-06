[**@venuecms/sdk-next**](../Index.md)

***

# Function: getLocalizedContent()

```ts
function getLocalizedContent(localizedContent, locale): object
```

Defined in: [sdk/dist/index.d.mts:361](https://github.com/venuecms/sdk/blob/dbe1bd3b5606b46905e3e9cba86e4c1f6af6def7/packages/sdk/dist/index.d.mts#L361)

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
| <a id="content"></a> `content` | [`LocalizedContent`](../type-aliases/LocalizedContent.md) | [sdk/dist/index.d.mts:362](https://github.com/venuecms/sdk/blob/dbe1bd3b5606b46905e3e9cba86e4c1f6af6def7/packages/sdk/dist/index.d.mts#L362) |
| <a id="currentlocale"></a> `currentLocale` | `string` | [sdk/dist/index.d.mts:363](https://github.com/venuecms/sdk/blob/dbe1bd3b5606b46905e3e9cba86e4c1f6af6def7/packages/sdk/dist/index.d.mts#L363) |

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
