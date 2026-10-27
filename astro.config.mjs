import { defineConfig } from 'astro/config';

// User site on GitHub Pages: repo named johnkg.github.io, so no `base` needed.
// Using Cloudflare Pages or Netlify instead? Change `site` to that URL.
export default defineConfig({
  site: 'https://johnkg.github.io',
});
