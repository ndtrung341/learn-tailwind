/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				md: '2rem',
			},
		},
		extend: {
			fontFamily: {
				josefin: ['Josefin Sans', 'sans-serif'],
				alata: ['Alata', 'sans-serif'],
			},
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '976px',
			xl: '1400px',
		},
	},
	plugins: [],
};
