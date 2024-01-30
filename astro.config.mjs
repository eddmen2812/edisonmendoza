import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";




// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://edisonmendoza.github.io',
  base: '/edisonmendoza.github.io',
});