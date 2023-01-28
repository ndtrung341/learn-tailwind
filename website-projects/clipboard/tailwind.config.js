/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				'strong-cyan': 'hsl(171,66%,44%)',
				'dark-blue': 'hsl(233,100%,69%)',
				'dark-grey': 'hsl(212,10%,33%)',
				'light-grey': 'hsl(201,11%,66%)',
			},
			fontFamily: {
				sans: ['Bai Jamjuree', 'sans-serif'],
			},
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
	},
	plugins: [],
};
