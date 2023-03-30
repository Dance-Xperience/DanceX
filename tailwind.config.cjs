/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '32rem',
			md: '48rem',
			lg: '64rem'
		},
		extend: {}
	},
	plugins: []
};
