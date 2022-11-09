/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"black-500": "rgba(0,0,0,.5)",
				"black-800": "rgba(0,0,0,.8)",
			},
			height: {
				"screen-4/5": "80vh",
			},
			minHeight: {
				"min-h-28": "280px",
			},

			maxHeight: {
				"max-h-4/5": "80vh",
			},
		},
		screens: {
			md: "768px",
			lg: "1024px",
		},
	},
	plugins: [],
};
