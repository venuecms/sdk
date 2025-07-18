import { RequestOptions } from '@hey-api/client-fetch';

type CustomSchemaData = {
    data?: {
        [key: string]: unknown;
    } | null;
    customSchemaId?: (string) | null;
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
    location?: Location;
    artists: Array<{
        profile: Profile;
    }>;
    tickets?: Array<TicketOnEvent>;
    tags: Array<{
        tagId: string;
        tag: {
            id: string;
            siteId: string;
            title: string;
        };
    }>;
    custom?: Array<CustomSchemaData>;
    localizedContent: Array<LocalizedContent>;
};
type publishState = 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';
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
    localizedContent: Array<LocalizedContent>;
    isDefault?: boolean;
};
type MediaItem = {
    siteId: string;
    uploaded: boolean;
    inline: boolean;
    url?: (string) | null;
    mimeType?: (string) | null;
    size: number;
    metadata?: {
        [key: string]: unknown;
    } | null;
    title?: (string) | null;
    caption?: (string) | null;
    credit?: (string) | null;
    altText?: (string) | null;
};
type Page = {
    id: string;
    order: number;
    slug: string;
    featured: boolean;
    featuredExpiration?: (string) | null;
    date?: (string) | null;
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
    localizedContent: Array<LocalizedContent>;
    artists?: Array<{
        profile: Profile;
    }>;
};
type recordType = 'SOURCE' | 'PUBLISHED' | 'REVISION';
type Product = {
    siteId: string;
    slug: string;
    order: number;
    featured: boolean;
    featuredExpiration?: (string) | null;
    author?: (string) | null;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    artists: Array<{
        profile: Profile;
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
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
    custom?: Array<CustomSchemaData>;
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
        site: {
            defaultLocale?: (string) | null;
            settings?: {
                [key: string]: unknown;
            } | null;
        };
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
        site: {
            defaultLocale?: (string) | null;
            settings?: {
                [key: string]: unknown;
            } | null;
        };
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
        site: {
            defaultLocale?: (string) | null;
            settings?: {
                [key: string]: unknown;
            } | null;
        };
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
        site: {
            defaultLocale?: (string) | null;
            settings?: {
                [key: string]: unknown;
            } | null;
        };
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
type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: (string) | null;
    currency?: (string) | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
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
        upcoming?: (boolean) | null;
    };
};
type GetEventsResponse = ({
    records: Array<Event>;
});
type GetEventsError = unknown;
type GetEventData = {
    path: {
        siteKey: string;
        slug: string;
    };
};
type GetEventResponse = (Event);
type GetEventError = (unknown);
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
    };
};
type GetPagesResponse = ({
    records: Array<(Page & {
        parent?: {
            [key: string]: unknown;
        };
    })>;
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
        type?: 'member';
    };
};
type GetProfilesResponse = ({
    records: Array<Profile>;
    count: number;
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
        upcoming?: (boolean) | null;
    };
};
type GetProfileEventsResponse = ({
    records: Array<Event>;
    count: number;
});
type GetProfileEventsError = (unknown);
type GetProductsData = {
    path: {
        siteKey: string;
    };
    query?: {
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
    };
};
type GetProductsResponse = ({
    records: Array<Product>;
    count: number;
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
        dir?: 'asc' | 'desc';
        limit?: (number) | null;
        orderBy?: string;
        page?: (number) | null;
        query?: (string) | null;
    };
};
type SearchSiteResponse = (SearchSiteResults);
type SearchSiteError = (unknown);
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
}) => Promise<({
    data: undefined;
    error: unknown;
} | {
    data: GetSiteByDomainResponse;
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

export { type CustomSchemaData, type Event, type GetEventData, type GetEventError, type GetEventResponse, type GetEventsData, type GetEventsError, type GetEventsResponse, type GetPageData, type GetPageError, type GetPageResponse, type GetPagesData, type GetPagesError, type GetPagesResponse, type GetProductData, type GetProductError, type GetProductResponse, type GetProductsData, type GetProductsError, type GetProductsResponse, type GetProfileData, type GetProfileError, type GetProfileEventsData, type GetProfileEventsError, type GetProfileEventsResponse, type GetProfileResponse, type GetProfilesData, type GetProfilesError, type GetProfilesResponse, type GetSiteByDomainData, type GetSiteByDomainError, type GetSiteByDomainResponse, type GetSiteData, type GetSiteError, type GetSiteResponse, type LocalizedContent, type Location, type MediaItem, type Page, type Product, type ProductVariant, type Profile, type SearchSiteData, type SearchSiteError, type SearchSiteResponse, type SearchSiteResults, type Site, type SiteSettings, type TicketOnEvent, type WebSite, getEvent, getEvents, getLocalizedContent, getPage, getPages, getProduct, getProducts, getProfile, getProfileEvents, getProfiles, getSite, getSiteKeyByDomain, type publishState, type recordType, searchSite, setConfig };
