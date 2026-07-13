import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "next/image": resolve(__dirname, "test/mocks/next-image.tsx"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
