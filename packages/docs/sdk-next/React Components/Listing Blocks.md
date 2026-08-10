# Listing Blocks

An editor can drop a listing of events, news, pages, products, or profiles into any rich text content. Those arrive inside the content as nodes whose attributes are that endpoint's filters — a limit, a page, tags, an ordering, and so on.

`VenueContent` recognises those nodes, validates the attributes, queries the endpoint, and hands the records to a component you supply. You write how a listing *looks*; the SDK does the fetching.

## Rendering a listing

Listing components go on the same `contentStyles` map as your class names, keyed by the listing's node type. A string value is a class name, a function value is a listing component — no node type takes both, so the two can share one object.

```tsx
import { VenueContent, getLocalizedContent } from "@venuecms/sdk-next";
import type { ContentEntries, Page } from "@venuecms/sdk-next";

// Built per request rather than kept as a module constant: a record's title
// lives on its localized content, so a listing component needs the locale the
// page is rendering in. `getLocalizedContent` is the same helper you already use
// for the page itself.
const contentStyles = (locale: string): ContentEntries => ({
  p: "my-4 text-sm",
  h2: "text-xl",

  eventListing: ({ records }) => (
    <ul className="my-8 flex flex-col gap-4">
      {records.map((event) => (
        <li key={event.id}>
          <a href={`/events/${event.slug}`}>
            {getLocalizedContent(event.localizedContent, locale).content.title}
          </a>
        </li>
      ))}
    </ul>
  ),
});

export const PageBody = ({ page, locale }: { page: Page; locale: string }) => {
  const { content } = getLocalizedContent(page.localizedContent, locale);

  return (
    <VenueContent content={content} contentStyles={contentStyles(locale)} />
  );
};
```

The available keys are `eventListing`, `newsListing`, `pageListing`, `productListing`, and `profileListing`. Leave one off and the renderer keeps whatever it would otherwise do with that node — nothing is drawn in its place.

A component is handed:

| Prop | What it is |
| --- | --- |
| `records` | The records for this block's page, already fetched |
| `site` | The site, for the things a record needs it for — a timezone for a date, a currency for a price. Nullable |
| `pagination` | This block's pagination, or `null`. Absent from `pageListing`, which does not paginate |

A listing component is called with its data already resolved, so it is a plain function — nothing awaits it. Use `ListingProps` to type one you declare separately:

```tsx
import type { ListingProps } from "@venuecms/sdk-next";

export const EventListing = ({ records, site, pagination }: ListingProps<"eventListing">) => {
  // ...
};
```

## Pagination

A listing paginates when its author set a page size on the block. Paging is link-based: the page lives in the URL, so the listing stays a Server Component, a page is shareable, and the back button works.

Everything on `pagination` is plain data — strings and numbers, no functions — so these props pass into a Client Component unchanged if you want one.

| Field | What it is |
| --- | --- |
| `page` | The current page, **0-indexed**, as the endpoints index them |
| `pageNumber` | The same page, 1-based, for display |
| `pageSize` | The page size the author set on the block, capped at 100 |
| `count` | **Total** records matching the block's filters across every page, or `null` when the endpoint did not report one |
| `pageCount` | How many pages that is, or `null` whenever `count` is |
| `hasPrev` / `hasNext` | Whether there is a page in that direction |
| `links` | Hrefs for link pagination, or `null` (see below) |

`pagination` is `null` when the author set no page size: the endpoint returned every matching record, so there are no pages to draw.

**Guard `count` and `pageCount` before displaying them.** The products and profiles endpoints declare `count` optional, so both are `null` on a response that omits it. Prev/next still work in that case — `hasNext` falls back to "this page came back full" — but there is no total to show and no numbered pager to build, so `links.hrefs` is empty:

```tsx
{pagination?.count != null && <p>{pagination.count} results</p>}
```

### Paginating with links

Only a route segment can read search params — a listing block sits too deep in the content to ask for them — so pass them down from your page:

