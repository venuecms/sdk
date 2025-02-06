When rendering images returned from Venue you can use this component to render a Next Image that will utilize metadata attached to the image as well as handling sizing parameter. This also includes any Image center positioning that might be set from the backend.
Example:
```tsx

import { VenueImage } from "@venuecms/sdk-next";

export const Event = ({ event }: { event: VenueEvent }) => {
  return (
    <div>
      <VenueImage image={event.image} className="w-full" />
    </div>
  );
}
```

## Props:

| Name | Type |  Description |
| --- | --- | --- |
| className? | string | Classes that wil be passed to the underlying element |
| image? | Partial\<[MediaItem](https://docs.venuecms.com/developers/sdk/reference/type-aliases/mediaitem)\> | A MediaItem that is returned from Venue CMS |
| aspect? | 'square'\|'video' | Aspect for constraining the image |
| props? | [NextImage](https://nextjs.org/docs/pages/api-reference/components/image) props | Next Image props that will be passed to the underlying Next Image component |
