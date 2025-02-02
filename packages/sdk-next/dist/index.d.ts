import { RequestOptions } from '@hey-api/client-next';

type MediaItem = {
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
type SiteSettings = {
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
type Site = {
    name?: string | null;
    description?: string | null;
    defaultLocale?: string | null;
    timeZone?: string | null;
    image?: MediaItem;
    settings: SiteSettings;
};
type LocalizedContent = {
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
type Location = {
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
type Profile = {
    slug: string;
    site: Site;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
};
type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: string | null;
    currency?: string | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
};
type Event = {
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
type Page = {
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
type ProductVariant = {
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
type Product = {
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
type GetSiteData = {
    body?: never;
    path: {
        siteKey: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/site';
};
type GetSiteErrors = {
    /**
     * Site not found
     */
    404: unknown;
};
type GetSiteResponses = {
    /**
     * Retrieve site information
     */
    200: Site;
};
type GetSiteResponse = GetSiteResponses[keyof GetSiteResponses];
type GetEventsData = {
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
type GetEventsResponses = {
    /**
     * Retrieve a list of Events
     */
    200: {
        records: Array<Event>;
    };
};
type GetEventsResponse = GetEventsResponses[keyof GetEventsResponses];
type GetEventData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/events/{slug}';
};
type GetEventErrors = {
    /**
     * Event not found
     */
    404: unknown;
};
type GetEventResponses = {
    /**
     * Retrieve an Event
     */
    200: Event;
};
type GetEventResponse = GetEventResponses[keyof GetEventResponses];
type GetPagesData = {
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
type GetPagesResponses = {
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
type GetPagesResponse = GetPagesResponses[keyof GetPagesResponses];
type GetPageData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/pages/{slug}';
};
type GetPageErrors = {
    /**
     * Page not found
     */
    404: unknown;
};
type GetPageResponses = {
    /**
     * Retrieve a Page
     */
    200: Page & {
        parent?: {
            [key: string]: unknown;
        };
    };
};
type GetPageResponse = GetPageResponses[keyof GetPageResponses];
type GetProfilesData = {
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
type GetProfilesResponses = {
    /**
     * Retrieve a list of Profiles
     */
    200: {
        records: Array<Profile>;
        count: number;
    };
};
type GetProfilesResponse = GetProfilesResponses[keyof GetProfilesResponses];
type GetProfileData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/profiles/{slug}';
};
type GetProfileErrors = {
    /**
     * Profile not found
     */
    404: unknown;
};
type GetProfileResponses = {
    /**
     * Retrieve a Profile
     */
    200: Profile;
};
type GetProfileResponse = GetProfileResponses[keyof GetProfileResponses];
type GetProfileEventsData = {
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
type GetProfileEventsErrors = {
    /**
     * Profile not found
     */
    404: unknown;
};
type GetProfileEventsResponses = {
    /**
     * Retrieve events for a Profile
     */
    200: {
        records: Array<Event>;
        count: number;
    };
};
type GetProfileEventsResponse = GetProfileEventsResponses[keyof GetProfileEventsResponses];
type GetProductsData = {
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
type GetProductsResponses = {
    /**
     * Retrieve a list of Products
     */
    200: {
        records: Array<Product>;
        count: number;
    };
};
type GetProductsResponse = GetProductsResponses[keyof GetProductsResponses];
type GetProductData = {
    body?: never;
    path: {
        siteKey: string;
        slug: string;
    };
    query?: never;
    url: '/api/v2/{siteKey}/public/products/{slug}';
};
type GetProductErrors = {
    /**
     * Product not found
     */
    404: unknown;
};
type GetProductResponses = {
    /**
     * Retrieve a Product
     */
    200: Product;
};
type GetProductResponse = GetProductResponses[keyof GetProductResponses];
type ClientOptions = {
    baseUrl: 'https://app.venuecms.com' | (string & {});
};

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
    response: Response;
}>;
/**
 * @category Events
 */
declare const getEvents: (params?: GetEventsData["query"]) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: {
        records: Array<Event>;
    };
    error: undefined;
}) & {
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
    data: {
        records: Array<Page & {
            parent?: {
                [key: string]: unknown;
            };
        }>;
    };
    error: undefined;
}) & {
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
    data: Page & {
        parent?: {
            [key: string]: unknown;
        };
    };
    error: undefined;
}) & {
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
    data: {
        records: Array<Profile>;
        count: number;
    };
    error: undefined;
}) & {
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
    data: {
        records: Array<Event>;
        count: number;
    };
    error: undefined;
}) & {
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
    data: {
        records: Array<Product>;
        count: number;
    };
    error: undefined;
}) & {
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
    response: Response;
}>;

export { type ClientOptions, type Event, type GetEventData, type GetEventErrors, type GetEventResponse, type GetEventResponses, type GetEventsData, type GetEventsResponse, type GetEventsResponses, type GetPageData, type GetPageErrors, type GetPageResponse, type GetPageResponses, type GetPagesData, type GetPagesResponse, type GetPagesResponses, type GetProductData, type GetProductErrors, type GetProductResponse, type GetProductResponses, type GetProductsData, type GetProductsResponse, type GetProductsResponses, type GetProfileData, type GetProfileErrors, type GetProfileEventsData, type GetProfileEventsErrors, type GetProfileEventsResponse, type GetProfileEventsResponses, type GetProfileResponse, type GetProfileResponses, type GetProfilesData, type GetProfilesResponse, type GetProfilesResponses, type GetSiteData, type GetSiteErrors, type GetSiteResponse, type GetSiteResponses, type LocalizedContent, type Location, type MediaItem, type Page, type Product, type ProductVariant, type Profile, type Site, type SiteSettings, type TicketOnEvent, getEvent, getEvents, getLocalizedContent, getPage, getPages, getProduct, getProducts, getProfile, getProfileEvents, getProfiles, getSite, setConfig };
