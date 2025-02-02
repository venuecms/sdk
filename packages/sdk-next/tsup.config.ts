import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: {
    resolve: true,
    entry: [
      "./src/index.ts"
    ],
    compilerOptions: {
      moduleResolution: "node"
    }
  },
});
