[**@venuecms/sdk**](../Index.md)

***

# Function: getLocalizedContent()

```ts
function getLocalizedContent(localizedContent, locale): object
```

This function will properly resolve content blocks that are localized.
It takes in the array of localized content and returns the proper content
to be used in your page.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `localizedContent` | [`LocalizedContent`](../type-aliases/LocalizedContent.md)[] |
| `locale` | `string` |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `content` | [`LocalizedContent`](../type-aliases/LocalizedContent.md) | [src/utils/content.ts:34](https://github.com/venuecms/sdk/blob/e006ed15657b6995aa87e1eb9272ec151fbf86f1/src/utils/content.ts#L34) |
| `currentLocale` | `string` | [src/utils/content.ts:34](https://github.com/venuecms/sdk/blob/e006ed15657b6995aa87e1eb9272ec151fbf86f1/src/utils/content.ts#L34) |

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

## Defined in

[src/utils/content.ts:31](https://github.com/venuecms/sdk/blob/e006ed15657b6995aa87e1eb9272ec151fbf86f1/src/utils/content.ts#L31)
