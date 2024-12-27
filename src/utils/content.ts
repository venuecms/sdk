import { LocalizedContent } from "../client";

/**
 * @category Utilities
 */
export const getLocalizedContent = (
  localizedContent: Array<LocalizedContent> | undefined,
  locale: string,
) => {
  const currentLocale = locale;

  const content = (localizedContent?.find(
    (content) => content.locale === currentLocale,
  ) ?? {}) as LocalizedContent;

  return { content, currentLocale };
};
