/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			header_line: '#5C524B',
			location_color: '#CAB18A',
			white: '#FFFFFF',
			grey: '#CCCCCC',
			pepel: '#7E7E7E',
			black: '#292424',
			disabled: '#E4E4E4',
			border: '#DFDFDF',
			popap: 'rgba(73, 51, 18, 0.46)'
		},
		backgroundImage: {
			header_img_xl: "url('/img/header-2xl.jpg')",
			header_img: "url('/img/header-bg.jpg')",
			gradient_about_as: 'linear-gradient(360deg, #EEE7DA 4.75%, rgba(255, 255, 255, 0.1) 100%);',
			footer_bg_img: "url('/img/footer-bg-img.jpg')",
			none: 'none'
		},
		fontFamily: {
			roboto: ["'Roboto'", 'sans-serif'],
			source: ["'Source Serif 4'", 'serif']
		},
		screens: {
			bs: '320px',

			sm: '375px',

			md: '425px',

			lg: '768px',

			xl: '1024px',

			'2xl': '1440px'
		},
		extend: {}
	},
	plugins: []
};
