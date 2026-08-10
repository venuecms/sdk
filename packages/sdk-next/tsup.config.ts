import { defineConfig } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";

export default defineConfig((options) => ({
  // Tests are excluded rather than left to be tree-shaken: every file matched
  // here becomes its own entry point, so an unexcluded test would be emitted as
  // a module of the package — imports, mocks and all — whatever the bundler
  // made of its contents. The patterns are wider than this package's own
  // conventions on purpose; `scripts/check-package.mjs` asserts the result.
  entry: [
    "src/index.ts",
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.test.*",
    "!src/**/*.spec.*",
    "!src/**/__tests__/**",
    "!src/**/__mocks__/**",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  // Required, not a size optimisation. Without it the CJS format inlines every
  // transitive import into each barrel, and the directive plugin below hoists
  // whatever it finds to the top of the result — so `dist/index.js` came out
  // marked both "use client" and "use server", declaring the entire SDK surface
  // a server action. Splitting keeps a client module's directive on a file of
  // its own, and the barrels carry no directive at all.
  splitting: true,
  sourcemap: true,
  target: "es2022",
  external: ["react", "react/jsx-runtime"],
  minify: !options.watch,
  // Only the components that use hooks/browser APIs carry a "use client"
  // directive in their source (VenueProvider, EmbedResize). This plugin keeps
  // that directive on the emitted chunks so the server/client boundary is
  // preserved, instead of the old approach of stamping "use client" onto every
  // file — which forced the whole SDK (data fetching, metadata) to be
  // client-only and unusable in Server Components.
  esbuildPlugins: [
    preserveDirectivesPlugin({
      // "use server" is listed although this package ships no actions, and
      // deliberately: preserving it is what lets `scripts/check-directives.mjs`
      // see one in the build and fail. Dropping it from this list would strip a
      // stray directive out of the output and hide exactly the regression that
      // check exists to catch.
      directives: ["use client", "use server", "use strict"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
}));
