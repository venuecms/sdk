import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { VenueImage } from "./index";

const brand = { src: "/brand.png", width: 10, height: 10, blurDataURL: "" };

/**
 * The aspect branch nests an async ResponsiveImage that renderToStaticMarkup
 * cannot render, so walk the sync wrapper by hand instead.
 */
const renderWrapper = (el: ReactElement) => {
  const wrapper = el as ReactElement<Record<string, unknown>>;
  const outer = (wrapper.type as (p: unknown) => ReactElement)(
    wrapper.props,
  ) as ReactElement<Record<string, unknown>>;
  const box = outer.props.children as ReactElement<Record<string, unknown>>;
  return {
    outer,
    box,
    child: box.props.children as ReactElement<Record<string, unknown>>,
  };
};

describe("VenueImage", () => {
  it("renders the image and uses altText", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{
          url: "photo.jpg",
          altText: "A described photo",
          metadata: { width: 800, height: 600 },
        }}
      />,
    );

    expect(html).toContain('alt="A described photo"');
    expect(html).toContain("photo.jpg");
  });

  it("never renders photo credit (credit is owned by consumers)", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{ url: "photo.jpg", altText: "alt", credit: "Jane Doe" }}
      />,
    );

    expect(html).not.toContain("Jane Doe");
    expect(html).not.toContain("opacity-60");
    expect(html).not.toContain("absolute");
    expect(html).toContain("photo.jpg");
  });

  it("forwards custom props (e.g. blurDataURL) to the underlying image", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{
          url: "photo.jpg",
          altText: "alt",
          metadata: { width: 800, height: 600 },
        }}
        props={{ blurDataURL: "data:image/png;base64,CUSTOMBLUR" }}
      />,
    );

    expect(html).toContain("data:image/png;base64,CUSTOMBLUR");
  });

  it("returns nothing when no image and no aspect", () => {
    const html = renderToStaticMarkup(<VenueImage />);

    expect(html).toBe("");
  });
});

describe("VenueImage aspect box", () => {
  it("sizes the built-in shorthands with a CSS ratio, not a Tailwind class", () => {
    for (const [aspect, ratio] of [
      ["square", "1 / 1"],
      ["video", "16 / 9"],
    ]) {
      const { box } = renderWrapper(
        VenueImage({ aspect, image: { url: "photo.jpg" } }) as ReactElement,
      );

      expect((box.props.style as Record<string, unknown>).aspectRatio).toBe(
        ratio,
      );
      // A class name here would only exist in this package's dist, so a
      // consumer not scanning node_modules would purge it.
      expect(box.props.className ?? "").not.toContain("aspect-");
    }
  });

  it("keeps position:relative inline, which `fill` images depend on", () => {
    const { box } = renderWrapper(
      VenueImage({
        aspect: "square",
        image: { url: "photo.jpg" },
      }) as ReactElement,
    );

    expect((box.props.style as Record<string, unknown>).position).toBe(
      "relative",
    );
  });

  it("still passes a non-shorthand aspect through as a class name", () => {
    const { box } = renderWrapper(
      VenueImage({
        aspect: "aspect-[4/3]",
        image: { url: "photo.jpg" },
      }) as ReactElement,
    );

    expect(box.props.className).toContain("aspect-[4/3]");
    expect(
      (box.props.style as Record<string, unknown>).aspectRatio,
    ).toBeUndefined();
  });
});

describe("VenueImage placeholders across both branches", () => {
  it("blurs up on the no-aspect branch", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{ url: "photo.jpg", metadata: { width: 800, height: 600 } }}
      />,
    );

    expect(html).toContain('data-placeholder="blur"');
    expect(html).toContain("UklGRv4");
  });

  it("forwards a fallback to the aspect branch", () => {
    const { child } = renderWrapper(
      VenueImage({
        aspect: "video",
        props: { fallback: brand },
      }) as ReactElement,
    );

    expect(child.props.fallback).toBe(brand);
  });

  it("renders a caller-supplied fallback when there is no image and no aspect", () => {
    const html = renderToStaticMarkup(
      <VenueImage props={{ fallback: brand }} />,
    );

    expect(html).toContain("/brand.png");
  });
});