```tsx
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale, slug } = await params;
  const search = await searchParams;

  const { data: page } = await getPage({ slug });
  const { content } = getLocalizedContent(page?.localizedContent, locale);

  return (
    <VenueContent
      content={content}
      contentStyles={contentStyles(locale)}
      searchParams={search}
    />
  );
}
```

`pagination.links` is `null` until you do — which is how a missing `searchParams` prop shows up, rather than as hrefs that never move. The records and the counts arrive without it.

With search params threaded through, a prev/next pager:

```tsx
import Link from "next/link";
import { getLocalizedContent } from "@venuecms/sdk-next";
import type { ListingProps } from "@venuecms/sdk-next";

// A factory, so the component can close over the locale — see the first example.
export const eventListing =
  (locale: string) =>
  ({ records, pagination }: ListingProps<"eventListing">) => (
  <>
    <ul className="flex flex-col gap-4">
      {records.map((event) => (
        <li key={event.id}>
          {getLocalizedContent(event.localizedContent, locale).content.title}
        </li>
      ))}
    </ul>

    {pagination?.links ? (
      <nav className="mt-8 flex items-center gap-4">
        {pagination.links.prevHref ? (
          <Link href={pagination.links.prevHref} scroll={false}>
            Previous
          </Link>
        ) : null}

        <span>
          Page {pagination.pageNumber}
          {pagination.pageCount === null ? null : ` of ${pagination.pageCount}`}
        </span>

        {pagination.links.nextHref ? (
          <Link href={pagination.links.nextHref} scroll={false}>
            Next
          </Link>
        ) : null}
      </nav>
    ) : null}
  </>
);
```

`prevHref` and `nextHref` are `null` at the ends of the listing, so a pager renders only the directions it can actually go.

`links.hrefs` gives one href per page if you want a numbered pager — `hrefs[0]` is page 1. It is empty when there is no `count` to number against, so a `.map` over it renders nothing rather than a wrong pager:

```tsx
{pagination?.links ? (
  <nav className="mt-8 flex gap-2">
    {pagination.links.hrefs.map((href, index) => (
      <Link
        key={href}
        href={href}
        scroll={false}
        aria-current={index === pagination.page ? "page" : undefined}
      >
        {index + 1}
      </Link>
    ))}
  </nav>
) : null}
```

The SDK produces hrefs, not link elements — use `next/link`, a plain `<a>`, or your own router's link. `scroll={false}` is worth passing on `next/link`: the listing usually sits mid-article, and the default is to jump to the top of the page on navigation.

Following one of these hrefs is a soft navigation. Next re-renders the server component tree and swaps in the new records — the page is not reloaded, and the rest of the article stays put.

Each href carries every other search param through untouched, so your own `?filter=` survives a page change, and a second listing on the same page keeps its own page while the first one moves.

### Using a Client Component

A listing component is handed data only — records, the site, and pagination that is entirely strings and numbers — so it can be a Client Component if the block needs browser state. Mark that file `"use client"` as usual:

```tsx
// EventListing.tsx
"use client";

import { useState } from "react";
import type { ListingProps } from "@venuecms/sdk-next";

// `locale` is not one of the listing props, so it arrives from the Server
// Component that renders this one — see the wiring below.
export const EventListing = ({
  records,
  locale,
}: ListingProps<"eventListing"> & { locale: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ul className="flex flex-col gap-4">
      {(expanded ? records : records.slice(0, 3)).map((event) => (
        <li key={event.id}>{event.startDate}</li>
      ))}

      {records.length > 3 && !expanded ? (
        <button onClick={() => setExpanded(true)}>Show all</button>
      ) : null}
    </ul>
  );
};
```

The Server Component that builds `contentStyles` is where the two meet. A listing component takes only the props the SDK hands it, so anything else it needs — the locale here — is closed over there, in a file with no `"use client"` on it:

