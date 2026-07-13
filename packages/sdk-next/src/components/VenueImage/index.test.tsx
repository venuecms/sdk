import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { VenueImage } from "./index";

describe("VenueImage credit + altText migration", () => {
  it("wraps the image with a credit overlay and uses altText", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{
          url: "photo.jpg",
          altText: "A described photo",
          credit: "Jane Doe",
          metadata: { width: 800, height: 600 },
        }}
      />,
    );

    expect(html).toContain("Jane Doe");
    expect(html).toContain('alt="A described photo"');
    expect(html).toContain("photo.jpg");
  });

  it("renders without a credit overlay when credit is absent", () => {
    const html = renderToStaticMarkup(
      <VenueImage image={{ url: "photo.jpg", altText: "alt" }} />,
    );

    expect(html).not.toContain("opacity-60");
    expect(html).toContain('alt="alt"');
  });
});
