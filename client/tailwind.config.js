/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#364a43',
        primary_light: '#f2f2f2'
        // primary: '#1E3A8A',
        // primary_light: '#eff6ff'
      }
    },
  },
  plugins: [],
}

