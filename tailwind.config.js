/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1f44',
        green: '#228B22',
        gold:  '#E2B34B',
        steel: '#d3dce6',
      },
      fontFamily:{
        sans:['"Futura Cyr"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
