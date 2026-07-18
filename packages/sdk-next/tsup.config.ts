import { defineConfig } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";

export default defineConfig((options) => ({
  entry: [
    "src/index.ts",
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.test.ts",
    "!src/**/*.test.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
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
      directives: ["use client", "use strict"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
}));
