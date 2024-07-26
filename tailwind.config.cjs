/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				varela: ['Varela Round', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif']
			},
			colors: {
				primary: '#ff7733',
				primary2: '#bf5926',
				bglight: '#F2DDD3',
				secondary: '#031f4b',
				bg: '#fefdfc'
			}
		}
	},

	plugins: []
};

module.exports = config;
