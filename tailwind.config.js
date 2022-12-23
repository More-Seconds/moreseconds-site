/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,svg}'],
  mode: 'jit',
  content: ['./src/**/*.tsx', './dist/index.html'],
  theme: {

     screens: {
      'sm': '275px',
        // => @media (min-width: 640px) { ... }

      'md': '755px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1280px) { ... }
      },

    extend: {
     
      colors: {
        surface: '#000000',
        accent: '#FF7E21',
        light: '#FCFCFD',
        mid: '#B7B7B7',
        darkmid: '#E6E8EC',
        darkermid: '#1D1D20',
        dark: '#4C4C4C'
      },
      fontFamily: {
        DM: ['DM Sans', 'system-ui', 'Sans-Serif'],
        Poppins: ['Poppins', 'system-ui', 'sans serif']
      },
      backgroundImage: {
        floatingLabel: 'linear-gradient(to top, #E6E8EC 75.01%, #FCFCFD 25%);',
        homeHero: `url('/home_hero.png')`
      },
      height: {
        hero: '1400px',
        heroTablet: '1096px'
      },
      gridTemplateColumns: {
        services: '40fr 30fr 30fr'
      },
      screens: {
        lg: '1025px'
      },

      backgroundImage: {
        'm-dash': "url('/public/images/m-dash-big.png')",
      }


    }
  },

  plugins: []
}
