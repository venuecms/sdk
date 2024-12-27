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
const { localizedContent, location, artists } = event;

// Get the content in a localized form (usually locale is pulled from somewhere like your url params)
const { content } = getLocalizedContent(event?.localizedContent, locale);

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

[src/createClient.ts:73](https://github.com/venuecms/sdk/blob/8a6c84653ba60be7399cb6d469978abeb0f847f0/src/createClient.ts#L73)
