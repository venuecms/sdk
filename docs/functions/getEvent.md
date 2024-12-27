[**@venuecms/sdk**](../Index.md)

***

[@venuecms/sdk](../Index.md) / getEvent

# Function: getEvent()

```ts
function getEvent(params): Promise<
  | {
  data: undefined;
  error: unknown;
 }
  | {
  data: Event;
  error: undefined;
} & object>
```

Retrieve data for a single event

## Parameters

### params

`Omit`\<\{
  `siteKey`: `string`;
  `slug`: `string`;
 \}, `"siteKey"`\>

## Returns

`Promise`\<
  \| \{
  `data`: `undefined`;
  `error`: `unknown`;
 \}
  \| \{
  `data`: [`Event`](../type-aliases/Event.md);
  `error`: `undefined`;
 \} & `object`\>

## Example

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
```

## Defined in

[src/createClient.ts:79](https://github.com/venuecms/sdk/blob/9ae98ad19cd49271fbec864143c1fdaa80d0b742/src/createClient.ts#L79)
