# <VenueContent />
Allows you render content returned from Venue CMS in a headless way. All styles will need to be defined by you in a separate object as the renderer won't add styles by default.

Example:
```tsx

import { VenueContent, getLocalizedContent } from "@venuecms/sdk-next";

// create an object of classes to be applied to specific elements 
// and pass it to the renderer
export const renderedStyles = {
  p: "text-primary text-sm",
  h2: "text-xl text-secondary",
  h3: "text-sm text-secondary",
  ol: "list-decimal pl-8",
  ul: "list-disc pl-4",
  a: "underline text-primary text-sm font-medium",
};

export const Event = ({ event, locale }: { event: VenueEvent; locale: 'en' | 'sv' }) => {
  // retrieve localized content using the utility class from the SDK
  const { content } = getLocalizedContent(event?.localizedContent, locale);

  // render the rich content and apply your styles
  return (
    <VenueContent
    className="flex flex-col gap-6 sm:pr-32"
    content={content}
    contentStyles={renderedStyles}
    />
  );
}
```
