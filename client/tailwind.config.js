/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#003366',
        'secondary-2': '#009933',
        'secondary-3': '#666666'
      }
    },
  },
  plugins: [],
}