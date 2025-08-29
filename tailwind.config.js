/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#e5e7eb", // slightly gray for light mode
        "dark-bg": "#1a1a1a",  // deep dark for dark mode
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
