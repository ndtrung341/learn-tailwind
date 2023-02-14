/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
			},
		},
		// screens: {
		// 	sm: '480px',
		// 	md: '768px',
		// 	lg: '992px',
		// 	xl: '1440px',
		// },
		extend: {
			fontFamily: {
				openSans: ['Open Sans', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
			},
			colors: {
				darkBlue: '#181f2b',
				// darkGray: '#1c2431 ',
				darkGray: '#232b36',
				darkLightGray: '#202a3c',
				darkCyan: '#65e2d9',
				cyan: '#87f8f0',
				lightGray: '#f9fafb',
			},
		},
	},
	plugins: [],
};
