import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: "storyblok/Page",
      profile: "storyblok/Profile",
      hero: "storyblok/Hero",
      button: "storyblok/Button"
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});