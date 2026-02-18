// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://peda-cos.github.io',
  base: '/portfolio',
  integrations: [svelte(), sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});