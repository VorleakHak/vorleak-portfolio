// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Live URL (used for canonical + Open Graph links).
  site: 'https://www.vorleakhak.com',
  // GitHub Pages only: set base to '/<repo-name>' (see README). Leave as '/' for Vercel/Netlify.
  base: '/',
  trailingSlash: 'ignore',
});
