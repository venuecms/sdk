import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { VenueImage } from "./index";

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

  it("returns nothing when no image and no aspect", () => {
    const html = renderToStaticMarkup(<VenueImage />);

    expect(html).toBe("");
  });
});
