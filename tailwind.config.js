/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			color: {
				'light green': '#a7f3d0',
				'dark purple': '#5d5dff',
			},
		},
	},
	plugins: [],
};
