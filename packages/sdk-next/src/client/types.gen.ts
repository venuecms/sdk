// This file is auto-generated by @hey-api/openapi-ts

export type MediaItem = {
    siteId: string;
    uploaded: boolean;
    inline: boolean;
    url?: string | null;
    mimeType?: string | null;
    size: number;
    metadata?: {
        [key: string]: unknown;
    } | null;
    title?: string | null;
    caption?: string | null;
    credit?: string | null;
    altText?: string | null;
};

export type SiteSettings = {
    locale?: {
        default: string;
        supported: Array<string>;
    };
    defaults?: {
        currency?: string;
    };
    publicSite?: {
        baseUrl?: string;
        template?: {
            id?: string;
            config?: {
                themeId?: string;
                fontName?: string;
            };
        };
    };
};

export type Site = {
    name?: string | null;
    description?: string | null;
    defaultLocale?: string | null;
    timeZone?: string | null;
    image?: MediaItem;
    settings: SiteSettings;
};

export type LocalizedContent = {
    siteId: string;
    locale: string;
    title?: string | null;
    content?: string | null;
    shortContent?: string | null;
    extraContent?: string | null;
    excerpt?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    keywords?: string | null;
    contentJSON?: {
        [key: string]: unknown;
    } | null;
};

export type Location = {
    site: Site;
    image?: MediaItem;
    address?: string | null;
    address2?: string | null;
    state?: string | null;
    region?: string | null;
    city?: string | null;
    zipCode?: string | null;
    country?: string | null;
    externalLink?: string | null;
    mapLink?: string | null;
    lat?: number | null;
    lng?: number | null;
    localizedContent: Array<LocalizedContent>;
};

export type Profile = {
    slug: string;
    site: Site;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
};

export type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: string | null;
    currency?: string | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
};

export type Event = {
    id: string;
    site: Site;
    description?: string | null;
    slug: string;
    image?: MediaItem;
    startDate: string;
    endDate: string;
    hasTime: boolean;
    publishState: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
    location?: Location;
    artists: Array<{
        profile: Profile;
    }>;
    tickets?: Array<TicketOnEvent>;
    localizedContent: Array<LocalizedContent>;
};

export type Page = {
    id: string;
    order: number;
    slug: string;
    featured: boolean;
    featuredExpiration?: string | null;
    date?: string | null;
    parentId?: string | null;
    site: Site;
    image?: MediaItem;
    parent?: {
        id: string;
        siteId: string;
        createdAt: string;
        updatedAt: string;
        recordType: 'SOURCE' | 'PUBLISHED' | 'REVISION';
        revisionId?: number | null;
        publishState: 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
        source?: string | null;
        publishedId?: string | null;
        dirty: boolean;
        order: number;
        visible: boolean;
        slug: string;
        featured: boolean;
        featuredExpiration?: string | null;
        date?: string | null;
        imageId?: string | null;
        userId?: string | null;
        parentId?: string | null;
    };
    fullPath?: string | null;
    roles: Array<{
        pageId: string;
        accessRoleId: string;
        accessRole: {
            id: string;
            siteId: string;
            createdAt: string;
            updatedAt: string;
            name: string;
            description?: string | null;
        };
    }>;
    localizedContent: Array<LocalizedContent>;
    artists?: Array<{
        profile: Profile;
    }>;
};

export type ProductVariant = {
    id: string;
    siteId: string;
    order: number;
    price: number;
    currency?: string | null;
    quantity: number;
    externalLink?: string | null;
    catalogID?: string | null;
    publicationDate?: string | unknown;
    productTypeId?: string | null;
    productId?: string | null;
    image?: MediaItem & unknown;
    productType?: {
        id: string;
        type: string;
    } | null;
};

export type Product = {
    siteId: string;
    slug: string;
    order: number;
    featured: boolean;
    featuredExpiration?: string | null;
    author?: string | null;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    artists: Array<{
        profile: {
            slug: string;
            image?: MediaItem;
            localizedContent: Array<LocalizedContent>;
        };
    }>;
    variants?: Array<ProductVariant>;
};

export type GetSiteData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/site';
};

export type GetSiteErrors = {
    /**
     * Site not found
     */
    404: unknown;
};

export type GetSiteResponses = {
    /**
     * Retrieve site information
     */
    200: Site;
};

