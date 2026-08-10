// @ts-nocheck
/*
 * Content Renderer with defaults
 * Adapted from tiptap-react-render: https://github.com/troop-dev/tiptap-react-render
 */
import { LocalizedContent } from "@venuecms/sdk";
import { VenueImage } from "../VenueImage";
import { EmbedResize } from "../EmbedResize";
import Markdown from "markdown-to-jsx";
import React, { JSX, ReactNode } from "react";
import type { ListingComponents, SearchParams } from "./listings";
import {
  LISTING_BLOCK_NODE_TYPES,
  listingParamNames,
  splitContentEntries,
} from "./listings";
import type { NodeHandlers, RenderNode } from "./types";

type ElementClasses = {
  text?: string;
  p?: string;
  ul?: string;
  ol?: string;
  li?: string;
  code?: string;
  heading?: string;
  hardBreak?: string;
  img?: string;
  image?: string;
  iframe?: string;
  linkCard?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  a?: string;
};

const marks = {
  bold: "font-bold",
  italic: "italic",
  underline: "underline",
  strike: "line-through",
  link: "underline underline-offset-[3px] cursor-pointer",
} as const;

const getDefaultHandlers = (classes: ElementClasses = {}) => {
  const elMarks = {
    link: (props: any): ReactNode => {
      const { class: attrClass, className: outerClassName, ...rest } = props;
      const className =
        [outerClassName, classes.a ?? marks.link, attrClass]
          .filter(Boolean)
          .join(" ") || undefined;
      return <a {...rest} className={className} />;
    },
  } as const;

  const defaultHandlers: NodeHandlers = {
    text: (props) => {
      if (props.node.marks) {
        const className = props.node.marks
          .reduce((accum, mark) => {
            if (elMarks[mark.type as keyof typeof elMarks]) {
              // elMarks are handled separately
              return accum;
            }
            return `${marks[mark.type as keyof typeof marks] ?? ""} ${accum}`;
          }, "")
          .trim();

        let hasWrappers = false;
        const elWrappers = props.node.marks.reduce((accum, mark) => {
          if (mark.type in elMarks) {
            hasWrappers = true;
            const el = elMarks[mark.type as keyof typeof elMarks];

            return el({ ...mark.attrs, className, children: accum });
          }

          return accum;
        }, props.node.text);

        if (hasWrappers) {
          return elWrappers;
        }

        return <span className={`${className}`}>{props.node.text}</span>;
      }

      if (classes.text) {
        <span className={classes.text}>{props.node.text}</span>;
      }

      return <>{props.node.text}</>;
    },
    paragraph: (props) => <p className={classes.p}>{props.children}</p>,
    bulletList: (props) => <ul className={classes.ul}>{props.children}</ul>,
    orderedList: (props) => <ol className={classes.ol}>{props.children}</ol>,
    listItem: (props) => <li className={classes.li}>{props.children}</li>,
    codeBlock: (props) => (
      <pre>
        <code className={classes.code}>{props.children}</code>
      </pre>
    ),
    heading: (props) => {
      switch (props.node.attrs?.level) {
        case 1:
          return <h1 className={classes.h1}>{props.children}</h1>;
        case 2:
          return <h2 className={classes.h2}>{props.children}</h2>;
        case 3:
          return <h3 className={classes.h3}>{props.children}</h3>;
        default:
          return <>{props.children}</>;
      }
    },
    hardBreak: () => <br />,
    image: (props) => {
      const { src, alt } = props.node.attrs ?? {};

      const image = {
        url: src.split(/^\/media\//).join(""),
        metadata: {
          altText: alt,
        },
      };

      return <VenueImage className={classes.image} image={image} />;
    },
    img: (props) => {
      const { src, alt } = props.node;
      const image = {
        url: src.split(/^\/media\//).join(""),
        metadata: {
          altText: alt,
        },
      };
      return <VenueImage className={classes.img} image={image} />;
    },
    youtube: (props) => {
      //@ts-ignore
      const { src, start } = props.node.attrs;
      const key = src.split("v=")[1];

      return (
        <iframe
          src={`https://www.youtube.com/embed/${key}?modestbranding=1${start ? `&amp;start=${start}` : ""}`}
          frameBorder="0"
          allowFullScreen={true}
          width="100%"
          height="auto"
          style={{
            aspectRatio: "4 / 3",
            maxWidth: "100%",
          }}
        ></iframe>
      );
    },
    iframe: (props) => {
      const {
        // @ts-ignore
        src,
        // @ts-ignore
        style,
        // @ts-ignore
        frameborder,
        // @ts-ignore
        allowfullscreen,
        // @ts-ignore
        referrerpolicy,
        // @ts-ignore
        aspectRatio,
        ...rest
      } = props.node?.attrs ?? props; // TODO: why do we need to do this? we are getting different shapes at times and not sure why

      const styles =
        typeof style === "string"
          ? style
              ?.split(";")
              .reduce((accum: Record<string, string>, style: string) => {
                const [key, value] = style.split(":");
                if (value !== undefined) {
                  return { ...accum, [key]: value.trim() };
                }
                return accum;
              }, {})
          : style;

      // Native iframely embeds carry aspectRatio (width / height). Prefer it:
      // render a fluid, ratio-correct iframe with no per-provider guessing.
      if (aspectRatio) {
        return (
          <iframe
            src={src}
            style={{
              ...styles,
              width: "100%",
              aspectRatio: String(aspectRatio),
              height: "auto",
            }}
            frameBorder={frameborder}
            allowFullScreen={allowfullscreen}
            referrerPolicy={referrerpolicy}
            {...rest}
          />
        );
      }

      // TODO: We need iframely. A hack for now to check and iron out some common quirks
      const isVideo = (() => {
        return !!(src.match(/youtube.com/) || src.match(/vimeo.com/));
      })();

      const isBandcamp = (() => {
        return !!src.match(/bandcamp.com/);
      })();

      const isVimeo = (() => {
        return !!src.match(/vimeo.com/);
      })();

      return (
        <iframe
          src={src}
          style={{
            ...styles,
            ...(isVideo
              ? { maxWidth: "100%", aspectRatio: "4 / 3", height: "auto" }
              : {}),
            ...(isBandcamp && !styles?.height
              ? { width: "100%", maxWidth: "700px", height: "42px" }
              : {}),

            ...(isVimeo && !styles?.height
              ? {
                  width: "100%",
                  aspectRatio: (rest as any).width / (rest as any).height,
                }
              : {}),
          }}
          frameBorder={frameborder}
          allowFullScreen={allowfullscreen}
          referrerPolicy={referrerpolicy}
          {...rest}
        />
      );
    },
    // Rich link-preview card for non-embeddable URLs (metadata only).
    linkCard: (props) => {
      const {
        // @ts-ignore
        href,
        // @ts-ignore
        title,
        // @ts-ignore
        description,
        // @ts-ignore
        site,
        // @ts-ignore
        image,
      } = props.node?.attrs ?? props;

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            classes.linkCard ??
            "my-4 block overflow-hidden bg-card no-underline transition-opacity hover:opacity-80"
          }
        >
          {image ? (
            <img
              src={image}
              alt={title ?? ""}
              className="aspect-video w-full object-cover"
            />
          ) : null}
          <div className="p-4">
            {title ? (
              <h3 className="mb-2 text-base font-semibold text-primary">
                {title}
              </h3>
            ) : null}
            {site ? (
              <span className="text-xs text-secondary">{site}</span>
            ) : null}
            {description ? (
              <p className="mt-2 text-sm text-secondary">{description}</p>
            ) : null}
          </div>
        </a>
      );
    },
  } as const;
  return defaultHandlers;
};

