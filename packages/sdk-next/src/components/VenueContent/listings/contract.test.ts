/**
 * Compile-time guards on the shape a template writes against.
 *
 * These assertions are checked by `tsc`, not at runtime — the file is a
 * `.test.ts` so it is inside the typecheck's `src/**` and outside the build.
 * A runtime assertion is included only so the suite reports it as a test.
 *
 * They exist because the interesting failures here are type-level and invisible
 * to a rendering test. `ContentStyles` was once derived from the handler map,
 * which is annotated with a string index signature; that collapsed its `keyof`
 * to `string` and made the type `Record<string, string>`. Every value on the
 * unified map was then required to be a string, so a listing component could not
 * be assigned at all — while a rendering test still passed, because the JSX in
 * it was never typechecked.
 */
import { describe, expect, it } from "vitest";

import type {
  AllListingComponents,
  ContentEntries,
  ContentStyles,
  ListingComponents,
  ListingProps,
} from "../index";

/** Fails to compile unless `Value` is assignable to `Expected`. */
const accepts = <Expected,>() => <Value extends Expected>(value: Value) =>
  value;

const asContentEntries = accepts<ContentEntries>();

// A class name and a listing component coexist on one map.
asContentEntries({
  p: "my-4",
  h1: "text-2xl",
  eventListing: ({ records }) => records.length,
});

// Records are typed per listing: an event carries a startDate...
asContentEntries({
  eventListing: ({ records }) => records.map((event) => event.startDate).join(),
});

// ...a profile a slug, and neither is widened to the other's shape.
asContentEntries({
  profileListing: ({ records }) => records.map((profile) => profile.slug).join(),
});

// The site rides along, and is nullable because its read can fail in-band.
asContentEntries({
  productListing: ({ site }) => site?.id ?? "no site",
});

// A listing component may return nothing.
asContentEntries({ newsListing: () => null });

// Every listing is optional, so a template may register just the one it draws.
const partial: ListingComponents = { pageListing: () => null };

// AllListingComponents requires all five, so a listing added to the contract
// breaks a template that claims to render everything until it is handled.
const complete: AllListingComponents = {
  eventListing: () => null,
  newsListing: () => null,
  pageListing: () => null,
  productListing: () => null,
  profileListing: () => null,
};

// ContentStyles names only the classes the renderer applies, so a key it never
// reads is a compile error rather than styling that silently never lands.
const styles: ContentStyles = { p: "my-4", linkCard: "border" };

// @ts-expect-error `heading` is declared by the renderer but never applied.
const deadStyle: ContentStyles = { heading: "text-xl" };

// @ts-expect-error a listing component is not a class name.
const notAClass: ContentStyles = { eventListing: () => null };

// An event component cannot be registered as a news listing: the two are handed
// different records. The directive has to sit on the line the error lands on, so
// the explanation goes above it rather than between.
const crossed: ContentEntries = {
  // @ts-expect-error
  newsListing: ({ records }: ListingProps<"eventListing">) => records.length,
};

// A Client Component needs things the SDK does not hand a listing component —
// the locale — so the Server Component closes over them and passes them as a
// prop. Written without JSX because this file is a `.ts`; the docs show the
// element form. Asserted here because a docs example that does not compile is
// only found by the person following it.
const clientListing = (
  props: ListingProps<"eventListing"> & { locale: string },
) => props.records.length + props.locale.length;

asContentEntries({
  eventListing: (props) => clientListing({ ...props, locale: "en" }),
});

describe("listing contract", () => {
  it("holds at compile time", () => {
    // The assertions above are the test; this keeps the file a real suite and
    // pins the values so nothing is reported as unused.
    expect([partial, complete, styles, deadStyle, notAClass, crossed]).toHaveLength(
      6,
    );
  });
});
