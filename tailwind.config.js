/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#000000',
        accent: '#FF7E21',
        light: '#FCFCFD',
        mid: '#B7B7B7'
      },
      fontFamily: {
        DM: 'DM Sans, system-ui, sans serif'
      }
    }
  },
  plugins: []
}
