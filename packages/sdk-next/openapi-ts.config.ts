import { defaultPlugins } from '@hey-api/openapi-ts';
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://app.venuecms.com/api/v2/openapi.json',
  output: {
    clean: true,
    path: 'src/client',
  },
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-next',
  ],
});
