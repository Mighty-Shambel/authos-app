/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#199CC5',
        secondary:'#1d91b5',
        tertiary:'#26465E',
        fourth:'#DC143C'
    },
    },
  },
  plugins: [],
}
