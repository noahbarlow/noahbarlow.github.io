import { defineConfig } from 'astro/config';

// User GitHub Pages site (noahbarlow.github.io) deploys at the apex.
// No `base` needed; if you ever move to a project page, set `base: '/repo-name'`.
export default defineConfig({
  site: 'https://noahbarlow.github.io',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
