/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular: ['Regular'],
        primaryBold: ['Bold'],
        primaryMedium: ['Medium'],
      }
    },
  },
  plugins: [],
}