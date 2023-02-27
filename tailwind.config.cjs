/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '242px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
  darkMode: 'class',
}