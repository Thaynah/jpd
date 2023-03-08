/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      grayscale: {
         50: '50%',
      },
      colors: {
        dark: {
          100: 'rgb(51, 51, 51)',
          200: 'rgb(18, 18, 18)'          
        },
        jpd: {
          100: '#167BF7',
          200: '#051933'
        }
      }
    }
  },
  plugins: [],
}