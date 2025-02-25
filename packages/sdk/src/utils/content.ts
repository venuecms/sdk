import { LocalizedContent } from "../client";

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
export const getLocalizedContent = (
  localizedContent: Array<LocalizedContent> | undefined,
  locale: string,
): { content: LocalizedContent; currentLocale: string } => {
  const currentLocale = locale;

  const foundLocalizedContent = localizedContent?.find(
    (content) => content.locale === currentLocale,
  );

  const content = foundLocalizedContent ?? localizedContent?.[0] ?? ({}) as LocalizedContent;

  return { content, currentLocale };
};
