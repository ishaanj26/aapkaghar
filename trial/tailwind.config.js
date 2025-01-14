/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx}", // Include all JS/JSX/TS/TSX files in the src folder
    "./src/**/*.{js,jsx}", // Include all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

