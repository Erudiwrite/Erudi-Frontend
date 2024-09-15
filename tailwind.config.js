/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
        lightbrown: '#D2B48C',
        darkbrown: '#5C4033',
        green: {
          600: '#4A773C',
        },
      },
      spacing: {
        'header-height': '4rem', // Add this line to specify the header height
      },
    },
  },
  plugins: [],
}
