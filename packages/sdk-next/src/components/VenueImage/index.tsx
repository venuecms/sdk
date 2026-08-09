import { ReactNode } from "react";
import { MediaItem } from "@venuecms/sdk";
import Image from "next/image";

import ResponsiveImage from "./ResponsiveImage";
import { cn } from "@/lib/utils";
import { getPublicImage } from "../utils/image";

const ASPECTS = {
  square: "aspect-square",
  video: "aspect-video",
};

const getFallThroughAspect = (aspect: keyof typeof ASPECTS | string) => {
  const resolvedAspect = ASPECTS[aspect as keyof typeof ASPECTS];

  if (resolvedAspect) {
    return resolvedAspect;
  }

  return aspect;
};

export const VenueImage = ({
  className,
  image,
  aspect,
  props,
}: {
  className?: string;
  image?: Partial<MediaItem>;
  aspect?: keyof typeof ASPECTS | string;
  props?: object;
}) => {
  if (image) {
    const imageUrl = getPublicImage(image);

    if (imageUrl) {
      const { metadata, altText } = image;
      const { width, height } = metadata ?? {};

      if (aspect) {
        return (
          <ImageWrapper aspect={aspect}>
            <ResponsiveImage
              src={imageUrl}
              image={image}
              className={className}
              {...props}
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
          {...props}
        />
      );
    }
  }

  if (aspect) {
    return (
      <ImageWrapper aspect={aspect}>
        <ResponsiveImage src="" className={className} {...props} />
      </ImageWrapper>
    );
  }

  return null; // TODO: return a placeholder
};

// wrapper to contain the ResponsiveImage
const ImageWrapper = ({
  children,
  aspect,
}: {
  children?: ReactNode;
  aspect: keyof typeof ASPECTS | string;
}) => (
  <div className="flex h-full w-full flex-col gap-1">
    <div
      className={cn(
        "relative h-full w-full bg-cover bg-center",
        getFallThroughAspect(aspect),
      )}
    >
      {children}
    </div>
  </div>
);
