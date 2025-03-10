/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assests/houses/img24.jpg')",
        'delhi': "url('assests/locations/delhi.avif')",
        'agra': "url('assests/locations/agra.avif')",
        'hyderabad': "url('assests/locations/hyderabad.avif')",
        'mumbai': "url('assests/locations/mumbai.avif')",
        'chennai': "url('assests/locations/chennai.avif')",
        'punjab': "url('assests/locations/punjab.avif')",
        'kashmir': "url('assests/locations/kashmir.avif')",
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        slideOutLeft: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
        },
      },
      animation: {
        'rotate-360': 'rotate360 2s infinite',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        slideOutLeft: 'slideOutLeft 0.5s ease-out forwards',
      }
    },
  },
  plugins: [
  ],
}

