/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
  ],
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
        'spacepurple': 'rgba(178, 121, 216, .959);', 
        'highlight-purple': '#c770f0',

        borderColor: {
          'cardborder': 'rgb(240, 246, 252)',
        },
      },
    },
  },
  plugins: [],
};
