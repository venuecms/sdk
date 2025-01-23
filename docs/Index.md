**@venuecms/sdk**

***

# @venuecms/sdk

## Configuration

| Function | Description |
| ------ | ------ |
| [setConfig](functions/setConfig.md) | Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead. |

## Sites

| Function | Description |
| ------ | ------ |
| [getSite](functions/getSite.md) | Get the site configured via the siteKey |

## Events

| Function | Description |
| ------ | ------ |
| [getEvent](functions/getEvent.md) | Retrieve data for a single event |
| [getEvents](functions/getEvents.md) | - |

## Pages

| Function | Description |
| ------ | ------ |
| [getPage](functions/getPage.md) | Get a single page using the slug |
| [getPages](functions/getPages.md) | Get a list of all pages |

## Profiles

| Function | Description |
| ------ | ------ |
| [getProfile](functions/getProfile.md) | Get a profile |
| [getProfileEvents](functions/getProfileEvents.md) | Get a listing of events for a profile |
| [getProfiles](functions/getProfiles.md) | Get a list of profiles |

## Products

| Function | Description |
| ------ | ------ |
| [getProduct](functions/getProduct.md) | Get a product |
| [getProducts](functions/getProducts.md) | Get a listing of products |

## Utilities

| Function | Description |
| ------ | ------ |
| [getLocalizedContent](functions/getLocalizedContent.md) | This function will properly resolve content blocks that are localized. It takes in the array of localized content and returns the proper content to be used in your page. |

## Other

| Type alias | Description |
| ------ | ------ |
| [Event](type-aliases/Event.md) | - |
| [GetEventData](type-aliases/GetEventData.md) | - |
| [GetEventError](type-aliases/GetEventError.md) | - |
| [GetEventResponse](type-aliases/GetEventResponse.md) | - |
| [GetEventsData](type-aliases/GetEventsData.md) | - |
| [GetEventsError](type-aliases/GetEventsError.md) | - |
| [GetEventsResponse](type-aliases/GetEventsResponse.md) | - |
| [GetPageData](type-aliases/GetPageData.md) | - |
| [GetPageError](type-aliases/GetPageError.md) | - |
| [GetPageResponse](type-aliases/GetPageResponse.md) | - |
| [GetPagesData](type-aliases/GetPagesData.md) | - |
| [GetPagesError](type-aliases/GetPagesError.md) | - |
| [GetPagesResponse](type-aliases/GetPagesResponse.md) | - |
| [GetProductData](type-aliases/GetProductData.md) | - |
| [GetProductError](type-aliases/GetProductError.md) | - |
| [GetProductResponse](type-aliases/GetProductResponse.md) | - |
| [GetProductsData](type-aliases/GetProductsData.md) | - |
| [GetProductsError](type-aliases/GetProductsError.md) | - |
| [GetProductsResponse](type-aliases/GetProductsResponse.md) | - |
| [GetProfileData](type-aliases/GetProfileData.md) | - |
| [GetProfileError](type-aliases/GetProfileError.md) | - |
| [GetProfileEventsData](type-aliases/GetProfileEventsData.md) | - |
| [GetProfileEventsError](type-aliases/GetProfileEventsError.md) | - |
| [GetProfileEventsResponse](type-aliases/GetProfileEventsResponse.md) | - |
| [GetProfileResponse](type-aliases/GetProfileResponse.md) | - |
| [GetProfilesData](type-aliases/GetProfilesData.md) | - |
| [GetProfilesError](type-aliases/GetProfilesError.md) | - |
| [GetProfilesResponse](type-aliases/GetProfilesResponse.md) | - |
| [GetSiteData](type-aliases/GetSiteData.md) | - |
| [GetSiteError](type-aliases/GetSiteError.md) | - |
| [GetSiteResponse](type-aliases/GetSiteResponse.md) | - |
| [LocalizedContent](type-aliases/LocalizedContent.md) | - |
| [Location](type-aliases/Location.md) | - |
| [MediaItem](type-aliases/MediaItem.md) | - |
| [Page](type-aliases/Page.md) | - |
| [Product](type-aliases/Product.md) | - |
| [ProductVariant](type-aliases/ProductVariant.md) | - |
| [Profile](type-aliases/Profile.md) | - |
| [publishState](type-aliases/publishState.md) | - |
| [recordType](type-aliases/recordType.md) | - |
| [Site](type-aliases/Site.md) | - |
| [SiteSettings](type-aliases/SiteSettings.md) | - |
| [TicketOnEvent](type-aliases/TicketOnEvent.md) | - |
