/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
    fontFamily: {
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    }
  },
	plugins: [
    require('flowbite/plugin')
  ]
}