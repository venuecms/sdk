[**@venuecms/sdk-next**](../Index.md)

***

# Variable: MAX\_PAGE\_LINKS

```ts
const MAX_PAGE_LINKS: 200 = 200;
```

Defined in: [packages/sdk-next/src/components/VenueContent/listings/pagination.ts:58](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/listings/pagination.ts#L58)

How many page hrefs `links.hrefs` carries at most.

A listing of 100k records at a page size of 10 would otherwise put 10k
strings on a component's props. Numbered pagers past this are not a UI
anyone builds, and prev/next is unaffected — but `pageCount` stays exact, so
a consumer mapping over `hrefs` can tell it has been truncated.
