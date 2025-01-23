// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { GetSiteData, GetSiteError, GetSiteResponse, GetEventsData, GetEventsError, GetEventsResponse, GetEventData, GetEventError, GetEventResponse, GetPagesData, GetPagesError, GetPagesResponse, GetPageData, GetPageError, GetPageResponse, GetProfilesData, GetProfilesError, GetProfilesResponse, GetProfileData, GetProfileError, GetProfileResponse, GetProfileEventsData, GetProfileEventsError, GetProfileEventsResponse, GetProductsData, GetProductsError, GetProductsResponse, GetProductData, GetProductError, GetProductResponse } from './types.gen';

export const client = createClient(createConfig());

export const getSite = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetSiteData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetSiteResponse, GetSiteError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/site'
    });
};

export const getEvents = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetEventsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventsResponse, GetEventsError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/events'
    });
};

export const getEvent = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetEventData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetEventResponse, GetEventError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/events/{slug}'
    });
};

export const getPages = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetPagesData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetPagesResponse, GetPagesError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/pages'
    });
};

export const getPage = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetPageData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetPageResponse, GetPageError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/pages/{slug}'
    });
};

export const getProfiles = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProfilesData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetProfilesResponse, GetProfilesError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/profiles'
    });
};

export const getProfile = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProfileData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetProfileResponse, GetProfileError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/profiles/{slug}'
    });
};

export const getProfileEvents = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProfileEventsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetProfileEventsResponse, GetProfileEventsError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/profiles/{slug}/events'
    });
};

export const getProducts = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProductsData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetProductsResponse, GetProductsError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/products'
    });
};

export const getProduct = <ThrowOnError extends boolean = false>(options: OptionsLegacyParser<GetProductData, ThrowOnError>) => {
    return (options?.client ?? client).get<GetProductResponse, GetProductError, ThrowOnError>({
        ...options,
        url: '/api/v2/{siteKey}/public/products/{slug}'
    });
};