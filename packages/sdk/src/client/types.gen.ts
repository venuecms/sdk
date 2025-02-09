// This file is auto-generated by @hey-api/openapi-ts

export type Event = {
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
    localizedContent: Array<LocalizedContent>;
};

export type publishState = 'DRAFT' | 'REQUEST' | 'PUBLISHED' | 'CANCELLED';

export type LocalizedContent = {
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

export type Location = {
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

export type MediaItem = {
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

export type Page = {
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
    localizedContent: Array<LocalizedContent>;
    artists?: Array<{
        profile: Profile;
    }>;
};

export type recordType = 'SOURCE' | 'PUBLISHED' | 'REVISION';

export type Product = {
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
};

export type ProductVariant = {
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

export type Profile = {
    siteId: string;
    slug: string;
    image?: MediaItem;
    localizedContent: Array<LocalizedContent>;
};

export type Site = {
    id: string;
    name?: (string) | null;
    description?: (string) | null;
    defaultLocale?: (string) | null;
    timeZone?: (string) | null;
    image?: MediaItem;
    settings: SiteSettings;
};

export type SiteSettings = {
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

export type TicketOnEvent = {
    name: string;
    price: number;
    externalLink?: (string) | null;
    currency?: (string) | null;
    roles: Array<unknown>;
    localizedContent?: Array<LocalizedContent>;
};

export type GetSiteData = {
    path: {
        siteKey: string;
    };
};

export type GetSiteResponse = (Site);

export type GetSiteError = (unknown);

export type GetEventsData = {
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

export type GetEventsResponse = ({
    records: Array<Event>;
});

export type GetEventsError = unknown;

export type GetEventData = {
    path: {
        siteKey: string;
        slug: string;
    };
};

export type GetEventResponse = (Event);

export type GetEventError = (unknown);

export type GetPagesData = {
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

export type GetPagesResponse = ({
    records: Array<(Page & {
    parent?: {
        [key: string]: unknown;
    };
})>;
});

export type GetPagesError = unknown;

export type GetPageData = {
    path: {
        siteKey: string;
        slug: string;
    };
};

export type GetPageResponse = ((Page & {
    parent?: {
        [key: string]: unknown;
    };
}));

export type GetPageError = (unknown);

export type GetProfilesData = {
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

export type GetProfilesResponse = ({
    records: Array<Profile>;
    count: number;
});

export type GetProfilesError = unknown;

export type GetProfileData = {
    path: {
        siteKey: string;
        slug: string;
    };
};

export type GetProfileResponse = (Profile);

export type GetProfileError = (unknown);

export type GetProfileEventsData = {
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

export type GetProfileEventsResponse = ({
    records: Array<Event>;
    count: number;
});

export type GetProfileEventsError = (unknown);

export type GetProductsData = {
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

export type GetProductsResponse = ({
    records: Array<Product>;
    count: number;
});

export type GetProductsError = unknown;

export type GetProductData = {
    path: {
        siteKey: string;
        slug: string;
    };
};

export type GetProductResponse = (Product);

export type GetProductError = (unknown);