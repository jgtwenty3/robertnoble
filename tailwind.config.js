/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inconsolata:['inconsolata', 'sans-serif'],
        inconsolataBold:['bold', 'sans-serif'],
        vcr: ['vcr', 'sans-serif']
      }
    },
  },
  plugins: [],
}