export type GetSiteResponse = GetSiteResponses[keyof GetSiteResponses];

export type GetEventsData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: {
        limit?: number | null;
        page?: number | null;
        orderBy?: string;
        dir?: 'asc' | 'desc';
        featured?: boolean | null;
        upcoming?: boolean | null;
        lt?: number | null;
        gt?: number | null;
        legacyId?: string;
    };
    url: '/api/v2/{siteKey}/public/events';
};

export type GetEventsResponses = {
    /**
     * Retrieve a list of Events
     */
    200: {
        records: Array<Event>;
    };
};

export type GetEventsResponse = GetEventsResponses[keyof GetEventsResponses];

export type GetEventData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/events/{slug}';
};

export type GetEventErrors = {
    /**
     * Event not found
     */
    404: unknown;
};

export type GetEventResponses = {
    /**
     * Retrieve an Event
     */
    200: Event;
};

export type GetEventResponse = GetEventResponses[keyof GetEventResponses];

export type GetPagesData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: {
        limit?: number | null;
        page?: number | null;
        orderBy?: string;
        dir?: 'asc' | 'desc';
        featured?: boolean | null;
    };
    url: '/api/v2/{siteKey}/public/pages';
};

export type GetPagesResponses = {
    /**
     * Retrieve a list of Pages
     */
    200: {
        records: Array<Page & {
            parent?: {
                [key: string]: unknown;
            };
        }>;
    };
};

export type GetPagesResponse = GetPagesResponses[keyof GetPagesResponses];

export type GetPageData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/pages/{slug}';
};

export type GetPageErrors = {
    /**
     * Page not found
     */
    404: unknown;
};

export type GetPageResponses = {
    /**
     * Retrieve a Page
     */
    200: Page & {
        parent?: {
            [key: string]: unknown;
        };
    };
};

export type GetPageResponse = GetPageResponses[keyof GetPageResponses];

export type GetProfilesData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: {
        limit?: number | null;
        page?: number | null;
        orderBy?: string;
        dir?: 'asc' | 'desc';
        type?: 'member';
    };
    url: '/api/v2/{siteKey}/public/profiles';
};

export type GetProfilesResponses = {
    /**
     * Retrieve a list of Profiles
     */
    200: {
        records: Array<Profile>;
        count: number;
    };
};

export type GetProfilesResponse = GetProfilesResponses[keyof GetProfilesResponses];

export type GetProfileData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/profiles/{slug}';
};

export type GetProfileErrors = {
    /**
     * Profile not found
     */
    404: unknown;
};

export type GetProfileResponses = {
    /**
     * Retrieve a Profile
     */
    200: Profile;
};

export type GetProfileResponse = GetProfileResponses[keyof GetProfileResponses];

export type GetProfileEventsData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: {
        limit?: number | null;
        page?: number | null;
        orderBy?: string;
        dir?: 'asc' | 'desc';
        featured?: boolean | null;
        upcoming?: boolean | null;
        lt?: number | null;
        gt?: number | null;
        legacyId?: string;
    };
    url: '/api/v2/{siteKey}/public/profiles/{slug}/events';
};

export type GetProfileEventsErrors = {
    /**
     * Profile not found
     */
    404: unknown;
};

export type GetProfileEventsResponses = {
    /**
     * Retrieve events for a Profile
     */
    200: {
        records: Array<Event>;
        count: number;
    };
};

export type GetProfileEventsResponse = GetProfileEventsResponses[keyof GetProfileEventsResponses];

export type GetProductsData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: {
        limit?: number | null;
        page?: number | null;
        orderBy?: string;
        dir?: 'asc' | 'desc';
    };
    url: '/api/v2/{siteKey}/public/products';
};

export type GetProductsResponses = {
    /**
     * Retrieve a list of Products
     */
    200: {
        records: Array<Product>;
        count: number;
    };
};

export type GetProductsResponse = GetProductsResponses[keyof GetProductsResponses];

export type GetProductData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/products/{slug}';
};

export type GetProductErrors = {
    /**
     * Product not found
     */
    404: unknown;
};

export type GetProductResponses = {
    /**
     * Retrieve a Product
     */
    200: Product;
};

export type GetProductResponse = GetProductResponses[keyof GetProductResponses];

export type ClientOptions = {
    baseUrl: 'https://app.venuecms.com' | (string & {});
};