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
