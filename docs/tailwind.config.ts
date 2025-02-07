/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

