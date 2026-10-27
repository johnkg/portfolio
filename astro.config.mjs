import { defineConfig } from 'astro/config';

// Project site on GitHub Pages: https://johnkg.github.io/portfolio/
// Using Cloudflare Pages or Netlify instead? Change `site` and drop `base`.
export default defineConfig({
  site: 'https://johnkg.github.io',
  base: '/portfolio',
});
