/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fb923c',
          dark: '#fb923c',
        },
        secondary: {
          light: '#6b7280',
          dark: '#6b7280',
        },
        onPimary: '#ffffff',
        onSecondary: '#ffffff',
      },
    },
  },
  plugins: [],
}

