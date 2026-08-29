import { RequestOptions } from '@hey-api/client-fetch';

type AccessRole = {
    id: string;
    name: (string) | null;
};
type AddDomainInput = {
    domain: string;
};
type AddDomainResponse = {
    domain: string;
    records: Array<DnsRecord>;
};
type AddImageResponse = {
    [key: string]: unknown;
};
type AddImageToNoteInput = {
    fileName: string;
    mimeType: string;
    size: number;
    contentHash?: string;
    metadata?: {
        [key: string]: unknown;
    };
    isMainImage?: boolean;
    title?: string;
    caption?: string;
    credit?: string;
    altText?: string;
};
type AddImageToNoteResponse = {
    uploadUrl: (string) | null;
    url?: (string) | null;
};
type AddImageToUserInput = {
    fileName: string;
    mimeType: string;
    size: number;
    contentHash?: string;
    metadata?: {
        [key: string]: unknown;
    };
    title?: string;
    caption?: string;
    credit?: string;
    altText?: string;
    isMainImage?: boolean;
};
type AddLocaleInput = {
    locale: string;
};
type AddLocaleToLocationInput = {
    locale: string;
};
type AddLocaleToPageInput = {
    locale: string;
};
type AddLocaleToProductInput = {
    locale: string;
};
type AddMediaItemToCollectionInput = {
    mediaItemId: string;
};
type AddPageImageResponse = {
    [key: string]: unknown;
};
type AddParentToPageInput = {
    parentId: string;
};
type AddProductImageResponse = {
    [key: string]: unknown;
};
type AddProfileToEventInput = {
    profileId: string;
};
type AddProfileToPageInput = {
    profileId: string;
};
type AddProfileToProductInput = {
    profileId: string;
};
type AddRoleToMediaCollectionInput = {
    roleId: string;
};
type AddRoleToMediaItemInput = {
    roleId: string;
};
type AddRoleToPageInput = {
    roleId: string;
};
type AddRoleToUserInput = {
    roleId: string;
};
type AddUserToProfileInput = {
    userId: string;
};
type AtprotoOauthDisconnectResponse = {
    success: boolean;
};
type AtprotoOauthStartInput = {
    /**
     * ATproto handle or DID to start OAuth for
     */
    handle?: string;
};
type AtprotoOauthStartResponse = {
    authorizeUrl: string;
};
type AtprotoOauthStatusResponse = {
    connected: boolean;
    did: (string) | null;
    handle: (string) | null;
    pdsUrl: (string) | null;
    needsReauth: boolean;
};
type AtprotoSettingsInput = {
    publishEnabled: boolean;
};
type AtprotoSettingsResponse = {
    publishEnabled: boolean;
};
type AttacheventsToTagInput = {
    eventId: string;
};
type AttachpagesToTagInput = {
    pageId: string;
};
type AttachproductsToTagInput = {
    productId: string;
};
type AttachprofilesToTagInput = {
    profileId: string;
};
type AttachTagRelationResponse = {
    record: {
        [key: string]: unknown;
    };
};
type BatchEmail = {
    id: string;
    to: string;
    subject: (string) | null;
    status: 'PENDING' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED';
    createdAt: string;
    sentAt: (string) | null;
    errorMsg: (string) | null;
};
type status = 'PENDING' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED';
type BatchPagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};
type BatchSendResult = {
    batchId: string;
    status: 'COMPLETED';
    totalCount: number;
    sentCount: number;
    failedCount: number;
    results: Array<{
        emailId: string;
        to: string;
        status: 'PENDING' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED';
        resendId?: string;
        error?: string;
    }>;
};
type status2 = 'COMPLETED';
type BustCacheResponse = {
    results?: Array<{
        key: string;
        status: number;
    }>;
    error?: string;
};
type CreateDraftBatchInput = {
    name?: string;
    templateKey?: string;
    subject?: string;
    recipients: Array<Recipient>;
};
type CreateEventInput = {
    title?: string;
    startDate?: string;
    endDate?: string;
    content?: string;
    locale?: string;
};
type CreateLivestreamInput = {
    title?: string;
    roleIds?: Array<(string)>;
};
type CreateLocationInput = {
    [key: string]: unknown;
};
type CreateMediaCollectionInput = {
    name: string;
    description?: string;
    entityType?: 'event' | 'profile' | 'page' | 'location' | 'product';
    entityId?: string;
};
type entityType = 'event' | 'profile' | 'page' | 'location' | 'product';
type CreatePageInput = {
    parentId?: string;
    date?: string;
    type?: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'EVENTLIST' | 'PROFILELIST' | 'PRODUCTLIST' | 'LINK';
};
type type = 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'EVENTLIST' | 'PROFILELIST' | 'PRODUCTLIST' | 'LINK';
type CreateProfileInput = {
    title?: string;
    content?: string;
    shortContent?: string;
    eventId?: string;
};
type CreateSimulcastTargetInput = {
    label: string;
    rtmpUrl: string;
    streamKey: string;
    ephemeral?: boolean;
};
type CreateSiteApiKeyInput = {
    name: string;
};
type CreateSiteApiKeyResponse = {
    key: string;
    record: SiteApiKey;
};
type CreateTagInput = {
    tag: string;
};
type CreateTicketInput = {
    name?: string;
    price?: (number) | null;
    currency?: (string) | null;
    localizedContent?: Array<{
        locale: string;
        title?: (string) | null;
        content?: (string) | null;
    }>;
    roleIds?: Array<(string)>;
};
type CreateUserInput = {
    email: string;
    name?: string;
};
type CustomSchemaData = {
    data?: unknown;
    customSchemaId?: (string) | null;
};
type DeleteResponse = {
    ok: boolean;
};
type DetachMediaItemInput = {
    entityType: 'event' | 'profile' | 'page' | 'location' | 'product';
    entityId: string;
    mediaItemId: string;
};
type DetachMediaItemResponse = {
    success: boolean;
};
type DnsRecord = {
    type: string;
    name: string;
    value: string;
    ttl?: string;
    priority?: number;
    status?: string;
};
type DomainStatus = {
    verified: boolean;
    status?: string;
    records?: Array<DnsRecord>;
} | null;
type DraftBatchResult = {
    batchId: string;
    status: 'DRAFT';
    recipientCount: number;
};
type status3 = 'DRAFT';
type Email = {
    id: string;
    siteId: string;
    batchId: string;
    createdAt: string;
    to: string;
    from: (string) | null;
    subject: (string) | null;
    templateKey: (string) | null;
    status: 'PENDING' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED';
    sentAt: (string) | null;
    resendId: (string) | null;
    errorMsg: (string) | null;
    batch: {
        id: string;
        name: (string) | null;
    } | null;
};
type EmailBatch = {
    id: string;
    siteId: string;
    createdAt: string;
    name: (string) | null;
    templateKey: (string) | null;
    subject: (string) | null;
    status: 'DRAFT' | 'SENDING' | 'COMPLETED';
    totalCount: number;
    sentCount: number;
    failedCount: number;
    sentAt: (string) | null;
    completedAt: (string) | null;
};
type status4 = 'DRAFT' | 'SENDING' | 'COMPLETED';
type EmailBatchDetail = EmailBatch & {
    recipients?: Array<Recipient>;
    emails?: Array<BatchEmail>;
};
type EmailBatchesResponse = {
    batches: Array<EmailBatch>;
    pagination: BatchPagination;
};
type EmailConfig = {
    id: string;
    siteId: string;
    fromEmail: (string) | null;
    fromName: (string) | null;
    replyToEmail: (string) | null;
    customDomain: (string) | null;
    domainVerified: boolean;
    createdAt: string;
    updatedAt: string;
} | null;
type EmailConfigInput = {
    fromEmail?: (string) | null;
    fromName?: (string) | null;
    replyToEmail?: (string) | null;
};
type EmailsResponse = {
    emails: Array<Email>;
    pagination: Pagination;
};
type EmailStats = {
    total: number;
    byStatus: {
        [key: string]: (number);
    };
    period: {
        days: number;
        since: string;
    };
};
type EntityMediaCount = {
    count: number;
};
type EntityMediaItems = {
    records: Array<{
        mediaItemId: string;
        mediaItem?: unknown;
    }>;
    count: number;
};
type Event = {
    id: string;
    siteId: string;
    description?: (string) | null;
    slug: string;
    image?: MediaItem;
    startDate: (string);
    endDate: (string);
    hasTime: boolean;
    publishState: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
    location?: LocationSlim;
    artists: Array<{
        profile: ProfileSlim;
    }>;
    tickets?: Array<TicketOnEvent>;
    tags?: Array<Tag>;
    custom?: Array<CustomSchemaData>;
    localizedContent: Array<LocalizedContent>;
    relations?: EventRelations;
    jsonLd?: {
        [key: string]: unknown;
    } | null;
    ogImageUrl?: (string) | null;
};
type publishState = 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
type EventDates = {
    /**
     * Array of unique event dates. Format depends on interval: day (YYYY-MM-DD), month (YYYY-MM), or year (YYYY)
     */
    dates: Array<(string)>;
    /**
     * Array of unique years that have events
     */
    years: Array<(number)>;
};
type EventProfiles = {
    artists: Array<unknown>;
};
type EventRecord = {
    id: string;
    siteId: string;
};
type EventReference = {
    id: string;
    slug: string;
    publishState?: string;
    startDate?: (string) | null;
    endDate?: (string) | null;
    localizedContent: Array<LocalizedContent>;
    image?: (MediaItem & unknown);
};
type EventRelationInput = {
    relationType: 'CHILD_OF';
    sourceId?: string;
    targetId?: string;
};
type relationType = 'CHILD_OF';
type EventRelations = {
    parents?: Array<EventReference>;
    children?: Array<EventReference>;
};
type EventTagsResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type GoogleOauthDisconnectResponse = {
    success: boolean;
};
type GoogleOauthStartResponse = {
    authorizeUrl: string;
};
type GoogleOauthStatusResponse = {
    connected: boolean;
    channelId: (string) | null;
    channelTitle: (string) | null;
    needsReauth: boolean;
};
type ImageDescription = {
    description: (string) | null;
};
type ImageDescriptionInput = {
    imageUrl: string;
};
type LinkPreview = {
    url: string;
    meta?: {
        title?: string;
        description?: string;
        author?: string;
        site?: string;
    };
    html?: string;
    thumbnail_url?: string;
    provider_name?: string;
    provider_url?: string;
    error?: string;
};
type LivestreamResponse = {
    mediaItem?: unknown;
    streamKey: string;
    rtmpUrl: string;
    playbackPolicy: 'public' | 'signed';
    muxLiveStreamId: string;
    muxPlaybackId: string;
    liveStatus?: 'idle' | 'active' | 'disabled';
};
type playbackPolicy = 'public' | 'signed';
type liveStatus = 'idle' | 'active' | 'disabled';
type LocalizedContent = {
    siteId: string;
    locale: string;
    title?: (string) | null;
    content?: (string) | null;
    shortContent?: (string) | null;
    extraContent?: (string) | null;
    excerpt?: (string) | null;
    metaTitle?: (string) | null;
    metaDescription?: (string) | null;
    keywords?: (string) | null;
    contentJSON?: {
        [key: string]: unknown;
    } | null;
};
type Location = {
    id: string;
    siteId: string;
};
type LocationSlim = {
    siteId: string;
    image?: MediaItem;
    address?: (string) | null;
    address2?: (string) | null;
    state?: (string) | null;
    region?: (string) | null;
    city?: (string) | null;
    zipCode?: (string) | null;
    country?: (string) | null;
    externalLink?: (string) | null;
    mapLink?: (string) | null;
    lat?: (number) | null;
    lng?: (number) | null;
    tags?: Array<Tag>;
    localizedContent: Array<LocalizedContent>;
    isDefault?: boolean;
};
type LocationsListResponse = {
    records: Array<Location>;
    count: number;
};
type LocationTagsResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type MediaCollection = {
    id: string;
    siteId: string;
    name: string;
    description: (string) | null;
    entityType: (string) | null;
    entityId: (string) | null;
    createdAt: string;
    updatedAt: string;
    items?: Array<{
        mediaItemId: string;
        collectionId: string;
        order: number;
        mediaItem?: unknown;
    }>;
    roles?: Array<MediaCollectionRole>;
};
type MediaCollectionRole = {
    mediaCollectionId: string;
    accessRoleId: string;
    accessRole: {
        id: string;
        name: (string) | null;
    };
};
type MediaDownload = {
    id: string;
    label: string;
    kind: 'rendition' | 'original';
    ext: string;
    status: 'ready' | 'preparing' | 'errored' | 'unavailable';
    url: (string) | null;
    width?: number;
    height?: number;
    filesize?: number;
};
type kind = 'rendition' | 'original';
type status5 = 'ready' | 'preparing' | 'errored' | 'unavailable';
type MediaDownloads = {
    downloads: Array<MediaDownload>;
};
type MediaItem = {
    siteId: string;
    uploaded: boolean;
    inline: boolean;
    url?: (string) | null;
    mimeType?: (string) | null;
    size: string;
    width?: (number) | null;
    height?: (number) | null;
    duration?: (number) | null;
    metadata?: {
        [key: string]: unknown;
    } | null;
    title?: (string) | null;
    caption?: (string) | null;
    credit?: (string) | null;
    altText?: (string) | null;
};
type MediaItemRole = {
    mediaItemId: string;
    accessRoleId: string;
    accessRole: {
        id: string;
        name: (string) | null;
    };
};
type MediaItemUpload = {
    fileName: string;
    mimeType: string;
    size: number;
};
type MediaOriginalDownload = {
    original: MediaDownload;
};
type MembershipSubscriber = {
    id: string;
    siteId: string;
};
type MembershipTier = {
    id: string;
    siteId: string;
};
type MetaOauthDisconnectResponse = {
    success: boolean;
};
type MetaOauthStartResponse = {
    authorizeUrl: string;
};
type MetaOauthStatusResponse = {
    connected: boolean;
    pageId: (string) | null;
    pageName: (string) | null;
    needsReauth: boolean;
};
type MfaEnroll = {
    factorId: string;
    qrCode: string;
    secret: string;
    uri: string;
};
type MfaEnrollInput = {
    friendlyName?: string;
};
type MfaFactorsList = {
    records: Array<{
        id: string;
        friendlyName: (string) | null;
        factorType: string;
        status: string;
    }>;
    count: number;
};
type MfaOk = {
    success: boolean;
};
type MfaUnenrollInput = {
    factorId: string;
};
type MfaVerifyInput = {
    factorId: string;
    code: string;
};
type NewsDates = {
    /**
     * Array of unique news dates. Format depends on interval: day (YYYY-MM-DD), month (YYYY-MM), or year (YYYY)
     */
    dates: Array<(string)>;
    /**
     * Array of unique years that have news articles
     */
    years: Array<(number)>;
};
type Note = {
    id: string;
};
type Ok = {
    success: boolean;
};
type Page = {
    id: string;
    order: number;
    slug: string;
    featured: boolean;
    featuredExpiration?: (string | unknown);
    date?: (string | unknown);
    type: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'EVENTLIST' | 'PROFILELIST' | 'PRODUCTLIST' | 'LINK';
    linkUrl?: (string) | null;
    openInNewTab: boolean;
    parentId?: (string) | null;
    siteId: string;
    image?: MediaItem;
    parent?: {
        id: string;
        siteId: string;
        createdAt: string;
        updatedAt: string;
        recordType: 'SOURCE' | 'PUBLISHED' | 'REVISION';
        revisionId?: (number) | null;
        publishState: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
        source?: (string) | null;
        publishedId?: (string) | null;
        dirty: boolean;
        order: number;
        visible: boolean;
        slug: string;
        featured: boolean;
        featuredExpiration?: (string) | null;
        date?: (string) | null;
        type: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'EVENTLIST' | 'PROFILELIST' | 'PRODUCTLIST' | 'LINK';
        linkUrl?: (string) | null;
        openInNewTab: boolean;
        imageId?: (string) | null;
        userId?: (string) | null;
        parentId?: (string) | null;
    };
    fullPath?: (string) | null;
    roles: Array<{
        pageId: string;
        accessRoleId: string;
        accessRole: {
            id: string;
            siteId: string;
            createdAt: string;
            updatedAt: string;
            name: string;
            description?: (string) | null;
        };
    }>;
    custom?: Array<CustomSchemaData>;
    tags?: Array<Tag>;
    localizedContent: Array<LocalizedContent>;
    artists?: Array<{
        profile: ProfileSlim;
    }>;
};
type recordType = 'SOURCE' | 'PUBLISHED' | 'REVISION';
type PageMediaItemUpload = {
    fileName: string;
    mimeType: string;
    size: number;
};
type PagesListResponse = {
    records: Array<(Page & {
        id: string;
        siteId: string;
    })>;
    count: number;
};
type PageTagsResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type Pagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
};
type PlaybackToken = {
    token: (string) | null;
};
type Product = {
    siteId: string;
    slug: string;
    order: number;
    featured: boolean;
    featuredExpiration?: (string | unknown);
    author?: (string) | null;
    tags?: Array<Tag>;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    artists: Array<{
        profile: ProfileSlim;
    }>;
    variants?: Array<ProductVariant>;
    custom?: Array<CustomSchemaData>;
};
type ProductMediaItemUpload = {
    fileName: string;
    mimeType: string;
    size: number;
    isMainImage?: boolean;
    contentHash?: string;
    metadata?: {
        width: number;
        height: number;
    };
};
type ProductsListResponse = {
    records: Array<(Product & {
        id: string;
        siteId: string;
    })>;
    count: number;
};
type ProductTagsResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type ProductVariant = {
    id: string;
    siteId: string;
    order: number;
    price: number;
    currency?: (string) | null;
    quantity: number;
    externalLink?: (string) | null;
    catalogID?: (string) | null;
    publicationDate?: (string | unknown);
    productTypeId?: (string) | null;
    productId?: (string) | null;
    image?: (MediaItem & unknown);
    productType?: {
        id: string;
        type: string;
    } | null;
};
type Profile = {
    siteId: string;
    slug: string;
    tags?: Array<Tag>;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    custom?: Array<CustomSchemaData>;
};
type ProfileConnectedRecords = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type ProfilePreview = {
    siteId: string;
    slug: string;
    tags?: Array<Tag>;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    custom?: Array<CustomSchemaData>;
};
type ProfileSlim = {
    siteId: string;
    slug: string;
    tags?: Array<Tag>;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    custom?: Array<CustomSchemaData>;
};
type ProfilesListResponse = {
    records: Array<(Profile & {
        id: string;
        siteId: string;
    })>;
    count: number;
};
type ProfileTagsResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type PublicLinkPreview = {
    url: string;
    meta?: {
        title?: string;
        description?: string;
        author?: string;
        site?: string;
    };
    html?: string;
    thumbnail_url?: string;
    provider_name?: string;
    provider_url?: string;
    error?: string;
};
type PublishState = {
    publishState?: unknown;
};
type PublishStateResponse = {
    publishState: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
};
type Recipient = {
    email: string;
    subject?: string;
    variables?: {
        [key: string]: unknown;
    };
    metadata?: {
        [key: string]: unknown;
    };
};
type RemoveLocationImageInput = {
    isMainImage?: boolean;
};
type RemovePageImageInput = {
    isMainImage?: boolean;
};
type RemoveProductImageInput = {
    isMainImage?: boolean;
};
type ReorderMediaCollectionItemInput = {
    mediaItemId: string;
    upperNeighbor: (string) | null;
};
type ReorderProductInput = {
    upperNeighbor: (string) | null;
};
type ReorderVariantInput = {
    variantId: string;
    upperNeighbor?: string;
};
type RolesListResponse = {
    records: Array<AccessRole>;
    count: number;
};
type SearchAllSiteResults = {
    records: Array<{
        id: string;
        type: 'event' | 'page' | 'profile' | 'product';
        slug: string;
        siteId: string;
        image?: (MediaItem & unknown);
        localizedContent: Array<{
            locale: string;
            title?: (string) | null;
            shortContent?: (string) | null;
            content?: (string) | null;
        }>;
        startDate?: (string) | null;
        endDate?: (string) | null;
        similarity: number;
    }>;
};
type SearchSiteResults = {
    events: Array<{
        id: string;
        image?: (MediaItem & unknown);
        localizedContent: Array<{
            locale: string;
            title?: (string) | null;
            shortContent?: (string) | null;
            content?: (string) | null;
        }>;
        siteId: string;
        slug: string;
    }>;
    pages: Array<{
        id: string;
        image?: (MediaItem & unknown);
        localizedContent: Array<{
            locale: string;
            title?: (string) | null;
            shortContent?: (string) | null;
            content?: (string) | null;
        }>;
        siteId: string;
        slug: string;
    }>;
    profiles: Array<{
        id: string;
        image?: (MediaItem & unknown);
        localizedContent: Array<{
            locale: string;
            title?: (string) | null;
            shortContent?: (string) | null;
            content?: (string) | null;
        }>;
        siteId: string;
        slug: string;
    }>;
    products: Array<{
        id: string;
        image?: (MediaItem & unknown);
        localizedContent: Array<{
            locale: string;
            title?: (string) | null;
            shortContent?: (string) | null;
            content?: (string) | null;
        }>;
        siteId: string;
        slug: string;
    }>;
};
type SetOwnerForProfileInput = {
    userId: string;
};
type SimulcastTarget = {
    id: string;
    mediaItemId: string;
    label: string;
    rtmpUrl: string;
    ephemeral: boolean;
    muxSimulcastTargetId: (string) | null;
    createdAt: string;
    updatedAt: string;
};
type SimulcastTargetList = {
    records: Array<SimulcastTarget>;
};
type Site = {
    id: string;
    name?: (string) | null;
    description?: (string) | null;
    defaultLocale?: (string) | null;
    timeZone?: (string) | null;
    image?: MediaItem;
    settings: SiteSettings;
    webSites?: Array<WebSite>;
};
type SiteApiKey = {
    id: string;
    name: string;
    keyPrefix: string;
    createdAt: string;
    lastUsedAt: (string) | null;
};
type SiteApiKeysListResponse = {
    records: Array<SiteApiKey>;
    count: number;
};
type SiteApiKeySuccess = {
    success: boolean;
};
type SiteSettings = {
    locale?: {
        default: string;
        supported: Array<(string)>;
    };
    defaults?: {
        currency?: string;
        event?: {
            location?: string;
        };
    };
    publicSite?: {
        baseUrl?: string;
        template?: {
            id?: string;
            config?: {
                [key: string]: unknown;
            };
            schema?: {
                [key: string]: unknown;
            };
        };
    };
};
type StopLivestreamResponse = {
    mediaItem?: unknown;
    liveStatus: 'idle' | 'active' | 'disabled' | 'completed';
};
type liveStatus2 = 'idle' | 'active' | 'disabled' | 'completed';
type StripeConnectDisconnectSuccess = {
    success: boolean;
};
type Tag = {
    tagId: string;
    tag: {
        id: string;
        siteId: string;
        title: string;
        parentTags?: Array<{
            tagId: string;
            parentTagId: string;
            createdAt: (string);
            parentTag: {
                id: string;
                siteId: string;
                title: string;
            };
        }>;
    };
};
type TagGraphListResponse = {
    records: Array<{
        [key: string]: unknown;
    }>;
};
type TagItemResponse = {
    record: (Tag & {
        id: string;
        title: string;
        siteId: string;
    });
};
type TagListItem = {
    id: string;
    siteId: string;
    title: string;
    parentTags?: Array<{
        tagId: string;
        parentTagId: string;
        createdAt: (string);
        parentTag: {
            id: string;
            siteId: string;
            title: string;
        };
    }>;
};
type TagRelationsResponse = {
    records: {
        [key: string]: unknown;
    };
};
type TagsListResponse = {
    records: Array<{
        tag: {
            id: string;
            title: string;
            siteId: string;
        };
    }>;
    count: number;
};
type Ticket = {
    id: string;
    siteId: string;
};
type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: (string) | null;
    currency?: (string) | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
    order?: number;
};
type TicketRecordResponse = {
    records: Ticket;
};
type TicketsListResponse = {
    records: Array<Ticket>;
    count: number;
};
type TranslatedContent = {
    content?: unknown;
};
type TranslateInput = {
    id: string;
    from: string;
    to: string;
};
type TranslateWebsiteInput = {
    from: string;
    to: string;
};
type Translation = {
    translatedText: (string) | null;
};
type UnpublishPageInput = {
    publishState?: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
};
type UpdateChildTagsInput = {
    childTagIds: Array<(string)>;
};
type UpdatedMediaItem = {
    id: string;
    title?: (string) | null;
    caption?: (string) | null;
    credit?: (string) | null;
    altText?: (string) | null;
};
type UpdateDraftBatchInput = {
    name?: string;
    templateKey?: string;
    subject?: string;
    recipients?: Array<Recipient>;
};
type UpdateEventInput = {
    [key: string]: unknown;
};
type UpdateEventTagsInput = {
    tags: Array<(string)>;
};
type UpdateLocationInput = {
    [key: string]: unknown;
};
type UpdateLocationTagsInput = {
    tags: Array<(string)>;
};
type UpdateMediaCollectionInput = {
    name?: string;
    description?: (string) | null;
};
type UpdateMediaItemInput = {
    title?: (string) | null;
    caption?: (string) | null;
    credit?: (string) | null;
    altText?: (string) | null;
    metadata?: {
        [key: string]: unknown;
    } | null;
};
type UpdateMediaItemOrderInput = {
    entityType: 'event' | 'profile' | 'page' | 'location' | 'product';
    entityId: string;
    mediaItemId: string;
    upperNeighbor: (string) | null;
};
type UpdateMediaItemOrderResponse = {
    itemIds: Array<(string)>;
};
type UpdateNoteInput = {
    [key: string]: unknown;
};
type UpdateNoteOrderInput = {
    upperNeighbor: string;
};
type UpdatePageInput = {
    [key: string]: unknown;
};
type UpdatePageOrderInput = {
    parentId: (string) | null;
    upperNeighbor: (string) | null;
};
type UpdatePageTagsInput = {
    tags: Array<(string)>;
};
type UpdateParentTagsInput = {
    parentTagIds: Array<(string)>;
};
type UpdateProductInput = {
    [key: string]: unknown;
};
type UpdateProductTagsInput = {
    tags: Array<(string)>;
};
type UpdateProfileInput = {
    [key: string]: unknown;
};
type UpdateProfileOrderOnPageInput = {
    upperNeighbor: (string) | null;
};
type UpdateProfileOrderOnProductInput = {
    upperNeighbor: (string) | null;
};
type UpdateProfileTagsInput = {
    tags: Array<(string)>;
};
type UpdateSiteInput = {
    [key: string]: unknown;
};
type UpdateTagInput = {
    title: string;
};
type UpdateTicketInput = {
    name?: string;
    description?: (string) | null;
    price?: number;
    currency?: (string) | null;
    externalLink?: (string) | null;
    localizedContent?: Array<{
        locale: string;
        title?: (string) | null;
        content?: (string) | null;
    }>;
    roleIds?: Array<(string)>;
};
type UpdateUserInput = {
    name?: string;
};
type UpdateUserOnProfileInput = {
    permission: string;
};
type UpdateVariantInput = {
    [key: string]: unknown;
};
type UpdateWebsiteInput = {
    [key: string]: unknown;
};
type User = {
    id: string;
    siteId: string;
};
type UsersListResponse = {
    records: Array<User>;
    count: number;
};
type WebSite = {
    id: string;
    siteId: string;
    customDomain?: (string) | null;
    customSchemaId?: (string) | null;
    config?: {
        [key: string]: unknown;
    } | null;
    image?: (MediaItem & unknown);
    localizedContent?: Array<LocalizedContent> | null;
};
type Website = {
    id: string;
};
type WebsiteTemplatesList = {
    records: Array<{
        id: string;
    }>;
    count: number;
};
type PublicSignInData = {
    body?: {
        email: string;
        password: string;
        captchaToken?: string;
    };
    path: {
        siteKey: string;
    };
};
type PublicSignInResponse = ({
    session: {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
    };
    user: {
        id: string;
        email?: string;
    };
});
type PublicSignInError = ({
    error: string;
});
type PublicSignOutData = {
    path: {
        siteKey: string;
    };
};
type PublicSignOutResponse = ({
    success: boolean;
});
type PublicSignOutError = unknown;
type PublicSignUpData = {
    body?: {
        email: string;
        password: string;
        captchaToken?: string;
    };
    path: {
        siteKey: string;
    };
};
type PublicSignUpResponse = ({
    user: {
        id: string;
        email?: string;
    };
    confirmEmail: boolean;
});
type PublicSignUpError = ({
    error: string;
});
type GetSiteData = {
    path: {
        siteKey: string;
    };
};
type GetSiteResponse = (Site);
type GetSiteError = (unknown);
type GetEventsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        gt?: (number) | null;
        legacyId?: string;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        rootOnly?: (string | Array<(string)>);
        tags?: (string | Array<(string)>);
        upcoming?: (string | Array<(string)>);
    };
};
type GetEventsResponse = ({
    records: Array<Event>;
    count: number;
});
type GetEventsError = unknown;
type GetEventDatesData = {
    path: {
        siteKey: string;
    };
    query?: {
        gt?: (number) | null;
        interval?: 'day' | 'month' | 'year';
        lt?: (number) | null;
        upcoming?: (string | Array<(string)>);
    };
};
type GetEventDatesResponse = (EventDates);
type GetEventDatesError = unknown;
type GetEventData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetEventResponse = (Event);
type GetEventError = (unknown);
type GetNewsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        gt?: (number) | null;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        upcoming?: (string | Array<(string)>);
    };
};
type GetNewsResponse = ({
    records: Array<(Page & {
        parent?: {
            [key: string]: unknown;
        };
    })>;
    count: number;
});
type GetNewsError = unknown;
type GetNewsDatesData = {
    path: {
        siteKey: string;
    };
    query?: {
        gt?: (number) | null;
        interval?: 'day' | 'month' | 'year';
        lt?: (number) | null;
    };
};
type GetNewsDatesResponse = (NewsDates);
type GetNewsDatesError = unknown;
type GetNewsArticleData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetNewsArticleResponse = ((Page & {
    parent?: {
        [key: string]: unknown;
    };
}));
type GetNewsArticleError = (unknown);
type GetPagesData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
    };
};
type GetPagesResponse = ({
    records: Array<(Page & {
        parent?: {
            [key: string]: unknown;
        };
    })>;
    count: number;
});
type GetPagesError = unknown;
type GetPageData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetPageResponse = ((Page & {
    parent?: {
        [key: string]: unknown;
    };
}));
type GetPageError = (unknown);
type GetProfilesData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        type?: 'member';
    };
};
type GetProfilesResponse = ({
    records: Array<Profile>;
    count?: number;
});
type GetProfilesError = unknown;
type GetProfileData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetProfileResponse = (Profile);
type GetProfileError = (unknown);
type GetProfileEventsData = {
    path: {
        siteKey: string;
        slug: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        gt?: (number) | null;
        legacyId?: string;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        rootOnly?: (string | Array<(string)>);
        tags?: (string | Array<(string)>);
        upcoming?: (string | Array<(string)>);
    };
};
type GetProfileEventsResponse = ({
    records: Array<Event>;
    count?: number;
});
type GetProfileEventsError = (unknown);
type GetProfileProductsData = {
    path: {
        siteKey: string;
        slug: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: 'true' | 'false';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
    };
};
type GetProfileProductsResponse = ({
    records: Array<Product>;
    count: number;
});
type GetProfileProductsError = (unknown);
type GetProductsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        type?: 'member';
    };
};
type GetProductsResponse = ({
    records: Array<Product>;
    count?: number;
});
type GetProductsError = unknown;
type GetProductData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetProductResponse = (Product);
type GetProductError = (unknown);
type SearchSiteData = {
    path: {
        siteKey: string;
    };
    query?: {
        debug?: 'true' | 'false' | '1' | '0';
        dir?: 'asc' | 'desc';
        disableVector?: 'true' | 'false' | '1' | '0';
        limit?: (number) | null;
        minResultSimilarity?: (number) | null;
        noCache?: 'true' | 'false' | '1' | '0';
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        searchProvider?: ('algolia' | 'trigram' | 'hybrid') | null;
        trigramThreshold?: (number) | null;
        vectorThreshold?: (number) | null;
    };
};
type SearchSiteResponse = (SearchSiteResults);
type SearchSiteError = (unknown);
type SearchAllData = {
    path: {
        siteKey: string;
    };
    query?: {
        debug?: 'true' | 'false' | '1' | '0';
        dir?: 'asc' | 'desc';
        disableVector?: 'true' | 'false' | '1' | '0';
        limit?: (number) | null;
        minResultSimilarity?: (number) | null;
        noCache?: 'true' | 'false' | '1' | '0';
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        searchProvider?: ('algolia' | 'trigram' | 'hybrid') | null;
        trigramThreshold?: (number) | null;
        vectorThreshold?: (number) | null;
    };
};
type SearchAllResponse = (SearchAllSiteResults);
type SearchAllError = (unknown);
type GetTagsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        parentId?: string;
        query?: string;
    };
};
type GetTagsResponse = ({
    records: Array<TagListItem>;
    count?: number;
});
type GetTagsError = unknown;
type GetPublicLinkPreviewData = {
    path: {
        siteKey: string;
    };
    query: {
        url: string;
    };
};
type GetPublicLinkPreviewResponse = (PublicLinkPreview);
type GetPublicLinkPreviewError = (unknown);
type GetPlaybackTokenData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type GetPlaybackTokenResponse = (PlaybackToken);
type GetPlaybackTokenError = (unknown);
type ListSiteDomainsData = {
    path: {
        siteKey: string;
    };
};
type ListSiteDomainsResponse = ({
    records: Array<{
        siteKey: string;
        customDomain: string;
    }>;
});
type ListSiteDomainsError = unknown;
type GetSiteByDomainData = {
    path: {
        domain: string;
        siteKey: string;
    };
};
type GetSiteByDomainResponse = ({
    id: string;
    siteKey: string;
});
type GetSiteByDomainError = (unknown);
type GetImageDescriptionData = {
    body?: ImageDescriptionInput;
    path: {
        siteKey: string;
    };
};
type GetImageDescriptionResponse = (ImageDescription);
type GetImageDescriptionError = (unknown);
type TranslateEventData = {
    body?: TranslateInput;
    path: {
        siteKey: string;
    };
};
type TranslateEventResponse = (Translation);
type TranslateEventError = (unknown);
type TranslateProfileData = {
    body?: TranslateInput;
    path: {
        siteKey: string;
    };
};
type TranslateProfileResponse = (Translation);
type TranslateProfileError = (unknown);
type TranslatePageData = {
    body?: TranslateInput;
    path: {
        siteKey: string;
    };
};
type TranslatePageResponse = (Translation);
type TranslatePageError = (unknown);
type TranslateLocationData = {
    body?: TranslateInput;
    path: {
        siteKey: string;
    };
};
type TranslateLocationResponse = (Translation);
type TranslateLocationError = (unknown);
type TranslateProductData = {
    body?: TranslateInput;
    path: {
        siteKey: string;
    };
};
type TranslateProductResponse = (Translation);
type TranslateProductError = (unknown);
type ListSiteApiKeysData = {
    path: {
        siteKey: string;
    };
};
type ListSiteApiKeysResponse = (SiteApiKeysListResponse);
type ListSiteApiKeysError = (unknown);
type CreateSiteApiKeyData = {
    body?: CreateSiteApiKeyInput;
    path: {
        siteKey: string;
    };
};
type CreateSiteApiKeyResponse2 = (CreateSiteApiKeyResponse);
type CreateSiteApiKeyError = (unknown);
type RevokeSiteApiKeyData = {
    path: {
        keyId: string;
        siteKey: string;
    };
};
type RevokeSiteApiKeyResponse = (SiteApiKeySuccess);
type RevokeSiteApiKeyError = (unknown);
type GetEmailConfigData = {
    path: {
        siteKey: string;
    };
};
type GetEmailConfigResponse = (EmailConfig);
type GetEmailConfigError = (unknown);
type UpdateEmailConfigData = {
    body?: EmailConfigInput;
    path: {
        siteKey: string;
    };
};
type UpdateEmailConfigResponse = (EmailConfig);
type UpdateEmailConfigError = (unknown);
type GetDomainStatusData = {
    path: {
        siteKey: string;
    };
};
type GetDomainStatusResponse = (DomainStatus);
type GetDomainStatusError = (unknown);
type AddCustomDomainData = {
    body?: AddDomainInput;
    path: {
        siteKey: string;
    };
};
type AddCustomDomainResponse = (AddDomainResponse);
type AddCustomDomainError = (unknown);
type RemoveCustomDomainData = {
    path: {
        siteKey: string;
    };
};
type RemoveCustomDomainResponse = ({
    success: boolean;
});
type RemoveCustomDomainError = (unknown);
type VerifyDomainData = {
    path: {
        siteKey: string;
    };
};
type VerifyDomainResponse = (DomainStatus);
type VerifyDomainError = (unknown);
type GetEmailsData = {
    path: {
        siteKey: string;
    };
    query?: {
        batchId?: string;
        endDate?: string;
        limit?: string;
        page?: string;
        startDate?: string;
        status?: 'PENDING' | 'SENT' | 'DELIVERED' | 'BOUNCED' | 'FAILED';
        templateKey?: string;
    };
};
type GetEmailsResponse = (EmailsResponse);
type GetEmailsError = (unknown);
type GetEmailStatsData = {
    path: {
        siteKey: string;
    };
    query?: {
        days?: string;
    };
};
type GetEmailStatsResponse = (EmailStats);
type GetEmailStatsError = (unknown);
type GetEmailByIdData = {
    path: {
        emailId: string;
        siteKey: string;
    };
};
type GetEmailByIdResponse = (Email);
type GetEmailByIdError = (unknown);
type GetEmailBatchesData = {
    path: {
        siteKey: string;
    };
    query?: {
        endDate?: string;
        limit?: string;
        page?: string;
        startDate?: string;
        status?: 'DRAFT' | 'SENDING' | 'COMPLETED';
        templateKey?: string;
    };
};
type GetEmailBatchesResponse = (EmailBatchesResponse);
type GetEmailBatchesError = (unknown);
type CreateDraftBatchData = {
    body?: CreateDraftBatchInput;
    path: {
        siteKey: string;
    };
};
type CreateDraftBatchResponse = (DraftBatchResult);
type CreateDraftBatchError = (unknown);
type GetEmailBatchData = {
    path: {
        batchId: string;
        siteKey: string;
    };
};
type GetEmailBatchResponse = (EmailBatchDetail);
type GetEmailBatchError = (unknown);
type UpdateDraftBatchData = {
    body?: UpdateDraftBatchInput;
    path: {
        batchId: string;
        siteKey: string;
    };
};
type UpdateDraftBatchResponse = ({
    updated: boolean;
});
type UpdateDraftBatchError = (unknown);
type DeleteBatchData = {
    path: {
        batchId: string;
        siteKey: string;
    };
};
type DeleteBatchResponse = ({
    deleted: boolean;
});
type DeleteBatchError = (unknown);
type CreateAndSendBatchData = {
    body?: CreateDraftBatchInput;
    path: {
        siteKey: string;
    };
};
type CreateAndSendBatchResponse = (BatchSendResult);
type CreateAndSendBatchError = (unknown);
type SendBatchData = {
    path: {
        batchId: string;
        siteKey: string;
    };
};
type SendBatchResponse = (BatchSendResult);
type SendBatchError = (unknown);
type UpdateMediaItemOrderData = {
    body?: UpdateMediaItemOrderInput;
    path: {
        siteKey: string;
    };
};
type UpdateMediaItemOrderResponse2 = (UpdateMediaItemOrderResponse);
type UpdateMediaItemOrderError = (unknown);
type DetachMediaItemFromEntityData = {
    body?: DetachMediaItemInput;
    path: {
        siteKey: string;
    };
};
type DetachMediaItemFromEntityResponse = (DetachMediaItemResponse);
type DetachMediaItemFromEntityError = (unknown);
type ListMediaItemDownloadsData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type ListMediaItemDownloadsResponse = (MediaDownloads);
type ListMediaItemDownloadsError = (unknown);
type RequestMediaItemOriginalDownloadData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type RequestMediaItemOriginalDownloadResponse = (MediaOriginalDownload);
type RequestMediaItemOriginalDownloadError = (unknown);
type ListMediaItemRolesData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type ListMediaItemRolesResponse = (Array<MediaItemRole>);
type ListMediaItemRolesError = (unknown);
type AddRoleToMediaItemData = {
    body?: AddRoleToMediaItemInput;
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type AddRoleToMediaItemResponse = (Array<MediaItemRole>);
type AddRoleToMediaItemError = (unknown);
type RemoveRoleFromMediaItemData = {
    path: {
        mediaItemId: string;
        roleId: string;
        siteKey: string;
    };
};
type RemoveRoleFromMediaItemResponse = (Array<MediaItemRole>);
type RemoveRoleFromMediaItemError = (unknown);
type UpdateMediaItemData = {
    body?: UpdateMediaItemInput;
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type UpdateMediaItemResponse = (UpdatedMediaItem);
type UpdateMediaItemError = (unknown);
type DeleteMediaItemData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type DeleteMediaItemResponse = ({
    success: boolean;
});
type DeleteMediaItemError = (unknown);
type ListMfaFactorsData = {
    path: {
        siteKey: string;
    };
};
type ListMfaFactorsResponse = (MfaFactorsList);
type ListMfaFactorsError = (unknown);
type EnrollMfaFactorData = {
    body?: MfaEnrollInput;
    path: {
        siteKey: string;
    };
};
type EnrollMfaFactorResponse = (MfaEnroll);
type EnrollMfaFactorError = (unknown);
type VerifyMfaFactorData = {
    body?: MfaVerifyInput;
    path: {
        siteKey: string;
    };
};
type VerifyMfaFactorResponse = (MfaOk);
type VerifyMfaFactorError = (unknown);
type UnenrollMfaFactorData = {
    body?: MfaUnenrollInput;
    path: {
        siteKey: string;
    };
};
type UnenrollMfaFactorResponse = (MfaOk);
type UnenrollMfaFactorError = (unknown);
type ListMediaCollectionsData = {
    path: {
        siteKey: string;
    };
    query?: {
        entityId?: string;
        entityType?: 'event' | 'profile' | 'page' | 'location' | 'product';
    };
};
type ListMediaCollectionsResponse = (Array<MediaCollection>);
type ListMediaCollectionsError = unknown;
type CreateMediaCollectionData = {
    body?: CreateMediaCollectionInput;
    path: {
        siteKey: string;
    };
};
type CreateMediaCollectionResponse = (MediaCollection);
type CreateMediaCollectionError = (unknown);
type GetMediaCollectionData = {
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type GetMediaCollectionResponse = (MediaCollection);
type GetMediaCollectionError = (unknown);
type UpdateMediaCollectionData = {
    body?: UpdateMediaCollectionInput;
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type UpdateMediaCollectionResponse = (MediaCollection);
type UpdateMediaCollectionError = (unknown);
type DeleteMediaCollectionData = {
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type DeleteMediaCollectionResponse = ({
    ok: boolean;
});
type DeleteMediaCollectionError = (unknown);
type AddItemToMediaCollectionData = {
    body?: AddMediaItemToCollectionInput;
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type AddItemToMediaCollectionResponse = (MediaCollection);
type AddItemToMediaCollectionError = (unknown);
type ReorderMediaCollectionItemData = {
    body?: ReorderMediaCollectionItemInput;
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type ReorderMediaCollectionItemResponse = (MediaCollection);
type ReorderMediaCollectionItemError = (unknown);
type RemoveItemFromMediaCollectionData = {
    path: {
        collectionId: string;
        mediaItemId: string;
        siteKey: string;
    };
    query?: {
        ensureEntityId?: string;
        ensureEntityType?: 'event' | 'profile' | 'page' | 'location' | 'product';
    };
};
type RemoveItemFromMediaCollectionResponse = (MediaCollection);
type RemoveItemFromMediaCollectionError = (unknown);
type ListMediaCollectionRolesData = {
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type ListMediaCollectionRolesResponse = (Array<MediaCollectionRole>);
type ListMediaCollectionRolesError = (unknown);
type AddRoleToMediaCollectionData = {
    body?: AddRoleToMediaCollectionInput;
    path: {
        collectionId: string;
        siteKey: string;
    };
};
type AddRoleToMediaCollectionResponse = (Array<MediaCollectionRole>);
type AddRoleToMediaCollectionError = (unknown);
type RemoveRoleFromMediaCollectionData = {
    path: {
        collectionId: string;
        roleId: string;
        siteKey: string;
    };
};
type RemoveRoleFromMediaCollectionResponse = (Array<MediaCollectionRole>);
type RemoveRoleFromMediaCollectionError = (unknown);
type GetEntityMediaCountData = {
    path: {
        entityId: string;
        entityType: 'event' | 'profile' | 'page' | 'location' | 'product';
        siteKey: string;
    };
};
type GetEntityMediaCountResponse = (EntityMediaCount);
type GetEntityMediaCountError = (unknown);
type ListEntityMediaItemsData = {
    path: {
        entityId: string;
        entityType: 'event' | 'profile' | 'page' | 'location' | 'product';
        siteKey: string;
    };
};
type ListEntityMediaItemsResponse = (EntityMediaItems);
type ListEntityMediaItemsError = (unknown);
type GetNewsPublicPreviewData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        gt?: (number) | null;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        upcoming?: (string | Array<(string)>);
    };
};
type GetNewsPublicPreviewResponse = ({
    records: Array<(Page & {
        parent?: {
            [key: string]: unknown;
        };
    })>;
    count: number;
});
type GetNewsPublicPreviewError = (unknown);
type AddImageToNoteData = {
    body?: AddImageToNoteInput;
    path: {
        noteId: string;
        siteKey: string;
    };
};
type AddImageToNoteResponse2 = (AddImageToNoteResponse);
type AddImageToNoteError = (unknown);
type ListPagesData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        publishState?: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
        query?: string;
        type?: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'EVENTLIST' | 'PROFILELIST' | 'PRODUCTLIST' | 'LINK';
    };
};
type ListPagesResponse = (PagesListResponse);
type ListPagesError = (unknown);
type CreatePageData = {
    body?: CreatePageInput;
    path: {
        siteKey: string;
    };
};
type CreatePageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type CreatePageError = (unknown);
type GetPagesPublicPreviewData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
    };
};
type GetPagesPublicPreviewResponse = ({
    records: Array<(Page & {
        parent?: {
            [key: string]: unknown;
        };
    })>;
    count: number;
});
type GetPagesPublicPreviewError = (unknown);
type GetPage1Data = {
    path: {
        pageId: string;
        siteKey: string;
    };
};
type GetPage1Response = ((Page & {
    id: string;
    siteId: string;
}));
type GetPage1Error = (unknown);
type DeletePageData = {
    path: {
        pageId: string;
        siteKey: string;
    };
};
type DeletePageResponse = (DeleteResponse);
type DeletePageError = (unknown);
type UpdatePageData = {
    body?: UpdatePageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type UpdatePageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type UpdatePageError = (unknown);
type PublishPageData = {
    path: {
        pageId: string;
        siteKey: string;
    };
};
type PublishPageResponse = (PublishStateResponse);
type PublishPageError = (unknown);
type UnpublishPageData = {
    body?: UnpublishPageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type UnpublishPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type UnpublishPageError = (unknown);
type AddLocaleToPageData = {
    body?: AddLocaleToPageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type AddLocaleToPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type AddLocaleToPageError = (unknown);
type AddRoleToPageData = {
    body?: AddRoleToPageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type AddRoleToPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type AddRoleToPageError = (unknown);
type RemoveRoleFromPageData = {
    path: {
        pageId: string;
        roleId: string;
        siteKey: string;
    };
};
type RemoveRoleFromPageResponse = (DeleteResponse);
type RemoveRoleFromPageError = (unknown);
type AddParentToPageData = {
    body?: AddParentToPageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type AddParentToPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type AddParentToPageError = (unknown);
type UpdatePageOrderData = {
    body?: UpdatePageOrderInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type UpdatePageOrderResponse = (unknown);
type UpdatePageOrderError = (unknown);
type AddProfileToPageData = {
    body?: AddProfileToPageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type AddProfileToPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type AddProfileToPageError = (unknown);
type RemoveProfileFromPageData = {
    path: {
        pageId: string;
        profileId: string;
        siteKey: string;
    };
};
type RemoveProfileFromPageResponse = (DeleteResponse);
type RemoveProfileFromPageError = (unknown);
type ToggleProfileVisibilityOnPageData = {
    path: {
        pageId: string;
        profileId: string;
        siteKey: string;
    };
};
type ToggleProfileVisibilityOnPageResponse = ((Page & {
    id: string;
    siteId: string;
}));
type ToggleProfileVisibilityOnPageError = (unknown);
type UpdateProfileOrderOnPageData = {
    body?: UpdateProfileOrderOnPageInput;
    path: {
        pageId: string;
        profileId: string;
        siteKey: string;
    };
};
type UpdateProfileOrderOnPageResponse = (unknown);
type UpdateProfileOrderOnPageError = (unknown);
type AddImageToPageData = {
    body?: PageMediaItemUpload;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type AddImageToPageResponse = (AddPageImageResponse);
type AddImageToPageError = (unknown);
type RemoveImageFromPageData = {
    body?: RemovePageImageInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type RemoveImageFromPageResponse = (DeleteResponse);
type RemoveImageFromPageError = (unknown);
type BustPageCacheData = {
    path: {
        pageId: string;
        siteKey: string;
    };
};
type BustPageCacheResponse = (BustCacheResponse);
type BustPageCacheError = (unknown);
type ListPageTagsData = {
    path: {
        pageId: string;
        siteKey: string;
    };
};
type ListPageTagsResponse = (PageTagsResponse);
type ListPageTagsError = (unknown);
type UpdatePageTagsData = {
    body?: UpdatePageTagsInput;
    path: {
        pageId: string;
        siteKey: string;
    };
};
type UpdatePageTagsResponse = (PageTagsResponse);
type UpdatePageTagsError = (unknown);
type CreateProfileData = {
    body?: CreateProfileInput;
    path: {
        siteKey: string;
    };
};
type CreateProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type CreateProfileError = (unknown);
type ListProfilesData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: string;
    };
};
type ListProfilesResponse = (ProfilesListResponse);
type ListProfilesError = (unknown);
type GetProfilesPublicPreviewData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: number;
        orderBy?: 'slug' | 'createdAt' | 'updatedAt';
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        type?: 'member';
    };
};
type GetProfilesPublicPreviewResponse = ({
    records: Array<ProfilePreview>;
    count: number;
});
type GetProfilesPublicPreviewError = (unknown);
type GetProfile1Data = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type GetProfile1Response = ((Profile & {
    id: string;
    siteId: string;
}));
type GetProfile1Error = (unknown);
type UpdateProfileData = {
    body?: UpdateProfileInput;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type UpdateProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type UpdateProfileError = (unknown);
type RemoveProfileData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type RemoveProfileResponse = (Ok);
type RemoveProfileError = (unknown);
type GetProfileEvents1Data = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type GetProfileEvents1Response = (ProfileConnectedRecords);
type GetProfileEvents1Error = (unknown);
type GetProfileProducts1Data = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type GetProfileProducts1Response = (ProfileConnectedRecords);
type GetProfileProducts1Error = (unknown);
type GetProfilePagesData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type GetProfilePagesResponse = (ProfileConnectedRecords);
type GetProfilePagesError = (unknown);
type PublishProfileData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type PublishProfileResponse = (PublishState);
type PublishProfileError = (unknown);
type AddImageToProfileData = {
    body?: MediaItemUpload;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type AddImageToProfileResponse = (AddImageResponse);
type AddImageToProfileError = (unknown);
type RemoveImageFromProfileData = {
    body?: MediaItemUpload;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type RemoveImageFromProfileResponse = (Ok);
type RemoveImageFromProfileError = (unknown);
type AddUserToProfileData = {
    body?: AddUserToProfileInput;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type AddUserToProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type AddUserToProfileError = (unknown);
type UpdateUserOnProfileData = {
    body?: UpdateUserOnProfileInput;
    path: {
        profileId: string;
        siteKey: string;
        userId: string;
    };
};
type UpdateUserOnProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type UpdateUserOnProfileError = (unknown);
type RemoveUserFromProfileData = {
    path: {
        profileId: string;
        siteKey: string;
        userId: string;
    };
};
type RemoveUserFromProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type RemoveUserFromProfileError = (unknown);
type SetOwnerForProfileData = {
    body?: SetOwnerForProfileInput;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type SetOwnerForProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type SetOwnerForProfileError = (unknown);
type GetProfileNotesData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type GetProfileNotesResponse = (ProfileConnectedRecords);
type GetProfileNotesError = (unknown);
type AddNoteToProfileData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type AddNoteToProfileResponse = (Note);
type AddNoteToProfileError = (unknown);
type UpdateNoteOnProfileData = {
    body?: UpdateNoteInput;
    path: {
        noteId: string;
        profileId: string;
        siteKey: string;
    };
};
type UpdateNoteOnProfileResponse = (Note);
type UpdateNoteOnProfileError = (unknown);
type RemoveNoteOnProfileData = {
    path: {
        noteId: string;
        profileId: string;
        siteKey: string;
    };
};
type RemoveNoteOnProfileResponse = (Ok);
type RemoveNoteOnProfileError = (unknown);
type UpdateNoteOrderOnProfileData = {
    body?: UpdateNoteOrderInput;
    path: {
        noteId: string;
        profileId: string;
        siteKey: string;
    };
};
type UpdateNoteOrderOnProfileResponse = ((Profile & {
    id: string;
    siteId: string;
}));
type UpdateNoteOrderOnProfileError = (unknown);
type ListProfileTagsData = {
    path: {
        profileId: string;
        siteKey: string;
    };
};
type ListProfileTagsResponse = (ProfileTagsResponse);
type ListProfileTagsError = (unknown);
type UpdateProfileTagsData = {
    body?: UpdateProfileTagsInput;
    path: {
        profileId: string;
        siteKey: string;
    };
};
type UpdateProfileTagsResponse = (ProfileTagsResponse);
type UpdateProfileTagsError = (unknown);
type ListTagsData = {
    path: {
        siteKey: string;
    };
    query?: {
        limit?: (number) | null;
        page?: (number) | null;
        query?: string;
    };
};
type ListTagsResponse = (TagsListResponse);
type ListTagsError = (unknown);
type CreateTagData = {
    body?: CreateTagInput;
    path: {
        siteKey: string;
    };
};
type CreateTagResponse = ((Tag & {
    id: string;
    title: string;
    siteId: string;
}));
type CreateTagError = (unknown);
type ListParentTagsData = {
    path: {
        siteKey: string;
        tagId: string;
    };
};
type ListParentTagsResponse = (TagGraphListResponse);
type ListParentTagsError = (unknown);
type UpdateParentTagsData = {
    body?: UpdateParentTagsInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type UpdateParentTagsResponse = (TagGraphListResponse);
type UpdateParentTagsError = (unknown);
type ListChildTagsData = {
    path: {
        siteKey: string;
        tagId: string;
    };
};
type ListChildTagsResponse = (TagGraphListResponse);
type ListChildTagsError = (unknown);
type UpdateChildTagsData = {
    body?: UpdateChildTagsInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type UpdateChildTagsResponse = (TagGraphListResponse);
type UpdateChildTagsError = (unknown);
type ListTagRelationsData = {
    path: {
        siteKey: string;
        tagId: string;
    };
};
type ListTagRelationsResponse = (TagRelationsResponse);
type ListTagRelationsError = (unknown);
type AttachEventToTagData = {
    body?: AttacheventsToTagInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type AttachEventToTagResponse = (AttachTagRelationResponse);
type AttachEventToTagError = (unknown);
type AttachProfileToTagData = {
    body?: AttachprofilesToTagInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type AttachProfileToTagResponse = (AttachTagRelationResponse);
type AttachProfileToTagError = (unknown);
type AttachProductToTagData = {
    body?: AttachproductsToTagInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type AttachProductToTagResponse = (AttachTagRelationResponse);
type AttachProductToTagError = (unknown);
type AttachPageToTagData = {
    body?: AttachpagesToTagInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type AttachPageToTagResponse = (AttachTagRelationResponse);
type AttachPageToTagError = (unknown);
type GetTagData = {
    path: {
        siteKey: string;
        tagId: string;
    };
};
type GetTagResponse = (TagItemResponse);
type GetTagError = (unknown);
type UpdateTagData = {
    body?: UpdateTagInput;
    path: {
        siteKey: string;
        tagId: string;
    };
};
type UpdateTagResponse = (TagItemResponse);
type UpdateTagError = (unknown);
type DisconnectStripeConnectData = {
    path: {
        siteKey: string;
    };
};
type DisconnectStripeConnectResponse = (StripeConnectDisconnectSuccess);
type DisconnectStripeConnectError = (unknown);
type ListTicketsData = {
    path: {
        siteKey: string;
    };
    query?: {
        limit?: (number) | null;
        page?: (number) | null;
    };
};
type ListTicketsResponse = (TicketsListResponse);
type ListTicketsError = (unknown);
type CreateTicketData = {
    body?: CreateTicketInput;
    path: {
        siteKey: string;
    };
};
type CreateTicketResponse = (TicketRecordResponse);
type CreateTicketError = (unknown);
type UpdateTicketData = {
    body?: UpdateTicketInput;
    path: {
        siteKey: string;
        ticketId: string;
    };
};
type UpdateTicketResponse = (TicketRecordResponse);
type UpdateTicketError = (unknown);
type DeleteTicketData = {
    path: {
        siteKey: string;
        ticketId: string;
    };
};
type DeleteTicketResponse = (TicketRecordResponse);
type DeleteTicketError = (unknown);
type ListRolesData = {
    path: {
        siteKey: string;
    };
    query?: {
        limit?: (number) | null;
        page?: (number) | null;
    };
};
type ListRolesResponse = (RolesListResponse);
type ListRolesError = (unknown);
type ListLocationsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: string;
    };
};
type ListLocationsResponse = (LocationsListResponse);
type ListLocationsError = (unknown);
type CreateLocationData = {
    body?: CreateLocationInput;
    path: {
        siteKey: string;
    };
};
type CreateLocationResponse = (Location);
type CreateLocationError = (unknown);
type GetLocationData = {
    path: {
        locationId: string;
        siteKey: string;
    };
};
type GetLocationResponse = (Location);
type GetLocationError = (unknown);
type UpdateLocationData = {
    body?: UpdateLocationInput;
    path: {
        locationId: string;
        siteKey: string;
    };
};
type UpdateLocationResponse = (Location);
type UpdateLocationError = (unknown);
type PublishLocationData = {
    path: {
        locationId: string;
        siteKey: string;
    };
};
type PublishLocationResponse = (PublishState);
type PublishLocationError = (unknown);
type AddImageToLocationData = {
    body?: MediaItemUpload;
    path: {
        locationId: string;
        siteKey: string;
    };
};
type AddImageToLocationResponse = (AddImageResponse);
type AddImageToLocationError = (unknown);
type RemoveImageFromLocationData = {
    body?: RemoveLocationImageInput;
    path: {
        locationId: string;
        siteKey: string;
    };
};
type RemoveImageFromLocationResponse = (Ok);
type RemoveImageFromLocationError = (unknown);
type AddLocaleToLocationData = {
    body?: AddLocaleToLocationInput;
    path: {
        locationId: string;
        siteKey: string;
    };
};
type AddLocaleToLocationResponse = (Location);
type AddLocaleToLocationError = (unknown);
type AddNoteToLocationData = {
    path: {
        locationId: string;
        siteKey: string;
    };
};
type AddNoteToLocationResponse = (Note);
type AddNoteToLocationError = (unknown);
type UpdateNoteOnLocationData = {
    body?: UpdateNoteInput;
    path: {
        locationId: string;
        noteId: string;
        siteKey: string;
    };
};
type UpdateNoteOnLocationResponse = (Note);
type UpdateNoteOnLocationError = (unknown);
type RemoveNoteOnLocationData = {
    path: {
        locationId: string;
        noteId: string;
        siteKey: string;
    };
};
type RemoveNoteOnLocationResponse = (Ok);
type RemoveNoteOnLocationError = (unknown);
type UpdateNoteOrderOnLocationData = {
    body?: (UpdateNoteOrderInput & {
        upperNeighbor?: (string) | null;
    });
    path: {
        locationId: string;
        noteId: string;
        siteKey: string;
    };
};
type UpdateNoteOrderOnLocationResponse = (Ok);
type UpdateNoteOrderOnLocationError = (unknown);
type ListLocationTagsData = {
    path: {
        locationId: string;
        siteKey: string;
    };
};
type ListLocationTagsResponse = (LocationTagsResponse);
type ListLocationTagsError = (unknown);
type UpdateLocationTagsData = {
    body?: UpdateLocationTagsInput;
    path: {
        locationId: string;
        siteKey: string;
    };
};
type UpdateLocationTagsResponse = (LocationTagsResponse);
type UpdateLocationTagsError = (unknown);
type ListProductsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: string;
    };
};
type ListProductsResponse = (ProductsListResponse);
type ListProductsError = (unknown);
type CreateProductData = {
    path: {
        siteKey: string;
    };
};
type CreateProductResponse = ((Product & {
    id: string;
    siteId: string;
}));
type CreateProductError = (unknown);
type UpdateProductOrderData = {
    body?: ReorderProductInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type UpdateProductOrderResponse = ({
    order: Array<(string)>;
});
type UpdateProductOrderError = (unknown);
type GetProductsPublicPreviewData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        type?: 'member';
    };
};
type GetProductsPublicPreviewResponse = ({
    records: Array<Product>;
    count: number;
});
type GetProductsPublicPreviewError = (unknown);
type GetProduct1Data = {
    path: {
        productId: string;
        siteKey: string;
    };
};
type GetProduct1Response = ((Product & {
    id: string;
    siteId: string;
}));
type GetProduct1Error = (unknown);
type UpdateProductData = {
    body?: UpdateProductInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type UpdateProductResponse = ((Product & {
    id: string;
    siteId: string;
}));
type UpdateProductError = (unknown);
type DeleteProductData = {
    path: {
        productId: string;
        siteKey: string;
    };
};
type DeleteProductResponse = ({
    success: boolean;
});
type DeleteProductError = (unknown);
type PublishProductData = {
    path: {
        productId: string;
        siteKey: string;
    };
};
type PublishProductResponse = ({
    publishState: string;
});
type PublishProductError = (unknown);
type AddProductVariantData = {
    path: {
        productId: string;
        siteKey: string;
    };
};
type AddProductVariantResponse = ((ProductVariant & {
    id: string;
}));
type AddProductVariantError = (unknown);
type UpdateVariantOrderOnProductData = {
    body?: ReorderVariantInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type UpdateVariantOrderOnProductResponse = ({
    order: Array<(string)>;
});
type UpdateVariantOrderOnProductError = (unknown);
type UpdateProductVariantData = {
    body?: UpdateVariantInput;
    path: {
        productId: string;
        siteKey: string;
        variantId: string;
    };
};
type UpdateProductVariantResponse = ((ProductVariant & {
    id: string;
}));
type UpdateProductVariantError = (unknown);
type RemoveProductVariantData = {
    path: {
        productId: string;
        siteKey: string;
        variantId: string;
    };
};
type RemoveProductVariantResponse = ({
    success: boolean;
});
type RemoveProductVariantError = (unknown);
type AddImageToProductData = {
    body?: ProductMediaItemUpload;
    path: {
        productId: string;
        siteKey: string;
    };
};
type AddImageToProductResponse = (AddProductImageResponse);
type AddImageToProductError = (unknown);
type RemoveImageFromProductData = {
    body?: RemoveProductImageInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type RemoveImageFromProductResponse = ({
    success: boolean;
});
type RemoveImageFromProductError = (unknown);
type AddLocaleToProductData = {
    body?: AddLocaleToProductInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type AddLocaleToProductResponse = ((Product & {
    id: string;
    siteId: string;
}));
type AddLocaleToProductError = (unknown);
type AddProfileToProductData = {
    body?: AddProfileToProductInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type AddProfileToProductResponse = ((Product & {
    id: string;
    siteId: string;
}));
type AddProfileToProductError = (unknown);
type RemoveProfileFromProductData = {
    path: {
        productId: string;
        profileId: string;
        siteKey: string;
    };
};
type RemoveProfileFromProductResponse = ({
    ok: boolean;
});
type RemoveProfileFromProductError = (unknown);
type ToggleProfileVisibilityOnProductData = {
    path: {
        productId: string;
        profileId: string;
        siteKey: string;
    };
};
type ToggleProfileVisibilityOnProductResponse = ((Product & {
    id: string;
    siteId: string;
}));
type ToggleProfileVisibilityOnProductError = (unknown);
type UpdateProfileOrderOnProductData = {
    body?: UpdateProfileOrderOnProductInput;
    path: {
        productId: string;
        profileId: string;
        siteKey: string;
    };
};
type UpdateProfileOrderOnProductResponse = (unknown);
type UpdateProfileOrderOnProductError = (unknown);
type ListProductTagsData = {
    path: {
        productId: string;
        siteKey: string;
    };
};
type ListProductTagsResponse = (ProductTagsResponse);
type ListProductTagsError = (unknown);
type UpdateProductTagsData = {
    body?: UpdateProductTagsInput;
    path: {
        productId: string;
        siteKey: string;
    };
};
type UpdateProductTagsResponse = (ProductTagsResponse);
type UpdateProductTagsError = (unknown);
type GetUserData = {
    path: {
        siteKey: string;
        userId: string;
    };
};
type GetUserResponse = (User);
type GetUserError = (unknown);
type UpdateUserData = {
    body?: UpdateUserInput;
    path: {
        siteKey: string;
        userId: string;
    };
};
type UpdateUserResponse = (User);
type UpdateUserError = (unknown);
type ListUsersData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: string;
    };
};
type ListUsersResponse = (UsersListResponse);
type ListUsersError = (unknown);
type CreateUserData = {
    body?: CreateUserInput;
    path: {
        siteKey: string;
    };
};
type CreateUserResponse = (User);
type CreateUserError = (unknown);
type AddImageToUserData = {
    body?: AddImageToUserInput;
    path: {
        siteKey: string;
        userId: string;
    };
};
type AddImageToUserResponse = (unknown);
type AddImageToUserError = (unknown);
type AddRoleToUserData = {
    body?: AddRoleToUserInput;
    path: {
        siteKey: string;
        userId: string;
    };
};
type AddRoleToUserResponse = (User);
type AddRoleToUserError = (unknown);
type RemoveRoleFromUserData = {
    path: {
        roleId: string;
        siteKey: string;
        userId: string;
    };
};
type RemoveRoleFromUserResponse = ({
    ok: boolean;
});
type RemoveRoleFromUserError = (unknown);
type GetBackendLinkPreviewData = {
    path: {
        siteKey: string;
    };
    query: {
        url: string;
    };
};
type GetBackendLinkPreviewResponse = (LinkPreview);
type GetBackendLinkPreviewError = (unknown);
type AtprotoOauthStartData = {
    body?: AtprotoOauthStartInput;
    path: {
        siteKey: string;
    };
};
type AtprotoOauthStartResponse2 = (AtprotoOauthStartResponse);
type AtprotoOauthStartError = (unknown);
type AtprotoOauthDisconnectData = {
    path: {
        siteKey: string;
    };
};
type AtprotoOauthDisconnectResponse2 = (AtprotoOauthDisconnectResponse);
type AtprotoOauthDisconnectError = (unknown);
type AtprotoOauthStatusData = {
    path: {
        siteKey: string;
    };
};
type AtprotoOauthStatusResponse2 = (AtprotoOauthStatusResponse);
type AtprotoOauthStatusError = (unknown);
type AtprotoSettingsGetData = {
    path: {
        siteKey: string;
    };
};
type AtprotoSettingsGetResponse = (AtprotoSettingsResponse);
type AtprotoSettingsGetError = (unknown);
type AtprotoSettingsUpdateData = {
    body?: AtprotoSettingsInput;
    path: {
        siteKey: string;
    };
};
type AtprotoSettingsUpdateResponse = (AtprotoSettingsResponse);
type AtprotoSettingsUpdateError = (unknown);
type MetaOauthStartData = {
    path: {
        siteKey: string;
    };
};
type MetaOauthStartResponse2 = (MetaOauthStartResponse);
type MetaOauthStartError = (unknown);
type MetaOauthDisconnectData = {
    path: {
        siteKey: string;
    };
};
type MetaOauthDisconnectResponse2 = (MetaOauthDisconnectResponse);
type MetaOauthDisconnectError = (unknown);
type MetaOauthStatusData = {
    path: {
        siteKey: string;
    };
};
type MetaOauthStatusResponse2 = (MetaOauthStatusResponse);
type MetaOauthStatusError = (unknown);
type GoogleOauthStartData = {
    path: {
        siteKey: string;
    };
};
type GoogleOauthStartResponse2 = (GoogleOauthStartResponse);
type GoogleOauthStartError = (unknown);
type GoogleOauthDisconnectData = {
    path: {
        siteKey: string;
    };
};
type GoogleOauthDisconnectResponse2 = (GoogleOauthDisconnectResponse);
type GoogleOauthDisconnectError = (unknown);
type GoogleOauthStatusData = {
    path: {
        siteKey: string;
    };
};
type GoogleOauthStatusResponse2 = (GoogleOauthStatusResponse);
type GoogleOauthStatusError = (unknown);
type ListMembershipTiersData = {
    path: {
        siteKey: string;
    };
    query?: {
        limit?: number;
        page?: (number) | null;
    };
};
type ListMembershipTiersResponse = ({
    records: Array<MembershipTier>;
});
type ListMembershipTiersError = (unknown);
type GetMembershipTierData = {
    path: {
        id: string;
        siteKey: string;
    };
};
type GetMembershipTierResponse = ({
    records: Array<MembershipTier>;
});
type GetMembershipTierError = (unknown);
type ListMembershipSubscribersData = {
    path: {
        id: string;
        siteKey: string;
    };
    query?: {
        limit?: number;
        page?: (number) | null;
    };
};
type ListMembershipSubscribersResponse = ({
    records: Array<MembershipSubscriber>;
    count: number;
});
type ListMembershipSubscribersError = (unknown);
type GetSite1Data = {
    path: {
        siteKey: string;
    };
};
type GetSite1Response = ((Site & {
    id: string;
}));
type GetSite1Error = (unknown);
type UpdateSiteData = {
    body?: UpdateSiteInput;
    path: {
        siteKey: string;
    };
};
type UpdateSiteResponse = ((Site & {
    id: string;
}));
type UpdateSiteError = (unknown);
type ListWebsiteTemplatesData = {
    path: {
        siteKey: string;
    };
};
type ListWebsiteTemplatesResponse = (WebsiteTemplatesList);
type ListWebsiteTemplatesError = (unknown);
type RemoveImageFromSiteData = {
    body?: (MediaItemUpload & {
        fileName?: string;
        mimeType?: string;
        size?: number;
        isMainImage?: boolean;
    });
    path: {
        siteKey: string;
    };
};
type RemoveImageFromSiteResponse = (Ok);
type RemoveImageFromSiteError = (unknown);
type CreateWebsiteData = {
    path: {
        siteKey: string;
    };
};
type CreateWebsiteResponse = (Website);
type CreateWebsiteError = (unknown);
type UpdateWebsiteData = {
    body?: UpdateWebsiteInput;
    path: {
        siteKey: string;
        websiteId: string;
    };
};
type UpdateWebsiteResponse = (Website);
type UpdateWebsiteError = (unknown);
type AddImageToWebsiteData = {
    body?: (MediaItemUpload & {
        fileName?: string;
        mimeType?: string;
        size?: number;
        isMainImage?: boolean;
    });
    path: {
        siteKey: string;
        websiteId: string;
    };
};
type AddImageToWebsiteResponse = (AddImageResponse);
type AddImageToWebsiteError = (unknown);
type RemoveImageFromWebsiteData = {
    body?: (MediaItemUpload & {
        fileName?: string;
        mimeType?: string;
        size?: number;
        isMainImage?: boolean;
    });
    path: {
        siteKey: string;
        websiteId: string;
    };
};
type RemoveImageFromWebsiteResponse = (Ok);
type RemoveImageFromWebsiteError = (unknown);
type AddLocaleToWebsiteData = {
    body?: AddLocaleInput;
    path: {
        siteKey: string;
        websiteId: string;
    };
};
type AddLocaleToWebsiteResponse = (Website);
type AddLocaleToWebsiteError = (unknown);
type TranslateWebsiteContentData = {
    body?: TranslateWebsiteInput;
    path: {
        siteKey: string;
        websiteId: string;
    };
};
type TranslateWebsiteContentResponse = (TranslatedContent);
type TranslateWebsiteContentError = (unknown);
type CreateEventLivestreamData = {
    body?: CreateLivestreamInput;
    path: {
        eventId: string;
        siteKey: string;
    };
};
type CreateEventLivestreamResponse = (LivestreamResponse);
type CreateEventLivestreamError = (unknown);
type GetEventLivestreamData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type GetEventLivestreamResponse = (LivestreamResponse);
type GetEventLivestreamError = (unknown);
type DeleteEventLivestreamData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type DeleteEventLivestreamResponse = ({
    success: boolean;
});
type DeleteEventLivestreamError = (unknown);
type StopEventLivestreamData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type StopEventLivestreamResponse = (StopLivestreamResponse);
type StopEventLivestreamError = (unknown);
type ListSimulcastTargetsData = {
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type ListSimulcastTargetsResponse = (SimulcastTargetList);
type ListSimulcastTargetsError = (unknown);
type CreateSimulcastTargetData = {
    body?: CreateSimulcastTargetInput;
    path: {
        mediaItemId: string;
        siteKey: string;
    };
};
type CreateSimulcastTargetResponse = (SimulcastTarget);
type CreateSimulcastTargetError = (unknown);
type DeleteSimulcastTargetData = {
    path: {
        mediaItemId: string;
        siteKey: string;
        targetId: string;
    };
};
type DeleteSimulcastTargetResponse = ({
    success: boolean;
});
type DeleteSimulcastTargetError = (unknown);
type ListEventsData = {
    path: {
        siteKey: string;
    };
    query?: {
        includeSubEvents?: 'true' | 'false';
        query?: string;
    };
};
type ListEventsResponse = ({
    records: Array<EventRecord>;
});
type ListEventsError = (unknown);
type CreateEventData = {
    body?: CreateEventInput;
    path: {
        siteKey: string;
    };
};
type CreateEventResponse = ((Event & {
    id: string;
    siteId: string;
    slug: string;
}));
type CreateEventError = (unknown);
type GetEventsPublicPreviewData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        featured?: (string | Array<(string)>);
        gt?: (number) | null;
        legacyId?: string;
        limit?: number;
        lt?: (number) | null;
        orderBy?: 'startDate' | 'createdAt' | 'updatedAt';
        page?: (number) | null;
        query?: (string) | null;
        rootOnly?: (string | Array<(string)>);
        tags?: (string | Array<(string)>);
        upcoming?: (string | Array<(string)>);
    };
};
type GetEventsPublicPreviewResponse = ({
    records: Array<Event>;
    count: number;
});
type GetEventsPublicPreviewError = (unknown);
type GetEvent1Data = {
    path: {
        id: string;
        siteKey: string;
    };
};
type GetEvent1Response = (EventRecord);
type GetEvent1Error = (unknown);
type UpdateEventData = {
    body?: UpdateEventInput;
    path: {
        id: string;
        siteKey: string;
    };
};
type UpdateEventResponse = (EventRecord);
type UpdateEventError = (unknown);
type DeleteEventData = {
    path: {
        id: string;
        siteKey: string;
    };
};
type DeleteEventResponse = (unknown);
type DeleteEventError = (unknown);
type GetEventProfilesData = {
    path: {
        eventId: string;
        siteKey: string;
    };
};
type GetEventProfilesResponse = (EventProfiles);
type GetEventProfilesError = (unknown);
type AddProfileToEventData = {
    body?: AddProfileToEventInput;
    path: {
        eventId: string;
        siteKey: string;
    };
};
type AddProfileToEventResponse = ((Event & {
    id: string;
    siteId: string;
    slug: string;
}));
type AddProfileToEventError = (unknown);
type RemoveProfileFromEventData = {
    path: {
        eventId: string;
        profileId: string;
        siteKey: string;
    };
};
type RemoveProfileFromEventResponse = (unknown);
type RemoveProfileFromEventError = (unknown);
type GetEventRelationsData = {
    path: {
        id: string;
        siteKey: string;
    };
};
type GetEventRelationsResponse = ((EventRelations & {
    hasParent?: boolean;
    hasChildren?: boolean;
    parents?: Array<unknown>;
    subEvents?: Array<unknown>;
}));
type GetEventRelationsError = (unknown);
type AddEventRelationData = {
    body?: EventRelationInput;
    path: {
        id: string;
        siteKey: string;
    };
};
type AddEventRelationResponse = ((EventRelations & {
    hasParent?: boolean;
    hasChildren?: boolean;
    parents?: Array<unknown>;
    subEvents?: Array<unknown>;
}));
type AddEventRelationError = (unknown);
type RemoveEventRelationData = {
    body?: EventRelationInput;
    path: {
        id: string;
        siteKey: string;
    };
};
type RemoveEventRelationResponse = ((EventRelations & {
    hasParent?: boolean;
    hasChildren?: boolean;
    parents?: Array<unknown>;
    subEvents?: Array<unknown>;
}));
type RemoveEventRelationError = (unknown);
type ListEventTagsData = {
    path: {
        id: string;
        siteKey: string;
    };
};
type ListEventTagsResponse = (EventTagsResponse);
type ListEventTagsError = (unknown);
type UpdateEventTagsData = {
    body?: UpdateEventTagsInput;
    path: {
        id: string;
        siteKey: string;
    };
};
type UpdateEventTagsResponse = (EventTagsResponse);
type UpdateEventTagsError = (unknown);

/**
 * This function will properly resolve content blocks that are localized.
 * It takes in the array of localized content and returns the proper content
 * to be used in your page.
 *
 * @category Utilities
 * @example
 * ```typescript
 * import { getEvent, getLocalizedContent } from "@venuecms/sdk";
 * import { ContentRender, type RenderNode } from "@/lib/utils/renderer";
 *
 * // let's assume we are looking at an event and want to show the locale-specific title of that event in english
 * const { data: event } = await getEvent({ slug });
 *
 *
 * // Use getLocalizedContent to retrieve all localized content in the correct locale
 * // typically you will pass a locale from your app (such as from a i18n library) but
 * // for clarity I am passing "en" explicitly to retrieve the english version
 * const { content } = getLocalizedContent(event.localizedContent, "en");
 *
 * // Render the content in english using the renderer
 * return (
 *   <div>
 *     <VenueContent classes={renderedStyles} content={content} />
 *   </div>
 * );
 * ```
 */
declare const getLocalizedContent: (localizedContent: Array<LocalizedContent> | undefined, locale: string) => {
    content: LocalizedContent;
    currentLocale: string;
};

declare const TypeMap: {
    site: string;
    customDomain: string;
};
declare const cache: <T = any>({ type, siteKey, params, fetch, disable, ttl, }: {
    type: keyof typeof TypeMap;
    siteKey?: string;
    params?: any[];
    fetch: () => Promise<any>;
    disable?: boolean;
    ttl?: number;
}) => Promise<T>;

/**
 * Allows you to pass in the siteKey and API key manually in case you want it to be dynamically set. If you don't use this function, the SDK will default to using process.env.VENUE_SITE_KEY and process.env.VENUE_API_KEY instead.
 * @category Configuration
 */
declare const setConfig: (params: {
    siteKey: string;
    options?: Partial<RequestOptions>;
}) => void;
/**
 * The siteKey the SDK is currently configured with, whether it came from
 * {@link setConfig} or `process.env.VENUE_SITE_KEY`.
 *
 * Exposed because the siteKey lives in this module's scope rather than in any
 * call's arguments: a caller that caches a result has no other way to key that
 * cache by site, and a key that omits it is shared by every site rendered from
 * one deployment.
 *
 * @category Configuration
 */
declare const getSiteKey: () => string;
/**
 * Get the site configured via the siteKey
 *
 * @category Sites
 */
declare const getSite: () => Promise<({
    data: Site;
    error: undefined;
} | {
    data: undefined;
    error: unknown;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get the siteKey and site id from a domain name.
 *
 * @category Sites
 * @example
 * ```typescript
 * // It should not include the 'https://' component.
 * import { getSiteKeyByDomain } from "@venuecms/sdk";
 * const { data: { siteKey, id } = await getSiteKeyByDomain({ domain: 'mywebsite.com' });
 * ```
 *
 */
declare const getSiteKeyByDomain: ({ domain }: {
    domain: string;
}) => Promise<any>;
/**
 * @category Sites
 */
declare const listSiteDomains: () => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: ListSiteDomainsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * @category Events
 */
declare const getEvents: (params?: GetEventsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetEventsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Retrieve data for a single event
 *
 * @category Events
 * @example
 * ```typescript
 * import { getEvent } from "@venuecms/sdk";
 * import { ContentRender, type RenderNode } from "@/lib/utils/renderer";
 *
 * const { data: event } = await getEvent({ slug });
 *
 * // If the event is not found, you should do something like a 404
 * if (!event) {
 *   notFound();
 * }
 * const { localizedContent, location, artists } = event;
 *
 * // Get the content in a localized form (usually locale is pulled from somewhere like your url params)
 * const { content } = getLocalizedContent(event.localizedContent, locale);
 *
 * // Render content for the event
 * return (
 *   <div>
 *     <VenueContent classes={renderedStyles} content={content} />
 *   </div>
 * );
 * ```
 */
declare const getEvent: (params: Omit<GetEventData["path"], "siteKey">) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: Event;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
declare const getEventDates: (params: GetEventDatesData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: EventDates;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a list of all pages
 *
 * @category Pages
 */
declare const getPages: (params?: GetPagesData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetPagesResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a single page using the slug
 *
 * @category Pages
 */
declare const getPage: (params: Omit<GetPageData["path"], "siteKey">) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetPageResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a list of all news items
 *
 * @category News
 */
declare const getNews: (params?: GetNewsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetNewsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a single news item using the slug
 *
 * @category News
 */
declare const getNewsArticle: (params: Omit<GetNewsArticleData["path"], "siteKey">) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetNewsArticleResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * @category News
 */
declare const getNewsDates: (params: GetNewsDatesData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: NewsDates;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a list of profiles
 *
 * @category Profiles
 */
declare const getProfiles: (params?: GetProfilesData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetProfilesResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a profile
 *
 * @category Profiles
 */
declare const getProfile: (params: Omit<GetProfileData["path"], "siteKey">) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: Profile;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a listing of events for a profile
 * @category Profiles
 */
declare const getProfileEvents: (params: Omit<GetProfileEventsData["path"], "siteKey"> & GetProfileEventsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetProfileEventsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a listing of products for a profile
 * @category Profiles
 */
declare const getProfileProducts: (params: Omit<GetProfileProductsData["path"], "siteKey"> & GetProfileProductsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetProfileProductsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a listing of products
 * @category Products
 */
declare const getProducts: (params: GetProductsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetProductsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a product
 *
 * @category Products
 */
declare const getProduct: (params: Omit<GetProductData["path"], "siteKey">) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: Product;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Get a listing of tags in use
 * @category Tags
 */
declare const getTags: (params: GetTagsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetTagsResponse;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;
/**
 * Search a site for all content types
 *
 * @category Sites
 */
declare const searchSite: (params: SearchSiteData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: SearchSiteResults;
    error: undefined;
}) & {
    request: Request;
    response: Response;
}>;

export { type AccessRole, type AddCustomDomainData, type AddCustomDomainError, type AddCustomDomainResponse, type AddDomainInput, type AddDomainResponse, type AddEventRelationData, type AddEventRelationError, type AddEventRelationResponse, type AddImageResponse, type AddImageToLocationData, type AddImageToLocationError, type AddImageToLocationResponse, type AddImageToNoteData, type AddImageToNoteError, type AddImageToNoteInput, type AddImageToNoteResponse, type AddImageToNoteResponse2, type AddImageToPageData, type AddImageToPageError, type AddImageToPageResponse, type AddImageToProductData, type AddImageToProductError, type AddImageToProductResponse, type AddImageToProfileData, type AddImageToProfileError, type AddImageToProfileResponse, type AddImageToUserData, type AddImageToUserError, type AddImageToUserInput, type AddImageToUserResponse, type AddImageToWebsiteData, type AddImageToWebsiteError, type AddImageToWebsiteResponse, type AddItemToMediaCollectionData, type AddItemToMediaCollectionError, type AddItemToMediaCollectionResponse, type AddLocaleInput, type AddLocaleToLocationData, type AddLocaleToLocationError, type AddLocaleToLocationInput, type AddLocaleToLocationResponse, type AddLocaleToPageData, type AddLocaleToPageError, type AddLocaleToPageInput, type AddLocaleToPageResponse, type AddLocaleToProductData, type AddLocaleToProductError, type AddLocaleToProductInput, type AddLocaleToProductResponse, type AddLocaleToWebsiteData, type AddLocaleToWebsiteError, type AddLocaleToWebsiteResponse, type AddMediaItemToCollectionInput, type AddNoteToLocationData, type AddNoteToLocationError, type AddNoteToLocationResponse, type AddNoteToProfileData, type AddNoteToProfileError, type AddNoteToProfileResponse, type AddPageImageResponse, type AddParentToPageData, type AddParentToPageError, type AddParentToPageInput, type AddParentToPageResponse, type AddProductImageResponse, type AddProductVariantData, type AddProductVariantError, type AddProductVariantResponse, type AddProfileToEventData, type AddProfileToEventError, type AddProfileToEventInput, type AddProfileToEventResponse, type AddProfileToPageData, type AddProfileToPageError, type AddProfileToPageInput, type AddProfileToPageResponse, type AddProfileToProductData, type AddProfileToProductError, type AddProfileToProductInput, type AddProfileToProductResponse, type AddRoleToMediaCollectionData, type AddRoleToMediaCollectionError, type AddRoleToMediaCollectionInput, type AddRoleToMediaCollectionResponse, type AddRoleToMediaItemData, type AddRoleToMediaItemError, type AddRoleToMediaItemInput, type AddRoleToMediaItemResponse, type AddRoleToPageData, type AddRoleToPageError, type AddRoleToPageInput, type AddRoleToPageResponse, type AddRoleToUserData, type AddRoleToUserError, type AddRoleToUserInput, type AddRoleToUserResponse, type AddUserToProfileData, type AddUserToProfileError, type AddUserToProfileInput, type AddUserToProfileResponse, type AtprotoOauthDisconnectData, type AtprotoOauthDisconnectError, type AtprotoOauthDisconnectResponse, type AtprotoOauthDisconnectResponse2, type AtprotoOauthStartData, type AtprotoOauthStartError, type AtprotoOauthStartInput, type AtprotoOauthStartResponse, type AtprotoOauthStartResponse2, type AtprotoOauthStatusData, type AtprotoOauthStatusError, type AtprotoOauthStatusResponse, type AtprotoOauthStatusResponse2, type AtprotoSettingsGetData, type AtprotoSettingsGetError, type AtprotoSettingsGetResponse, type AtprotoSettingsInput, type AtprotoSettingsResponse, type AtprotoSettingsUpdateData, type AtprotoSettingsUpdateError, type AtprotoSettingsUpdateResponse, type AttachEventToTagData, type AttachEventToTagError, type AttachEventToTagResponse, type AttachPageToTagData, type AttachPageToTagError, type AttachPageToTagResponse, type AttachProductToTagData, type AttachProductToTagError, type AttachProductToTagResponse, type AttachProfileToTagData, type AttachProfileToTagError, type AttachProfileToTagResponse, type AttachTagRelationResponse, type AttacheventsToTagInput, type AttachpagesToTagInput, type AttachproductsToTagInput, type AttachprofilesToTagInput, type BatchEmail, type BatchPagination, type BatchSendResult, type BustCacheResponse, type BustPageCacheData, type BustPageCacheError, type BustPageCacheResponse, type CreateAndSendBatchData, type CreateAndSendBatchError, type CreateAndSendBatchResponse, type CreateDraftBatchData, type CreateDraftBatchError, type CreateDraftBatchInput, type CreateDraftBatchResponse, type CreateEventData, type CreateEventError, type CreateEventInput, type CreateEventLivestreamData, type CreateEventLivestreamError, type CreateEventLivestreamResponse, type CreateEventResponse, type CreateLivestreamInput, type CreateLocationData, type CreateLocationError, type CreateLocationInput, type CreateLocationResponse, type CreateMediaCollectionData, type CreateMediaCollectionError, type CreateMediaCollectionInput, type CreateMediaCollectionResponse, type CreatePageData, type CreatePageError, type CreatePageInput, type CreatePageResponse, type CreateProductData, type CreateProductError, type CreateProductResponse, type CreateProfileData, type CreateProfileError, type CreateProfileInput, type CreateProfileResponse, type CreateSimulcastTargetData, type CreateSimulcastTargetError, type CreateSimulcastTargetInput, type CreateSimulcastTargetResponse, type CreateSiteApiKeyData, type CreateSiteApiKeyError, type CreateSiteApiKeyInput, type CreateSiteApiKeyResponse, type CreateSiteApiKeyResponse2, type CreateTagData, type CreateTagError, type CreateTagInput, type CreateTagResponse, type CreateTicketData, type CreateTicketError, type CreateTicketInput, type CreateTicketResponse, type CreateUserData, type CreateUserError, type CreateUserInput, type CreateUserResponse, type CreateWebsiteData, type CreateWebsiteError, type CreateWebsiteResponse, type CustomSchemaData, type DeleteBatchData, type DeleteBatchError, type DeleteBatchResponse, type DeleteEventData, type DeleteEventError, type DeleteEventLivestreamData, type DeleteEventLivestreamError, type DeleteEventLivestreamResponse, type DeleteEventResponse, type DeleteMediaCollectionData, type DeleteMediaCollectionError, type DeleteMediaCollectionResponse, type DeleteMediaItemData, type DeleteMediaItemError, type DeleteMediaItemResponse, type DeletePageData, type DeletePageError, type DeletePageResponse, type DeleteProductData, type DeleteProductError, type DeleteProductResponse, type DeleteResponse, type DeleteSimulcastTargetData, type DeleteSimulcastTargetError, type DeleteSimulcastTargetResponse, type DeleteTicketData, type DeleteTicketError, type DeleteTicketResponse, type DetachMediaItemFromEntityData, type DetachMediaItemFromEntityError, type DetachMediaItemFromEntityResponse, type DetachMediaItemInput, type DetachMediaItemResponse, type DisconnectStripeConnectData, type DisconnectStripeConnectError, type DisconnectStripeConnectResponse, type DnsRecord, type DomainStatus, type DraftBatchResult, type Email, type EmailBatch, type EmailBatchDetail, type EmailBatchesResponse, type EmailConfig, type EmailConfigInput, type EmailStats, type EmailsResponse, type EnrollMfaFactorData, type EnrollMfaFactorError, type EnrollMfaFactorResponse, type EntityMediaCount, type EntityMediaItems, type Event, type EventDates, type EventProfiles, type EventRecord, type EventReference, type EventRelationInput, type EventRelations, type EventTagsResponse, type GetBackendLinkPreviewData, type GetBackendLinkPreviewError, type GetBackendLinkPreviewResponse, type GetDomainStatusData, type GetDomainStatusError, type GetDomainStatusResponse, type GetEmailBatchData, type GetEmailBatchError, type GetEmailBatchResponse, type GetEmailBatchesData, type GetEmailBatchesError, type GetEmailBatchesResponse, type GetEmailByIdData, type GetEmailByIdError, type GetEmailByIdResponse, type GetEmailConfigData, type GetEmailConfigError, type GetEmailConfigResponse, type GetEmailStatsData, type GetEmailStatsError, type GetEmailStatsResponse, type GetEmailsData, type GetEmailsError, type GetEmailsResponse, type GetEntityMediaCountData, type GetEntityMediaCountError, type GetEntityMediaCountResponse, type GetEvent1Data, type GetEvent1Error, type GetEvent1Response, type GetEventData, type GetEventDatesData, type GetEventDatesError, type GetEventDatesResponse, type GetEventError, type GetEventLivestreamData, type GetEventLivestreamError, type GetEventLivestreamResponse, type GetEventProfilesData, type GetEventProfilesError, type GetEventProfilesResponse, type GetEventRelationsData, type GetEventRelationsError, type GetEventRelationsResponse, type GetEventResponse, type GetEventsData, type GetEventsError, type GetEventsPublicPreviewData, type GetEventsPublicPreviewError, type GetEventsPublicPreviewResponse, type GetEventsResponse, type GetImageDescriptionData, type GetImageDescriptionError, type GetImageDescriptionResponse, type GetLocationData, type GetLocationError, type GetLocationResponse, type GetMediaCollectionData, type GetMediaCollectionError, type GetMediaCollectionResponse, type GetMembershipTierData, type GetMembershipTierError, type GetMembershipTierResponse, type GetNewsArticleData, type GetNewsArticleError, type GetNewsArticleResponse, type GetNewsData, type GetNewsDatesData, type GetNewsDatesError, type GetNewsDatesResponse, type GetNewsError, type GetNewsPublicPreviewData, type GetNewsPublicPreviewError, type GetNewsPublicPreviewResponse, type GetNewsResponse, type GetPage1Data, type GetPage1Error, type GetPage1Response, type GetPageData, type GetPageError, type GetPageResponse, type GetPagesData, type GetPagesError, type GetPagesPublicPreviewData, type GetPagesPublicPreviewError, type GetPagesPublicPreviewResponse, type GetPagesResponse, type GetPlaybackTokenData, type GetPlaybackTokenError, type GetPlaybackTokenResponse, type GetProduct1Data, type GetProduct1Error, type GetProduct1Response, type GetProductData, type GetProductError, type GetProductResponse, type GetProductsData, type GetProductsError, type GetProductsPublicPreviewData, type GetProductsPublicPreviewError, type GetProductsPublicPreviewResponse, type GetProductsResponse, type GetProfile1Data, type GetProfile1Error, type GetProfile1Response, type GetProfileData, type GetProfileError, type GetProfileEvents1Data, type GetProfileEvents1Error, type GetProfileEvents1Response, type GetProfileEventsData, type GetProfileEventsError, type GetProfileEventsResponse, type GetProfileNotesData, type GetProfileNotesError, type GetProfileNotesResponse, type GetProfilePagesData, type GetProfilePagesError, type GetProfilePagesResponse, type GetProfileProducts1Data, type GetProfileProducts1Error, type GetProfileProducts1Response, type GetProfileProductsData, type GetProfileProductsError, type GetProfileProductsResponse, type GetProfileResponse, type GetProfilesData, type GetProfilesError, type GetProfilesPublicPreviewData, type GetProfilesPublicPreviewError, type GetProfilesPublicPreviewResponse, type GetProfilesResponse, type GetPublicLinkPreviewData, type GetPublicLinkPreviewError, type GetPublicLinkPreviewResponse, type GetSite1Data, type GetSite1Error, type GetSite1Response, type GetSiteByDomainData, type GetSiteByDomainError, type GetSiteByDomainResponse, type GetSiteData, type GetSiteError, type GetSiteResponse, type GetTagData, type GetTagError, type GetTagResponse, type GetTagsData, type GetTagsError, type GetTagsResponse, type GetUserData, type GetUserError, type GetUserResponse, type GoogleOauthDisconnectData, type GoogleOauthDisconnectError, type GoogleOauthDisconnectResponse, type GoogleOauthDisconnectResponse2, type GoogleOauthStartData, type GoogleOauthStartError, type GoogleOauthStartResponse, type GoogleOauthStartResponse2, type GoogleOauthStatusData, type GoogleOauthStatusError, type GoogleOauthStatusResponse, type GoogleOauthStatusResponse2, type ImageDescription, type ImageDescriptionInput, type LinkPreview, type ListChildTagsData, type ListChildTagsError, type ListChildTagsResponse, type ListEntityMediaItemsData, type ListEntityMediaItemsError, type ListEntityMediaItemsResponse, type ListEventTagsData, type ListEventTagsError, type ListEventTagsResponse, type ListEventsData, type ListEventsError, type ListEventsResponse, type ListLocationTagsData, type ListLocationTagsError, type ListLocationTagsResponse, type ListLocationsData, type ListLocationsError, type ListLocationsResponse, type ListMediaCollectionRolesData, type ListMediaCollectionRolesError, type ListMediaCollectionRolesResponse, type ListMediaCollectionsData, type ListMediaCollectionsError, type ListMediaCollectionsResponse, type ListMediaItemDownloadsData, type ListMediaItemDownloadsError, type ListMediaItemDownloadsResponse, type ListMediaItemRolesData, type ListMediaItemRolesError, type ListMediaItemRolesResponse, type ListMembershipSubscribersData, type ListMembershipSubscribersError, type ListMembershipSubscribersResponse, type ListMembershipTiersData, type ListMembershipTiersError, type ListMembershipTiersResponse, type ListMfaFactorsData, type ListMfaFactorsError, type ListMfaFactorsResponse, type ListPageTagsData, type ListPageTagsError, type ListPageTagsResponse, type ListPagesData, type ListPagesError, type ListPagesResponse, type ListParentTagsData, type ListParentTagsError, type ListParentTagsResponse, type ListProductTagsData, type ListProductTagsError, type ListProductTagsResponse, type ListProductsData, type ListProductsError, type ListProductsResponse, type ListProfileTagsData, type ListProfileTagsError, type ListProfileTagsResponse, type ListProfilesData, type ListProfilesError, type ListProfilesResponse, type ListRolesData, type ListRolesError, type ListRolesResponse, type ListSimulcastTargetsData, type ListSimulcastTargetsError, type ListSimulcastTargetsResponse, type ListSiteApiKeysData, type ListSiteApiKeysError, type ListSiteApiKeysResponse, type ListSiteDomainsData, type ListSiteDomainsError, type ListSiteDomainsResponse, type ListTagRelationsData, type ListTagRelationsError, type ListTagRelationsResponse, type ListTagsData, type ListTagsError, type ListTagsResponse, type ListTicketsData, type ListTicketsError, type ListTicketsResponse, type ListUsersData, type ListUsersError, type ListUsersResponse, type ListWebsiteTemplatesData, type ListWebsiteTemplatesError, type ListWebsiteTemplatesResponse, type LivestreamResponse, type LocalizedContent, type Location, type LocationSlim, type LocationTagsResponse, type LocationsListResponse, type MediaCollection, type MediaCollectionRole, type MediaDownload, type MediaDownloads, type MediaItem, type MediaItemRole, type MediaItemUpload, type MediaOriginalDownload, type MembershipSubscriber, type MembershipTier, type MetaOauthDisconnectData, type MetaOauthDisconnectError, type MetaOauthDisconnectResponse, type MetaOauthDisconnectResponse2, type MetaOauthStartData, type MetaOauthStartError, type MetaOauthStartResponse, type MetaOauthStartResponse2, type MetaOauthStatusData, type MetaOauthStatusError, type MetaOauthStatusResponse, type MetaOauthStatusResponse2, type MfaEnroll, type MfaEnrollInput, type MfaFactorsList, type MfaOk, type MfaUnenrollInput, type MfaVerifyInput, type NewsDates, type Note, type Ok, type Page, type PageMediaItemUpload, type PageTagsResponse, type PagesListResponse, type Pagination, type PlaybackToken, type Product, type ProductMediaItemUpload, type ProductTagsResponse, type ProductVariant, type ProductsListResponse, type Profile, type ProfileConnectedRecords, type ProfilePreview, type ProfileSlim, type ProfileTagsResponse, type ProfilesListResponse, type PublicLinkPreview, type PublicSignInData, type PublicSignInError, type PublicSignInResponse, type PublicSignOutData, type PublicSignOutError, type PublicSignOutResponse, type PublicSignUpData, type PublicSignUpError, type PublicSignUpResponse, type PublishLocationData, type PublishLocationError, type PublishLocationResponse, type PublishPageData, type PublishPageError, type PublishPageResponse, type PublishProductData, type PublishProductError, type PublishProductResponse, type PublishProfileData, type PublishProfileError, type PublishProfileResponse, type PublishState, type PublishStateResponse, type Recipient, type RemoveCustomDomainData, type RemoveCustomDomainError, type RemoveCustomDomainResponse, type RemoveEventRelationData, type RemoveEventRelationError, type RemoveEventRelationResponse, type RemoveImageFromLocationData, type RemoveImageFromLocationError, type RemoveImageFromLocationResponse, type RemoveImageFromPageData, type RemoveImageFromPageError, type RemoveImageFromPageResponse, type RemoveImageFromProductData, type RemoveImageFromProductError, type RemoveImageFromProductResponse, type RemoveImageFromProfileData, type RemoveImageFromProfileError, type RemoveImageFromProfileResponse, type RemoveImageFromSiteData, type RemoveImageFromSiteError, type RemoveImageFromSiteResponse, type RemoveImageFromWebsiteData, type RemoveImageFromWebsiteError, type RemoveImageFromWebsiteResponse, type RemoveItemFromMediaCollectionData, type RemoveItemFromMediaCollectionError, type RemoveItemFromMediaCollectionResponse, type RemoveLocationImageInput, type RemoveNoteOnLocationData, type RemoveNoteOnLocationError, type RemoveNoteOnLocationResponse, type RemoveNoteOnProfileData, type RemoveNoteOnProfileError, type RemoveNoteOnProfileResponse, type RemovePageImageInput, type RemoveProductImageInput, type RemoveProductVariantData, type RemoveProductVariantError, type RemoveProductVariantResponse, type RemoveProfileData, type RemoveProfileError, type RemoveProfileFromEventData, type RemoveProfileFromEventError, type RemoveProfileFromEventResponse, type RemoveProfileFromPageData, type RemoveProfileFromPageError, type RemoveProfileFromPageResponse, type RemoveProfileFromProductData, type RemoveProfileFromProductError, type RemoveProfileFromProductResponse, type RemoveProfileResponse, type RemoveRoleFromMediaCollectionData, type RemoveRoleFromMediaCollectionError, type RemoveRoleFromMediaCollectionResponse, type RemoveRoleFromMediaItemData, type RemoveRoleFromMediaItemError, type RemoveRoleFromMediaItemResponse, type RemoveRoleFromPageData, type RemoveRoleFromPageError, type RemoveRoleFromPageResponse, type RemoveRoleFromUserData, type RemoveRoleFromUserError, type RemoveRoleFromUserResponse, type RemoveUserFromProfileData, type RemoveUserFromProfileError, type RemoveUserFromProfileResponse, type ReorderMediaCollectionItemData, type ReorderMediaCollectionItemError, type ReorderMediaCollectionItemInput, type ReorderMediaCollectionItemResponse, type ReorderProductInput, type ReorderVariantInput, type RequestMediaItemOriginalDownloadData, type RequestMediaItemOriginalDownloadError, type RequestMediaItemOriginalDownloadResponse, type RevokeSiteApiKeyData, type RevokeSiteApiKeyError, type RevokeSiteApiKeyResponse, type RolesListResponse, type SearchAllData, type SearchAllError, type SearchAllResponse, type SearchAllSiteResults, type SearchSiteData, type SearchSiteError, type SearchSiteResponse, type SearchSiteResults, type SendBatchData, type SendBatchError, type SendBatchResponse, type SetOwnerForProfileData, type SetOwnerForProfileError, type SetOwnerForProfileInput, type SetOwnerForProfileResponse, type SimulcastTarget, type SimulcastTargetList, type Site, type SiteApiKey, type SiteApiKeySuccess, type SiteApiKeysListResponse, type SiteSettings, type StopEventLivestreamData, type StopEventLivestreamError, type StopEventLivestreamResponse, type StopLivestreamResponse, type StripeConnectDisconnectSuccess, type Tag, type TagGraphListResponse, type TagItemResponse, type TagListItem, type TagRelationsResponse, type TagsListResponse, type Ticket, type TicketOnEvent, type TicketRecordResponse, type TicketsListResponse, type ToggleProfileVisibilityOnPageData, type ToggleProfileVisibilityOnPageError, type ToggleProfileVisibilityOnPageResponse, type ToggleProfileVisibilityOnProductData, type ToggleProfileVisibilityOnProductError, type ToggleProfileVisibilityOnProductResponse, type TranslateEventData, type TranslateEventError, type TranslateEventResponse, type TranslateInput, type TranslateLocationData, type TranslateLocationError, type TranslateLocationResponse, type TranslatePageData, type TranslatePageError, type TranslatePageResponse, type TranslateProductData, type TranslateProductError, type TranslateProductResponse, type TranslateProfileData, type TranslateProfileError, type TranslateProfileResponse, type TranslateWebsiteContentData, type TranslateWebsiteContentError, type TranslateWebsiteContentResponse, type TranslateWebsiteInput, type TranslatedContent, type Translation, type UnenrollMfaFactorData, type UnenrollMfaFactorError, type UnenrollMfaFactorResponse, type UnpublishPageData, type UnpublishPageError, type UnpublishPageInput, type UnpublishPageResponse, type UpdateChildTagsData, type UpdateChildTagsError, type UpdateChildTagsInput, type UpdateChildTagsResponse, type UpdateDraftBatchData, type UpdateDraftBatchError, type UpdateDraftBatchInput, type UpdateDraftBatchResponse, type UpdateEmailConfigData, type UpdateEmailConfigError, type UpdateEmailConfigResponse, type UpdateEventData, type UpdateEventError, type UpdateEventInput, type UpdateEventResponse, type UpdateEventTagsData, type UpdateEventTagsError, type UpdateEventTagsInput, type UpdateEventTagsResponse, type UpdateLocationData, type UpdateLocationError, type UpdateLocationInput, type UpdateLocationResponse, type UpdateLocationTagsData, type UpdateLocationTagsError, type UpdateLocationTagsInput, type UpdateLocationTagsResponse, type UpdateMediaCollectionData, type UpdateMediaCollectionError, type UpdateMediaCollectionInput, type UpdateMediaCollectionResponse, type UpdateMediaItemData, type UpdateMediaItemError, type UpdateMediaItemInput, type UpdateMediaItemOrderData, type UpdateMediaItemOrderError, type UpdateMediaItemOrderInput, type UpdateMediaItemOrderResponse, type UpdateMediaItemOrderResponse2, type UpdateMediaItemResponse, type UpdateNoteInput, type UpdateNoteOnLocationData, type UpdateNoteOnLocationError, type UpdateNoteOnLocationResponse, type UpdateNoteOnProfileData, type UpdateNoteOnProfileError, type UpdateNoteOnProfileResponse, type UpdateNoteOrderInput, type UpdateNoteOrderOnLocationData, type UpdateNoteOrderOnLocationError, type UpdateNoteOrderOnLocationResponse, type UpdateNoteOrderOnProfileData, type UpdateNoteOrderOnProfileError, type UpdateNoteOrderOnProfileResponse, type UpdatePageData, type UpdatePageError, type UpdatePageInput, type UpdatePageOrderData, type UpdatePageOrderError, type UpdatePageOrderInput, type UpdatePageOrderResponse, type UpdatePageResponse, type UpdatePageTagsData, type UpdatePageTagsError, type UpdatePageTagsInput, type UpdatePageTagsResponse, type UpdateParentTagsData, type UpdateParentTagsError, type UpdateParentTagsInput, type UpdateParentTagsResponse, type UpdateProductData, type UpdateProductError, type UpdateProductInput, type UpdateProductOrderData, type UpdateProductOrderError, type UpdateProductOrderResponse, type UpdateProductResponse, type UpdateProductTagsData, type UpdateProductTagsError, type UpdateProductTagsInput, type UpdateProductTagsResponse, type UpdateProductVariantData, type UpdateProductVariantError, type UpdateProductVariantResponse, type UpdateProfileData, type UpdateProfileError, type UpdateProfileInput, type UpdateProfileOrderOnPageData, type UpdateProfileOrderOnPageError, type UpdateProfileOrderOnPageInput, type UpdateProfileOrderOnPageResponse, type UpdateProfileOrderOnProductData, type UpdateProfileOrderOnProductError, type UpdateProfileOrderOnProductInput, type UpdateProfileOrderOnProductResponse, type UpdateProfileResponse, type UpdateProfileTagsData, type UpdateProfileTagsError, type UpdateProfileTagsInput, type UpdateProfileTagsResponse, type UpdateSiteData, type UpdateSiteError, type UpdateSiteInput, type UpdateSiteResponse, type UpdateTagData, type UpdateTagError, type UpdateTagInput, type UpdateTagResponse, type UpdateTicketData, type UpdateTicketError, type UpdateTicketInput, type UpdateTicketResponse, type UpdateUserData, type UpdateUserError, type UpdateUserInput, type UpdateUserOnProfileData, type UpdateUserOnProfileError, type UpdateUserOnProfileInput, type UpdateUserOnProfileResponse, type UpdateUserResponse, type UpdateVariantInput, type UpdateVariantOrderOnProductData, type UpdateVariantOrderOnProductError, type UpdateVariantOrderOnProductResponse, type UpdateWebsiteData, type UpdateWebsiteError, type UpdateWebsiteInput, type UpdateWebsiteResponse, type UpdatedMediaItem, type User, type UsersListResponse, type VerifyDomainData, type VerifyDomainError, type VerifyDomainResponse, type VerifyMfaFactorData, type VerifyMfaFactorError, type VerifyMfaFactorResponse, type WebSite, type Website, type WebsiteTemplatesList, cache, type entityType, getEvent, getEventDates, getEvents, getLocalizedContent, getNews, getNewsArticle, getNewsDates, getPage, getPages, getProduct, getProducts, getProfile, getProfileEvents, getProfileProducts, getProfiles, getSite, getSiteKey, getSiteKeyByDomain, getTags, type kind, listSiteDomains, type liveStatus, type liveStatus2, type playbackPolicy, type publishState, type recordType, type relationType, searchSite, setConfig, type status, type status2, type status3, type status4, type status5, type type };
