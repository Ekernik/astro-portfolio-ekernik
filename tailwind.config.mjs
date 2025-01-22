/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      orange: '#E57234',
      egg: '#F7F7F7',
      border: '#F5F5F5',
    },
    fontFamily: {
      serif: ['Istok Web', 'serif'],
    },
  },
  plugins: [],
};
