[**@venuecms/sdk-next**](../Index.md)

***

# Type Alias: ContentStyles

```ts
type ContentStyles = Pick<ElementClasses, 
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
| "linkCard">;
```

Defined in: [packages/sdk-next/src/components/VenueContent/index.tsx:351](https://github.com/venuecms/sdk/blob/716d10b745ed0715f8414e594f4b5aaf9180e529/packages/sdk-next/src/components/VenueContent/index.tsx#L351)

The class names a caller may set, one per thing the renderer puts a class on.

Listed explicitly rather than derived from the handler map, which named the
wrong things and named them too widely. Two problems it had: the handlers are
keyed by node type (`paragraph`, `bulletList`) while the classes they read are
keyed by the tag the node renders as (`p`, `ul`), so half the declared keys
were never read and half the read ones were undeclared; and `getDefaultHandlers`
is annotated `NodeHandlers`, whose string index signature collapsed
`keyof` to `string` — making this `Record<string, string>`, which accepted any
key at all and, once listing components shared the map, forced every value to
be a string.

Keyed on ElementClasses so a class the renderer stops reading cannot linger
here. `text`, `heading`, `hardBreak` and `iframe` are deliberately left out:
the renderer declares them but applies none of them (`heading` defers to
h1/h2/h3, `hardBreak` renders a bare <br>, the youtube embed ignores
`iframe`, and `text` is read into an expression whose result is discarded), so
naming them here would promise styling that never lands.
