const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				'mobile-s': '320px',
				'mobile-m': '375px',
				'mobile-l': '425px',
				'tablet-s': '600px',
				tablet: '768px',
				laptop: '1024px',
				'laptop-l': '1440px',
				'4k': '2560px'
			}
		}
	},
	plugins: []
};
