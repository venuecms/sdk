**@venuecms/sdk-next**

***

# @venuecms/sdk-next

## Configuration

| Function | Description |
| ------ | ------ |
| [setConfig](functions/setConfig.md) | Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead. |

## Sites

| Function | Description |
| ------ | ------ |
| [getSite](functions/getSite.md) | Get the site configured via the siteKey (cached) |
| [getSiteKeyByDomain](functions/getSiteKeyByDomain.md) | Get the siteKey and site id from a domain name. |
| [listSiteDomains](functions/listSiteDomains.md) | - |
| [searchSite](functions/searchSite.md) | Search a site for all content types (cached) |

## Events

| Function | Description |
| ------ | ------ |
| [getEvent](functions/getEvent.md) | Retrieve data for a single event (cached) |
| [getEvents](functions/getEvents.md) | Get a list of events (cached) |

## Pages

| Function | Description |
| ------ | ------ |
| [getPage](functions/getPage.md) | Get a single page using the slug (cached) |
| [getPages](functions/getPages.md) | Get a list of all pages (cached) |

## Profiles

| Function | Description |
| ------ | ------ |
| [getProfile](functions/getProfile.md) | Get a profile (cached) |
| [getProfileEvents](functions/getProfileEvents.md) | Get a listing of events for a profile (cached) |
| [getProfiles](functions/getProfiles.md) | Get a list of profiles (cached) |

## Products

| Function | Description |
| ------ | ------ |
| [getProduct](functions/getProduct.md) | Get a product (cached) |
| [getProducts](functions/getProducts.md) | Get a listing of products (cached) |

## Utilities

| Function | Description |
| ------ | ------ |
| [getLocalizedContent](functions/getLocalizedContent.md) | This function will properly resolve content blocks that are localized. It takes in the array of localized content and returns the proper content to be used in your page. |

## Other

