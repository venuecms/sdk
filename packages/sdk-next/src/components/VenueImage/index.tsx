import { CSSProperties, ReactNode } from "react";
import { MediaItem } from "@venuecms/sdk";
import Image, { ImageProps, StaticImageData } from "next/image";

import ResponsiveImage, { defaultBlur } from "./ResponsiveImage";
import { cn } from "@/lib/utils";
import { getPublicImage } from "../utils/image";

/**
 * The built-in shorthands resolve to a CSS `aspect-ratio` rather than to the
 * Tailwind classes they used to, because those class names only ever appeared
 * inside this package's `dist`. A consumer whose Tailwind `content` globs do
 * not cover `node_modules` never generated them, so the wrapper lost its only
 * source of height and collapsed every image to zero. Any other string is
 * still passed through as a class name -- that comes from consumer source,
 * which their own Tailwind build already scans.
 */
const ASPECT_RATIOS = {
  square: "1 / 1",
  video: "16 / 9",
};

type Aspect = keyof typeof ASPECT_RATIOS | string;

/**
 * Escape hatch forwarded to the underlying next/image. `src` is omitted
 * because it is always derived from `image`; `fallback` is what to show when
 * there is no image at all.
 */
export type VenueImageProps = {
  fallback?: StaticImageData;
} & Omit<Partial<ImageProps>, "src">;

export const VenueImage = ({
  className,
  image,
  aspect,
  props,
}: {
  className?: string;
  image?: Partial<MediaItem>;
  aspect?: Aspect;
  props?: VenueImageProps;
}) => {
  // Pulled out of `props` so that every branch below can honour them. They
  // used to reach only the `aspect` branch, which meant a caller's brand
  // placeholder was silently dropped everywhere else.
  const { fallback, placeholder, blurDataURL, ...imageProps } = props ?? {};

  const imageUrl = image ? getPublicImage(image) : undefined;

  if (image && imageUrl) {
    const { metadata, altText } = image;
    const { width, height } = metadata ?? {};

    if (aspect) {
      return (
        <ImageWrapper aspect={aspect}>
          <ResponsiveImage
            src={imageUrl}
            image={image}
            className={className}
            fallback={fallback}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            {...imageProps}
          />
        </ImageWrapper>
      );
    }

    return (
      <Image
        src={imageUrl}
        alt={(altText as string) ?? "image"}
        width={(width as number) ?? 2048}
        height={(height as number) ?? 2048}
        className={className}
        placeholder={placeholder ?? "blur"}
        blurDataURL={blurDataURL ?? defaultBlur}
        {...imageProps}
      />
    );
  }

  if (aspect) {
    return (
      <ImageWrapper aspect={aspect}>
        <ResponsiveImage
          src=""
          className={className}
          fallback={fallback}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          {...imageProps}
        />
      </ImageWrapper>
    );
  }

  // With no aspect box there is no height to fill, so there is nothing to size
  // a placeholder against unless the caller supplied one. Callers that pass a
  // `fallback` opt into rendering it; everyone else keeps getting null.
  if (fallback) {
    return (
      <Image
        src={fallback.src}
        alt=""
        width={fallback.width}
        height={fallback.height}
        className={className}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...imageProps}
      />
    );
  }

  return null;
};

/**
 * Wrapper to contain the ResponsiveImage.
 *
 * The structural styles are inline rather than Tailwind classes on purpose:
 * they ship inside this package, so a consumer who does not scan `node_modules`
 * would purge them. `position: relative` in particular is load-bearing -- a
 * `fill` image whose wrapper loses it escapes to the nearest positioned
 * ancestor.
 */
const ImageWrapper = ({
  children,
  aspect,
}: {
  children?: ReactNode;
  aspect: Aspect;
}) => {
  const ratio = ASPECT_RATIOS[aspect as keyof typeof ASPECT_RATIOS];

  const boxStyle: CSSProperties = {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ...(ratio ? { aspectRatio: ratio } : {}),
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        height: "100%",
        width: "100%",
      }}
    >
      {/* A non-shorthand aspect is a consumer-authored class, so it stays one. */}
      <div className={cn(ratio ? undefined : aspect)} style={boxStyle}>
        {children}
      </div>
    </div>
  );
};
