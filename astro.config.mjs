import { defineConfig } from 'astro/config';

// Custom domain noahbarlow.work served via GitHub Pages (public/CNAME pins it).
// No `base` needed; if you ever move to a project page, set `base: '/repo-name'`.
export default defineConfig({
  site: 'https://noahbarlow.work',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