const getMarkdownHandlers = (classes: ElementClasses = {}) => {
  const handlers = getDefaultHandlers(classes);
  // the markdown renderer uses a more standard format for overriding styles, so we map it here
  return {
    ...handlers,
    p: handlers.paragraph,
    ul: handlers.bulletList,
    ol: handlers.orderedList,
    li: handlers.listItem,
    code: handlers.codeBlock,
    h1: (props: any) =>
      handlers.heading({ ...props, node: { attrs: { level: 1 } } }),
    h2: (props: any) =>
      handlers.heading({ ...props, node: { attrs: { level: 2 } } }),
    h3: (props: any) =>
      handlers.heading({ ...props, node: { attrs: { level: 3 } } }),
    img: (props: any) =>
      handlers.image({
        ...props,
        node: { attrs: { src: props.src, alt: props.alt } },
      }),
    hr: (props: any) => <hr {...props} />,
    a: (props: any) => (
      <a href={props.href} className={classes.a}>
        {props.children}
      </a>
    ),
    span: ({ children }: { children: ReactNode }) => <span>{children}</span>, // strip out custom colors and all that (since they are usually pasted in accidentally)
  };
};

/**
 * The class names a caller may set, one per thing the renderer puts a class on.
 *
 * Listed explicitly rather than derived from the handler map, which named the
 * wrong things and named them too widely. Two problems it had: the handlers are
 * keyed by node type (`paragraph`, `bulletList`) while the classes they read are
 * keyed by the tag the node renders as (`p`, `ul`), so half the declared keys
 * were never read and half the read ones were undeclared; and `getDefaultHandlers`
 * is annotated `NodeHandlers`, whose string index signature collapsed
 * `keyof` to `string` — making this `Record<string, string>`, which accepted any
 * key at all and, once listing components shared the map, forced every value to
 * be a string.
 *
 * Keyed on ElementClasses so a class the renderer stops reading cannot linger
 * here. `text`, `heading`, `hardBreak` and `iframe` are deliberately left out:
 * the renderer declares them but applies none of them (`heading` defers to
 * h1/h2/h3, `hardBreak` renders a bare <br>, the youtube embed ignores
 * `iframe`, and `text` is read into an expression whose result is discarded), so
 * naming them here would promise styling that never lands.
 */
