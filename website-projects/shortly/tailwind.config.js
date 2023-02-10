/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './images/*.svg'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
			},
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
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
