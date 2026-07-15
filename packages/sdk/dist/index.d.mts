import { RequestOptions } from '@hey-api/client-fetch';

type AddDomainInput = {
    domain: string;
};
type AddDomainResponse = {
    domain: string;
    records: Array<DnsRecord>;
};
type AddMediaItemToCollectionInput = {
    mediaItemId: string;
};
type AddRoleToMediaCollectionInput = {
    roleId: string;
};
type AddRoleToMediaItemInput = {
    roleId: string;
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
type CreateDraftBatchInput = {
    name?: string;
    templateKey?: string;
    subject?: string;
    recipients: Array<Recipient>;
};
type CreateLivestreamInput = {
    title?: string;
    roleIds?: Array<(string)>;
};
type CreateMediaCollectionInput = {
    name: string;
    description?: string;
    entityType?: 'event' | 'profile' | 'page' | 'location' | 'product';
    entityId?: string;
};
type entityType = 'event' | 'profile' | 'page' | 'location' | 'product';
type CustomSchemaData = {
    data?: unknown;
    customSchemaId?: (string) | null;
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
type EventReference = {
    id: string;
    slug: string;
    publishState?: string;
    startDate?: (string) | null;
    endDate?: (string) | null;
    localizedContent: Array<LocalizedContent>;
    image?: (MediaItem & unknown);
};
type EventRelations = {
    parents?: Array<EventReference>;
    children?: Array<EventReference>;
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
type Page = {
    id: string;
    order: number;
    slug: string;
    featured: boolean;
    featuredExpiration?: (string | unknown);
    date?: (string | unknown);
    type: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'LINK';
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
        type: 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'LINK';
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
type type = 'CONTENT' | 'NEWS' | 'NEWSLIST' | 'LINK';
type recordType = 'SOURCE' | 'PUBLISHED' | 'REVISION';
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
type ProfileSlim = {
    siteId: string;
    slug: string;
    tags?: Array<Tag>;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    custom?: Array<CustomSchemaData>;
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
type ReorderMediaCollectionItemInput = {
    mediaItemId: string;
    upperNeighbor: (string) | null;
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
type StripeKeyStatus = {
    hasKey: boolean;
    keyType: ('live' | 'test') | null;
};
type keyType = 'live' | 'test';
type StripeKeySuccess = {
    success: boolean;
};
type StripeKeyUpdateInput = {
    stripeApiKey: string;
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
type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: (string) | null;
    currency?: (string) | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
    order?: number;
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
type UpdateMediaCollectionInput = {
    name?: string;
    description?: (string) | null;
};
type UpdateMediaItemInput = {
    title?: (string) | null;
    caption?: (string) | null;
    credit?: (string) | null;
    altText?: (string) | null;
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
        featured?: (boolean) | null;
        gt?: (number) | null;
        legacyId?: string;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        rootOnly?: (boolean) | null;
        tags?: (string | Array<(string)>);
        upcoming?: (boolean) | null;
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
        upcoming?: (boolean) | null;
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
        featured?: (boolean) | null;
        gt?: (number) | null;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        tags?: (string | Array<(string)>);
        upcoming?: (boolean) | null;
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
        featured?: (boolean) | null;
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
        featured?: (boolean) | null;
        gt?: (number) | null;
        legacyId?: string;
        limit?: (number) | null;
        lt?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
        rootOnly?: (boolean) | null;
        tags?: (string | Array<(string)>);
        upcoming?: (boolean) | null;
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
type GetStripeKeyStatusData = {
    path: {
        siteKey: string;
    };
};
type GetStripeKeyStatusResponse = (StripeKeyStatus);
type GetStripeKeyStatusError = (unknown);
type UpdateStripeKeyData = {
    body?: StripeKeyUpdateInput;
    path: {
        siteKey: string;
    };
};
type UpdateStripeKeyResponse = (StripeKeySuccess);
type UpdateStripeKeyError = (unknown);
type RemoveStripeKeyData = {
    path: {
        siteKey: string;
    };
};
type RemoveStripeKeyResponse = (StripeKeySuccess);
type RemoveStripeKeyError = (unknown);
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

export { type AddCustomDomainData, type AddCustomDomainError, type AddCustomDomainResponse, type AddDomainInput, type AddDomainResponse, type AddItemToMediaCollectionData, type AddItemToMediaCollectionError, type AddItemToMediaCollectionResponse, type AddMediaItemToCollectionInput, type AddRoleToMediaCollectionData, type AddRoleToMediaCollectionError, type AddRoleToMediaCollectionInput, type AddRoleToMediaCollectionResponse, type AddRoleToMediaItemData, type AddRoleToMediaItemError, type AddRoleToMediaItemInput, type AddRoleToMediaItemResponse, type AtprotoOauthDisconnectData, type AtprotoOauthDisconnectError, type AtprotoOauthDisconnectResponse, type AtprotoOauthDisconnectResponse2, type AtprotoOauthStartData, type AtprotoOauthStartError, type AtprotoOauthStartInput, type AtprotoOauthStartResponse, type AtprotoOauthStartResponse2, type AtprotoOauthStatusData, type AtprotoOauthStatusError, type AtprotoOauthStatusResponse, type AtprotoOauthStatusResponse2, type BatchEmail, type BatchPagination, type BatchSendResult, type CreateAndSendBatchData, type CreateAndSendBatchError, type CreateAndSendBatchResponse, type CreateDraftBatchData, type CreateDraftBatchError, type CreateDraftBatchInput, type CreateDraftBatchResponse, type CreateEventLivestreamData, type CreateEventLivestreamError, type CreateEventLivestreamResponse, type CreateLivestreamInput, type CreateMediaCollectionData, type CreateMediaCollectionError, type CreateMediaCollectionInput, type CreateMediaCollectionResponse, type CustomSchemaData, type DeleteBatchData, type DeleteBatchError, type DeleteBatchResponse, type DeleteEventLivestreamData, type DeleteEventLivestreamError, type DeleteEventLivestreamResponse, type DeleteMediaCollectionData, type DeleteMediaCollectionError, type DeleteMediaCollectionResponse, type DeleteMediaItemData, type DeleteMediaItemError, type DeleteMediaItemResponse, type DnsRecord, type DomainStatus, type DraftBatchResult, type Email, type EmailBatch, type EmailBatchDetail, type EmailBatchesResponse, type EmailConfig, type EmailConfigInput, type EmailStats, type EmailsResponse, type EntityMediaCount, type Event, type EventDates, type EventReference, type EventRelations, type GetBackendLinkPreviewData, type GetBackendLinkPreviewError, type GetBackendLinkPreviewResponse, type GetDomainStatusData, type GetDomainStatusError, type GetDomainStatusResponse, type GetEmailBatchData, type GetEmailBatchError, type GetEmailBatchResponse, type GetEmailBatchesData, type GetEmailBatchesError, type GetEmailBatchesResponse, type GetEmailByIdData, type GetEmailByIdError, type GetEmailByIdResponse, type GetEmailConfigData, type GetEmailConfigError, type GetEmailConfigResponse, type GetEmailStatsData, type GetEmailStatsError, type GetEmailStatsResponse, type GetEmailsData, type GetEmailsError, type GetEmailsResponse, type GetEntityMediaCountData, type GetEntityMediaCountError, type GetEntityMediaCountResponse, type GetEventData, type GetEventDatesData, type GetEventDatesError, type GetEventDatesResponse, type GetEventError, type GetEventLivestreamData, type GetEventLivestreamError, type GetEventLivestreamResponse, type GetEventResponse, type GetEventsData, type GetEventsError, type GetEventsResponse, type GetMediaCollectionData, type GetMediaCollectionError, type GetMediaCollectionResponse, type GetNewsArticleData, type GetNewsArticleError, type GetNewsArticleResponse, type GetNewsData, type GetNewsDatesData, type GetNewsDatesError, type GetNewsDatesResponse, type GetNewsError, type GetNewsResponse, type GetPageData, type GetPageError, type GetPageResponse, type GetPagesData, type GetPagesError, type GetPagesResponse, type GetPlaybackTokenData, type GetPlaybackTokenError, type GetPlaybackTokenResponse, type GetProductData, type GetProductError, type GetProductResponse, type GetProductsData, type GetProductsError, type GetProductsResponse, type GetProfileData, type GetProfileError, type GetProfileEventsData, type GetProfileEventsError, type GetProfileEventsResponse, type GetProfileProductsData, type GetProfileProductsError, type GetProfileProductsResponse, type GetProfileResponse, type GetProfilesData, type GetProfilesError, type GetProfilesResponse, type GetPublicLinkPreviewData, type GetPublicLinkPreviewError, type GetPublicLinkPreviewResponse, type GetSiteByDomainData, type GetSiteByDomainError, type GetSiteByDomainResponse, type GetSiteData, type GetSiteError, type GetSiteResponse, type GetStripeKeyStatusData, type GetStripeKeyStatusError, type GetStripeKeyStatusResponse, type GetTagsData, type GetTagsError, type GetTagsResponse, type LinkPreview, type ListMediaCollectionRolesData, type ListMediaCollectionRolesError, type ListMediaCollectionRolesResponse, type ListMediaCollectionsData, type ListMediaCollectionsError, type ListMediaCollectionsResponse, type ListMediaItemRolesData, type ListMediaItemRolesError, type ListMediaItemRolesResponse, type ListSiteDomainsData, type ListSiteDomainsError, type ListSiteDomainsResponse, type LivestreamResponse, type LocalizedContent, type LocationSlim, type MediaCollection, type MediaCollectionRole, type MediaItem, type MediaItemRole, type NewsDates, type Page, type Pagination, type PlaybackToken, type Product, type ProductVariant, type Profile, type ProfileSlim, type PublicLinkPreview, type PublicSignInData, type PublicSignInError, type PublicSignInResponse, type PublicSignOutData, type PublicSignOutError, type PublicSignOutResponse, type PublicSignUpData, type PublicSignUpError, type PublicSignUpResponse, type Recipient, type RemoveCustomDomainData, type RemoveCustomDomainError, type RemoveCustomDomainResponse, type RemoveItemFromMediaCollectionData, type RemoveItemFromMediaCollectionError, type RemoveItemFromMediaCollectionResponse, type RemoveRoleFromMediaCollectionData, type RemoveRoleFromMediaCollectionError, type RemoveRoleFromMediaCollectionResponse, type RemoveRoleFromMediaItemData, type RemoveRoleFromMediaItemError, type RemoveRoleFromMediaItemResponse, type RemoveStripeKeyData, type RemoveStripeKeyError, type RemoveStripeKeyResponse, type ReorderMediaCollectionItemData, type ReorderMediaCollectionItemError, type ReorderMediaCollectionItemInput, type ReorderMediaCollectionItemResponse, type SearchAllData, type SearchAllError, type SearchAllResponse, type SearchAllSiteResults, type SearchSiteData, type SearchSiteError, type SearchSiteResponse, type SearchSiteResults, type SendBatchData, type SendBatchError, type SendBatchResponse, type Site, type SiteSettings, type StopEventLivestreamData, type StopEventLivestreamError, type StopEventLivestreamResponse, type StopLivestreamResponse, type StripeKeyStatus, type StripeKeySuccess, type StripeKeyUpdateInput, type Tag, type TagListItem, type TicketOnEvent, type UpdateDraftBatchData, type UpdateDraftBatchError, type UpdateDraftBatchInput, type UpdateDraftBatchResponse, type UpdateEmailConfigData, type UpdateEmailConfigError, type UpdateEmailConfigResponse, type UpdateMediaCollectionData, type UpdateMediaCollectionError, type UpdateMediaCollectionInput, type UpdateMediaCollectionResponse, type UpdateMediaItemData, type UpdateMediaItemError, type UpdateMediaItemInput, type UpdateMediaItemOrderData, type UpdateMediaItemOrderError, type UpdateMediaItemOrderInput, type UpdateMediaItemOrderResponse, type UpdateMediaItemOrderResponse2, type UpdateMediaItemResponse, type UpdateStripeKeyData, type UpdateStripeKeyError, type UpdateStripeKeyResponse, type UpdatedMediaItem, type VerifyDomainData, type VerifyDomainError, type VerifyDomainResponse, type WebSite, cache, type entityType, getEvent, getEventDates, getEvents, getLocalizedContent, getNews, getNewsArticle, getNewsDates, getPage, getPages, getProduct, getProducts, getProfile, getProfileEvents, getProfileProducts, getProfiles, getSite, getSiteKeyByDomain, getTags, type keyType, listSiteDomains, type liveStatus, type liveStatus2, type playbackPolicy, type publishState, type recordType, searchSite, setConfig, type status, type status2, type status3, type status4, type type };
