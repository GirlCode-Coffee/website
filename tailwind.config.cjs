/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			primary: {
				red: {
					DEFAULT: '#E5645D',
					medium: '#EE9C97',
					light: '#F5C7C5',
					lightest: '#FBE6E5',
				},
				yellow: {
					DEFAULT: '#FCD02D',
					medium: '#FEE179',
					light: '#FEEEB3',
					lightest: '#FFF7DD'
				}
			}
		},
		fontFamily: {
			sora: ['Sora', 'sans-serif'],
			'open-sans': ['Open Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
