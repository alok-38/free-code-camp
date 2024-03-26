/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "input-dark": "#25273C",
        "bg-light": "#fafafa",
        "bg-dark": "#181824"
      }
    },
  },
  plugins: [],
}