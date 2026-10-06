// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Live URL (used for canonical + Open Graph links).
  site: 'https://vorleak-portfolio.vercel.app',
  // GitHub Pages only: set base to '/<repo-name>' (see README). Leave as '/' for Vercel/Netlify.
  base: '/',
  trailingSlash: 'ignore',
});
