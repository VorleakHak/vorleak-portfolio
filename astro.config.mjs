// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set this to your live URL once deployed (used for canonical + Open Graph links).
  site: 'https://vorleak-hak.vercel.app',
  // GitHub Pages only: set base to '/<repo-name>' (see README). Leave as '/' for Vercel/Netlify.
  base: '/',
  trailingSlash: 'ignore',
});
