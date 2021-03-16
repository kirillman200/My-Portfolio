module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'hero-image': "url('/src/images/coding.jpg')"
			}),

			zIndex: {
				'-1': '-1',
				'-100': '-100'
			},
			transformOrigin: {
				'0': '0%'
			},
			colors: {
				red: {
					lighter: '#DC0425',
					DEFAULT: '#96031A',
					light: '#631726'
				},
				blue: {
					DEFAULT: '#151A51',
					light: '#191F61'
				},
				black: {
					DEFAULT: '#0A0908',
					light: '#03191E'
				},
				white: {
					DEFAULT: '#fff',
					darker: '#FFCDCD'
				},
				darkmode: {
					DEFAULT: '#3F3D56',
					darker: '#232130'
				}
			},
			fontFamily: {
				Titillium: [ '"Titillium Web"', 'sans-serif' ],
				Rubik: [ 'Rubik', 'sans-serif' ]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
