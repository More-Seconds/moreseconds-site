/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  content: ['./src/**/*.tsx', './dist/index.html'],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px'
      },
      colors: {
        surface: '#000000',
        accent: '#FF7E21',
        light: '#FCFCFD',
        mid: '#B7B7B7',
        darkmid: '#E6E8EC',
        dark: '#4C4C4C'
      },
      fontFamily: {
        DM: 'DM Sans, system-ui, sans serif',
        Poppins: 'Poppins, system-ui, sans serif'
      },
      backgroundImage: {
        floatingLabel: 'linear-gradient(to top, #E6E8EC 75.01%, #FCFCFD 25%);',
        homeHero: `url('/home_hero.png')`
      },
      height: {
        hero: '1400px',
        heroTablet: '1096px'
      }
    }
  },
  plugins: []
}
