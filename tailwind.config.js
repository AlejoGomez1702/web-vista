/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'black-vista': '#333333',
        'yellow-vista': '#ffb600'
      },
      borderRadius: {
        't-vista': '7rem 7rem 0 0'
      }
    },
  },
  plugins: [],
}

