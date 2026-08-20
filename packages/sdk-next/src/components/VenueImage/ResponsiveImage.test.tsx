import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ResponsiveImage } from "./ResponsiveImage";

describe("ResponsiveImage placeholder / blurDataURL override", () => {
  it("uses the default blur placeholder when no override is provided", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({ src: "photo.jpg" }),
    );

    expect(html).toContain('data-placeholder="blur"');
    expect(html).toContain("UklGRv4");
  });

  it("forwards a custom blurDataURL and placeholder", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({
        src: "photo.jpg",
        placeholder: "blur",
        blurDataURL: "data:image/png;base64,CUSTOMBLUR",
      }),
    );

    expect(html).toContain("data:image/png;base64,CUSTOMBLUR");
    expect(html).not.toContain("UklGRv4");
  });

  it("supports the empty placeholder without a blur data url", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({ src: "photo.jpg", placeholder: "empty" }),
    );

    expect(html).toContain('data-placeholder="empty"');
  });
});

describe("ResponsiveImage focal point", () => {
  it("applies the focal point through style, not the ignored legacy props", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({
        src: "photo.jpg",
        image: { metadata: { focus: { x: -1, y: 1 } } },
      }),
    );

    expect(html).toContain("object-position:100% 0%");
    expect(html).toContain("object-fit:cover");
    // next/image dropped these in v13; passing them again would silently
    // discard the focal point exactly as before.
    expect(html).not.toContain("objectfit");
    expect(html).not.toContain("objectposition");
  });

  it("centres by default", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({ src: "photo.jpg" }),
    );

    expect(html).toContain("object-position:50% 50%");
  });

  it("lets a caller-supplied style win", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({
        src: "photo.jpg",
        style: { objectFit: "contain" },
      }),
    );

    expect(html).toContain("object-fit:contain");
  });

  it("displays the fallback rather than the default blur when src is empty", async () => {
    const html = renderToStaticMarkup(
      await ResponsiveImage({
        src: "",
        fallback: { src: "/brand.png", width: 10, height: 10, blurDataURL: "" },
      }),
    );

    expect(html).toContain("/brand.png");
  });
});