| Name | Description |
| ------ | ------ |
| [NodeHandlers](interfaces/NodeHandlers.md) | - |
| [NodeProps](interfaces/NodeProps.md) | - |
| [RenderNode](interfaces/RenderNode.md) | - |
| [AddCustomDomainData](type-aliases/AddCustomDomainData.md) | - |
| [AddCustomDomainError](type-aliases/AddCustomDomainError.md) | - |
| [AddCustomDomainResponse](type-aliases/AddCustomDomainResponse.md) | - |
| [AddDomainInput](type-aliases/AddDomainInput.md) | - |
| [AddDomainResponse](type-aliases/AddDomainResponse.md) | - |
| [BatchEmail](type-aliases/BatchEmail.md) | - |
| [BatchPagination](type-aliases/BatchPagination.md) | - |
| [BatchSendResult](type-aliases/BatchSendResult.md) | - |
| [ContentStyles](type-aliases/ContentStyles.md) | - |
| [CreateAndSendBatchData](type-aliases/CreateAndSendBatchData.md) | - |
| [CreateAndSendBatchError](type-aliases/CreateAndSendBatchError.md) | - |
| [CreateAndSendBatchResponse](type-aliases/CreateAndSendBatchResponse.md) | - |
| [CreateDraftBatchData](type-aliases/CreateDraftBatchData.md) | - |
| [CreateDraftBatchError](type-aliases/CreateDraftBatchError.md) | - |
| [CreateDraftBatchInput](type-aliases/CreateDraftBatchInput.md) | - |
| [CreateDraftBatchResponse](type-aliases/CreateDraftBatchResponse.md) | - |
| [CustomSchemaData](type-aliases/CustomSchemaData.md) | - |
| [DeleteBatchData](type-aliases/DeleteBatchData.md) | - |
| [DeleteBatchError](type-aliases/DeleteBatchError.md) | - |
| [DeleteBatchResponse](type-aliases/DeleteBatchResponse.md) | - |
| [DnsRecord](type-aliases/DnsRecord.md) | - |
| [DomainStatus](type-aliases/DomainStatus.md) | - |
| [DraftBatchResult](type-aliases/DraftBatchResult.md) | - |
| [Email](type-aliases/Email.md) | - |
| [EmailBatch](type-aliases/EmailBatch.md) | - |
| [EmailBatchDetail](type-aliases/EmailBatchDetail.md) | - |
| [EmailBatchesResponse](type-aliases/EmailBatchesResponse.md) | - |
| [EmailConfig](type-aliases/EmailConfig.md) | - |
| [EmailConfigInput](type-aliases/EmailConfigInput.md) | - |
| [EmailsResponse](type-aliases/EmailsResponse.md) | - |
| [EmailStats](type-aliases/EmailStats.md) | - |
| [Event](type-aliases/Event.md) | - |
| [GetDomainStatusData](type-aliases/GetDomainStatusData.md) | - |
| [GetDomainStatusError](type-aliases/GetDomainStatusError.md) | - |
| [GetDomainStatusResponse](type-aliases/GetDomainStatusResponse.md) | - |
| [GetEmailBatchData](type-aliases/GetEmailBatchData.md) | - |
| [GetEmailBatchError](type-aliases/GetEmailBatchError.md) | - |
| [GetEmailBatchesData](type-aliases/GetEmailBatchesData.md) | - |
| [GetEmailBatchesError](type-aliases/GetEmailBatchesError.md) | - |
| [GetEmailBatchesResponse](type-aliases/GetEmailBatchesResponse.md) | - |
| [GetEmailBatchResponse](type-aliases/GetEmailBatchResponse.md) | - |
| [GetEmailByIdData](type-aliases/GetEmailByIdData.md) | - |
| [GetEmailByIdError](type-aliases/GetEmailByIdError.md) | - |
| [GetEmailByIdResponse](type-aliases/GetEmailByIdResponse.md) | - |
| [GetEmailConfigData](type-aliases/GetEmailConfigData.md) | - |
| [GetEmailConfigError](type-aliases/GetEmailConfigError.md) | - |
| [GetEmailConfigResponse](type-aliases/GetEmailConfigResponse.md) | - |
| [GetEmailsData](type-aliases/GetEmailsData.md) | - |
| [GetEmailsError](type-aliases/GetEmailsError.md) | - |
| [GetEmailsResponse](type-aliases/GetEmailsResponse.md) | - |
| [GetEmailStatsData](type-aliases/GetEmailStatsData.md) | - |
| [GetEmailStatsError](type-aliases/GetEmailStatsError.md) | - |
| [GetEmailStatsResponse](type-aliases/GetEmailStatsResponse.md) | - |
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
| [GetSiteByDomainData](type-aliases/GetSiteByDomainData.md) | - |
| [GetSiteByDomainError](type-aliases/GetSiteByDomainError.md) | - |
| [GetSiteByDomainResponse](type-aliases/GetSiteByDomainResponse.md) | - |
| [GetSiteData](type-aliases/GetSiteData.md) | - |
| [GetSiteError](type-aliases/GetSiteError.md) | - |
| [GetSiteResponse](type-aliases/GetSiteResponse.md) | - |
| [ListSiteDomainsData](type-aliases/ListSiteDomainsData.md) | - |
| [ListSiteDomainsError](type-aliases/ListSiteDomainsError.md) | - |
| [ListSiteDomainsResponse](type-aliases/ListSiteDomainsResponse.md) | - |
| [LocalizedContent](type-aliases/LocalizedContent.md) | - |
| [Location](type-aliases/Location.md) | - |
| [MediaItem](type-aliases/MediaItem.md) | - |
| [NodeHandler](type-aliases/NodeHandler.md) | - |
| [Page](type-aliases/Page.md) | - |
| [Pagination](type-aliases/Pagination.md) | - |
| [Product](type-aliases/Product.md) | - |
| [ProductVariant](type-aliases/ProductVariant.md) | - |
| [Profile](type-aliases/Profile.md) | - |
| [publishState](type-aliases/publishState.md) | - |
| [Recipient](type-aliases/Recipient.md) | - |
| [recordType](type-aliases/recordType.md) | - |
| [RemoveCustomDomainData](type-aliases/RemoveCustomDomainData.md) | - |
| [RemoveCustomDomainError](type-aliases/RemoveCustomDomainError.md) | - |
| [RemoveCustomDomainResponse](type-aliases/RemoveCustomDomainResponse.md) | - |
| [SearchSiteData](type-aliases/SearchSiteData.md) | - |
| [SearchSiteError](type-aliases/SearchSiteError.md) | - |
| [SearchSiteResponse](type-aliases/SearchSiteResponse.md) | - |
| [SearchSiteResults](type-aliases/SearchSiteResults.md) | - |
| [SendBatchData](type-aliases/SendBatchData.md) | - |
| [SendBatchError](type-aliases/SendBatchError.md) | - |
| [SendBatchResponse](type-aliases/SendBatchResponse.md) | - |
| [Site](type-aliases/Site.md) | - |
| [SiteSettings](type-aliases/SiteSettings.md) | - |
| [status](type-aliases/status.md) | - |
| [status2](type-aliases/status2.md) | - |
| [status3](type-aliases/status3.md) | - |
| [status4](type-aliases/status4.md) | - |
| [Tag](type-aliases/Tag.md) | - |
| [TicketOnEvent](type-aliases/TicketOnEvent.md) | - |
| [UpdateDraftBatchData](type-aliases/UpdateDraftBatchData.md) | - |
| [UpdateDraftBatchError](type-aliases/UpdateDraftBatchError.md) | - |
| [UpdateDraftBatchInput](type-aliases/UpdateDraftBatchInput.md) | - |
| [UpdateDraftBatchResponse](type-aliases/UpdateDraftBatchResponse.md) | - |
| [UpdateEmailConfigData](type-aliases/UpdateEmailConfigData.md) | - |
| [UpdateEmailConfigError](type-aliases/UpdateEmailConfigError.md) | - |
| [UpdateEmailConfigResponse](type-aliases/UpdateEmailConfigResponse.md) | - |
| [VerifyDomainData](type-aliases/VerifyDomainData.md) | - |
| [VerifyDomainError](type-aliases/VerifyDomainError.md) | - |
| [VerifyDomainResponse](type-aliases/VerifyDomainResponse.md) | - |
| [WebSite](type-aliases/WebSite.md) | - |
| [cache](functions/cache.md) | - |
| [VenueContent](functions/VenueContent.md) | - |
| [VenueImage](functions/VenueImage.md) | - |