export type ContentStyles = Pick<
  ElementClasses,
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "ul"
  | "ol"
  | "li"
  | "code"
  | "a"
  | "img"
  | "image"
  | "linkCard"
>;

const ContentRender = (props: {
  node: RenderNode;
  handlers?: NodeHandlers;
  classes?: ContentStyles;
}): JSX.Element => {
  const { node, handlers: handlerOverrides = {} } = props;
  const handlers = {
    ...getDefaultHandlers(props.classes),
    ...handlerOverrides,
  };

  // recursively render child content
  const children: JSX.Element[] = [];
  node.content &&
    node.content.forEach((child, ix) => {
      children.push(
        <ContentRender
          node={child}
          handlers={handlers}
          key={`${child.type}- ${ix} `}
        />,
      );
    });

  // return empty if we are missing a handler for this type
  if (!(node.type in handlers)) {
    // A listing block with no component is a caller's choice, not a gap: every
    // key on the map is optional, and leaving one off is how a template says it
    // does not draw that listing. Warning about it would put a line in the
    // server log for every such block on every uncached render of the article.
    if (!(LISTING_BLOCK_NODE_TYPES as readonly string[]).includes(node.type)) {
      console.warn(`missing type`, node);
    }

    return <></>;
  }
  // render the handler for this type
  const Handler = handlers[node.type];
  return <Handler node={node}>{children}</Handler>;
};



// Declared in ./types so the listing layer can use them without importing this
// module, which imports it back. Re-exported here, where callers get them from.
export type {
  RenderNode,
  NodeProps,
  NodeHandler,
  NodeHandlers,
} from "./types";

// The listing contract: the node types, and the component signature a caller
// writes against.
export * from "./listings";

/**
 * One entry per node type, on a single map.
 *
 * A string is a class name put on the renderer this module already has; a
 * function is a listing component, handed the records for that block once the
 * SDK has queried them. Key it by the same name `ContentStyles` uses for a
 * styled node, or by listing node type (`eventListing`) for a listing.
 *
 * Callers pass one object rather than sorting their entries across two props:
 * no node type takes both a class and a component, so which is which follows
 * from the value.
 */
export type ContentEntries = ContentStyles & ListingComponents;

export const VenueContent = ({
  content,
  contentStyles,
  className,
  components,
  searchParams,
}: {
  content: LocalizedContent;
  contentStyles?: ContentEntries;
  className?: string;
  components?: NodeHandlers;
  /**
   * The route's search params, for listing blocks that paginate by link.
   *
   * Optional, and normally left off: a listing reads them off the request
   * itself, which is what `venueRequestHeaders` in the site's proxy is for. Pass
   * them to override that — content rendered for a URL other than the one being
   * requested, or a site with no proxy of its own.
   *
   * With neither, a listing loses only its `pagination.links`, which is then
   * null; the records and the counts arrive without it.
   */
  searchParams?: SearchParams;
}) => {
  const { contentJSON } = content;

  const nodes = (contentJSON?.content ?? []) as Array<RenderNode>;

  // Which param each listing block owns is a property of the whole document —
  // two identical blocks have to be told apart — so it is worked out once here
  // rather than by each block as it renders.
  const listingContext = {
    searchParams: searchParams ?? null,
    paramNames: listingParamNames(nodes),
  };

  // Listing components ride in on `contentStyles`; `components` stays for
  // callers passing raw node handlers, and wins on any key the two share, since
  // a handler is the more specific thing to have asked for.
  const { classes, handlers } = splitContentEntries(
    contentStyles ?? {},
    listingContext,
  );
  const allHandlers = { ...handlers, ...components };

  if (contentJSON) {
    return (
      <div className={className}>
        <EmbedResize />
        {nodes.map((node, i) => (
          <ContentRender
            key={i}
            classes={classes}
            node={node}
            handlers={allHandlers}
          />
        ))}
      </div>
    );
  }

  if (content.content) {
    return (
      <>
        <EmbedResize />
        <Markdown
          className={className}
          options={{
            overrides: {
              // Only the class names: markdown carries no listing nodes, so a
              // listing component has no tag to override here.
              ...getMarkdownHandlers(classes),
            },
          }}
        >
        {
          /* There are issues with <hr> tags in the parsing so we fix that with a regex */
          // @ts-ignore
          content.content.replaceAll(
            /(?:\n|\r\n)\*\*\*(?:\n|\r\n)/g,
            "\n\n***\n\n",
          )
        }
        </Markdown>
      </>
    );
  }

  return null;
};