```tsx
// The page, a Server Component
import { EventListing } from "./EventListing";
import type { ContentEntries } from "@venuecms/sdk-next";

const contentStyles = (locale: string): ContentEntries => ({
  eventListing: (props) => <EventListing {...props} locale={locale} />,
});
```

Do this rather than exporting a `(locale) => Component` factory from the `"use client"` file, the way the Server Component examples above do. Everything a `"use client"` module exports is a *reference* to something that runs in the browser, not the thing itself, so the server cannot call it — only render it. `locale` crosses as a prop, which is a string and serializes.

Import types from `@venuecms/sdk-next` freely — type-only imports erase. Do not import its *values* into a `"use client"` file: the package root carries the server-side data fetching and the credentialed SDK underneath it. Localize on the server, where `getLocalizedContent` runs, and pass the result down as a prop.

## Notes

* **`page` is 0-indexed** everywhere, matching the endpoints. `pageNumber` is the 1-based one to display.
* **`count` is the total match**, not the size of the current page — `records.length` is the page — or `null` where the endpoint reported no total.
* **Each block owns its own search param**, named from the listing type and a hash of its filters — `?evt_1a2b3c=2`. Two listings on one page therefore page independently, and adding, removing, or reordering blocks does not shuffle the others' params. Two blocks with identical filters get an ordinal suffix (`_2`) to tell them apart.
* **`pageListing` does not paginate**, so `pagination` is absent from its props rather than always null. A page read has to return every page for parent-path resolution.
* **`links.hrefs` is capped** at `MAX_PAGE_LINKS` (200) entries so a very large listing does not put thousands of strings on your props. `pageCount` stays exact, so you can tell when the list has been truncated. `prevHref`/`nextHref` are unaffected.
* **A listing that matched nothing renders nothing** rather than an empty state — it sits mid-prose, where a "nothing found" message would read as the author's copy. A page *past* the end of a listing that did match still renders, so a reader who overshot gets a pager with a link back.
* **A page is capped at `MAX_PAGE_SIZE` (100) records.** An author who sets a larger page size on the block gets 100; `pagination.pageSize` reports the size actually used, and every record is still reachable across the pages.
* **`page` is capped at `MAX_PAGE` (1000).** A URL asking for a deeper page clamps to it, and a `page` attribute on the block clamps to it. `nextHref` stops there too, so a pager never offers a link that would clamp back to where it was clicked. The endpoints page by offset, so an unbounded page number is an unbounded scan; no pager a reader clicks reaches this far.
* **`count` may be absent** on product and profile responses, which declare it optional. It is then reported as `null` rather than guessed: the records render, prev/next still work off "was this page full", but there is no total to display and `pageCount`/`hrefs` are empty. The one cost is a next link on the last page of a listing whose length is an exact multiple of the page size — it lands on a page with no records. That page still draws, with a pager back, rather than the block disappearing from the article.
* **The URL only overrides the author's page when it names the block.** An author can start a listing on a later page via the block's own `page` attribute; passing `searchParams` does not reset that. `?evt_1a2b3c=0` does override it, since that names the block explicitly — and that is what the generated links write for such a block, so its "Previous" and its "1" reach page 0 rather than falling back to where the author started. A block whose author left `page` alone keeps the shorter first-page href, with no `=0` in it.
* **A padded query string is not carried into every link.** Each page href reflects the rest of the query so your own params survive pagination, but there is a budget on how much — far above any real page's query string — since one request's params otherwise multiply into every one of up to 200 hrefs per block. The budget is measured on the encoded href, so it is a bound on what gets written rather than on what arrived.
* **This package ships no server actions.** Pagination is entirely server-rendered, and everything on `pagination` is data. An action is a public HTTP endpoint whose arguments its caller supplies, so one shipped from an SDK would be an endpoint you mount without having written it; a build check fails if a `"use server"` ever reaches the output. If you want records appended in place rather than a page navigation, write that action in your own app, where you decide what it accepts.
