/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'primary-color':'#3e1b17',
        'secondary-color' : '#202020',
        'third-color': '#1A1C20'
      },
      colors: {
        'marron': '#c38848',
        'marron2': '#996935'
      },
    },
  },
  plugins: [],
}