/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'github': ['Raleway', 'serif'],
      },
      borderWidth: {
        '0.5': '0.1px',
      },
      colors: {
        'spacedark': 'rgb(20, 16, 39)',
        'spacepurple': 'rgba(178, 121, 216, .959)',
        'highlight-purple': '#c770f0',
        'action-color': '#8A2BE2',
        'action-color-hover': '#7A1FA2',
        'cardborder': 'rgb(240, 246, 252)', // Moved borderColor to colors
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      scale: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
};