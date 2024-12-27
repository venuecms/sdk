[**@venuecms/sdk**](../README.md)

***

[@venuecms/sdk](../README.md) / getEvent

# Function: getEvent()

> **getEvent**(`params`): `Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`Event`](../type-aliases/Event.md); `error`: `undefined`; \} & `object`\>

## Parameters

### params

`Omit`\<\{ `siteKey`: `string`; `slug`: `string`; \}, `"siteKey"`\>

## Returns

`Promise`\<\{ `data`: `undefined`; `error`: `unknown`; \} \| \{ `data`: [`Event`](../type-aliases/Event.md); `error`: `undefined`; \} & `object`\>

## Example

Retrieving data for a single event using the slug
```typescript
import { getEvent } from "@venuecms/sdk";
import { ContentRender, type RenderNode } from "@/lib/utils/renderer";

const { data: event } = await getEvent({ slug });

// If the event is not found, you should do something like a 404
if (!event) {
  notFound();
}
const { localizedContent, location, artists } = event;

// Get the content in a localized form (usually locale is pulled from somewhere like your url params)
const { content } = getLocalizedContent(event.localizedContent, locale);

// Render content for the event
return (
  <div>
   {(content.contentJSON?.content as Array<RenderNode>).map((node) => (
      <ContentRender classes={renderedStyles} node={node} />
    ))}
  </div>
);
 * ```

## Defined in

[src/createClient.ts:78](https://github.com/venuecms/sdk/blob/a3bf0842ec96c76796c1e38dad50663c7f41ebc3/src/createClient.ts#L78)
