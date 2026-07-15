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

type CreditPosition = "overlay" | "below";

export const VenueImage = ({
  className,
  image,
  aspect,
  props,
  creditPosition = "overlay",
  creditWrapperClassName,
  creditClassName,
  hideCredits = false,
}: {
  className?: string;
  image?: Partial<MediaItem>;
  aspect?: keyof typeof ASPECTS;
  props?: object;
  creditPosition?: CreditPosition;
  creditWrapperClassName?: string;
  creditClassName?: string;
  hideCredits?: boolean;
}) => {
  if (image) {
    const imageUrl = getPublicImage(image);

    if (imageUrl) {
      const { metadata, altText, credit } = image;
      const { width, height } = metadata ?? {};

      return (
        <CreditWrapper
          credit={credit}
          position={creditPosition}
          wrapperClassName={creditWrapperClassName}
          creditClassName={creditClassName}
          hideCredits={hideCredits}
        >
          {aspect ? (
            <ImageWrapper aspect={aspect}>
              <ResponsiveImage
                src={imageUrl}
                image={image}
                className={className}
              />
            </ImageWrapper>
          ) : (
            <Image
              src={imageUrl}
              alt={(altText as string) ?? "image"}
              width={(width as number) ?? 2048}
              height={(height as number) ?? 2048}
              className={className}
              {...props}
            />
          )}
        </CreditWrapper>
      );
    }
  }

  if (aspect) {
    return (
      <ImageWrapper aspect={aspect}>
        <ResponsiveImage src="" className={className} />
      </ImageWrapper>
    );
  }

  return null; // TODO: return a placeholder
};

const CreditWrapper = ({
  children,
  credit,
  position = "overlay",
  wrapperClassName,
  creditClassName,
  hideCredits = false,
}: {
  children?: ReactNode;
  credit?: string | null;
  position?: CreditPosition;
  wrapperClassName?: string;
  creditClassName?: string;
  hideCredits?: boolean;
}) => {
  if (!credit || hideCredits) {
    return children;
  }

  if (position === "below") {
    return (
      <div className={cn("flex flex-col gap-0", wrapperClassName)}>
        {children}
        <div className={cn("text-end text-xs text-muted", creditClassName)}>
          {credit}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", wrapperClassName)}>
      {children}
      <div
        className={cn(
          "absolute bottom--1 right-0 text-end text-xs text-muted opacity-60",
          creditClassName,
        )}
      >
        {credit}
      </div>
    </div>
  );
};

// wrapper to contain the ResponsiveImage
const ImageWrapper = ({
  children,
  aspect,
}: {
  children?: ReactNode;
  aspect: keyof typeof ASPECTS;
}) => (
  <div className="flex h-full w-full flex-col gap-1">
    <div
      className={cn(
        "relative h-full w-full bg-cover bg-center",
        ASPECTS[aspect],
      )}
    >
      {children}
    </div>
  </div>
);
