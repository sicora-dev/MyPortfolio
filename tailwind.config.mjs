/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F3EFF5",
          text: "#0D0A0B",
        },
        dark: {
          background: "#0D0A0B",
          text: "#F3EFF5",
        }
      },
      fontFamily: {
        'body': ['"Geist"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
