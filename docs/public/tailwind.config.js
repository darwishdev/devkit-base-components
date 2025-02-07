/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./app.vue",
    "./src/formkit.theme.ts" // <-- add your theme file
  ],

  darkMode: 'dark-mode',
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

