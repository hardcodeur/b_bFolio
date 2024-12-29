/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'corail': '#FF6F61',
        'navy-blue': '#282C33',
        'gray' : '#ABB2BF'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'sans-serif'], // Ajoutez votre police ici
      },
    },
  },
  plugins: [],
}

