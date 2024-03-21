import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv("", process.cwd(), 'STORYBLOK')

export default defineConfig({
	site: 'https://example.com',
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			components: {
				page: "storyblok/Page",
				profile: "storyblok/Profile",
				hero: "storyblok/Hero",
				button: "storyblok/Button",
			}
		})
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
})