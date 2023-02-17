/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				xl: '2rem',
			},
		},
		screens: {
			// xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				softBlue: 'hsl(231, 69%, 60%)',
				softRed: 'hsl(0, 94%, 66%)',
				grayishBlue: 'hsl(229, 8%, 60%)',
				veryDarkBlue: 'hsl(229, 31%, 21%)',
			},
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
			},
		},
		// screens: {
		// 	// xs: '365px',
		// 	sm: '480px',
		// 	md: '768px',
		// 	lg: '1020px',
		// 	xl: '1440px',
		// },
	},
	plugins: [],
};
