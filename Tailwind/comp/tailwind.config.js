/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        lightwhite: '#F6F7F9',
      }
      ,
      fontFamily: {
        'jakarta': ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}