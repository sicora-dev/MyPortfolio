/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f5f5f5",
          mainText: "#374151",
          text: "#0a0a0a",
          miniCard: "#dfdfdf"
        },
        dark: {
          background: "#171717",
          mainText: "#d1d5db",
          text: "#ffffff",
          miniCard: "#272727"
        }
      },
      backgroundImage: {
        'light-shiny': 'radial-gradient(600px circle #dfdfdf, transparent 70%)',
        'dark-shiny': 'radial-gradient(600px circle #272727, transparent 70%)',
      },
      fontFamily: {
        'body': ['"Geist"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
