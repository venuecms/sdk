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

  it("renders credit below the image with no overlay when creditPosition is below", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{ url: "photo.jpg", altText: "alt", credit: "Jane Doe" }}
        creditPosition="below"
      />,
    );

    expect(html).toContain("Jane Doe");
    expect(html).not.toContain("absolute");
    expect(html).not.toContain("opacity-60");
    expect(html).toContain("flex flex-col gap-0");
  });

  it("omits the credit entirely when hideCredits is true", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{ url: "photo.jpg", altText: "alt", credit: "Jane Doe" }}
        hideCredits
      />,
    );

    expect(html).not.toContain("Jane Doe");
    expect(html).toContain("photo.jpg");
  });

  it("merges creditClassName and creditWrapperClassName overrides", () => {
    const html = renderToStaticMarkup(
      <VenueImage
        image={{ url: "photo.jpg", altText: "alt", credit: "Jane Doe" }}
        creditClassName="bottom-1 right-1"
        creditWrapperClassName="p-2"
      />,
    );

    expect(html).toContain("bottom-1");
    expect(html).toContain("right-1");
    expect(html).toContain("p-2");
    expect(html).not.toContain("bottom--1");
    expect(html).not.toContain("right-0");
  });
});
