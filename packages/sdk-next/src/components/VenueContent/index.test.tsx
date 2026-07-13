import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { VenueContent } from "./index";

const render = (nodes: unknown[]) =>
  renderToStaticMarkup(
    <VenueContent content={{ contentJSON: { content: nodes } } as never} />,
  );

describe("VenueContent migrated handlers", () => {
  it("renders link marks as class-aware anchors", () => {
    const html = render([
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "click me",
            marks: [{ type: "link", attrs: { href: "https://example.com" } }],
          },
        ],
      },
    ]);

    expect(html).toContain('href="https://example.com"');
    expect(html).toContain("cursor-pointer");
    expect(html).toContain("click me");
  });

  it("renders a linkCard preview", () => {
    const html = render([
      {
        type: "linkCard",
        attrs: {
          href: "https://example.com/article",
          title: "A title",
          description: "A description",
          site: "example.com",
          image: "https://example.com/og.png",
        },
      },
    ]);

    expect(html).toContain('href="https://example.com/article"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain("A title");
    expect(html).toContain("A description");
    expect(html).toContain("example.com");
    expect(html).toContain('src="https://example.com/og.png"');
  });

  it("honors iframely aspectRatio on iframe embeds", () => {
    const html = render([
      {
        type: "iframe",
        attrs: { src: "https://embed.example.com", aspectRatio: 1.7777 },
      },
    ]);

    expect(html).toContain('src="https://embed.example.com"');
    expect(html).toContain("aspect-ratio:1.7777");
    expect(html).toContain("width:100%");
  });
});
