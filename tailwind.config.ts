import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-navy': '#0a1f44',
        'forest-green': '#228B22',
        'gold': '#E2B34B',
        'white': '#ffffff',
        'light-steel': '#d3dce6',
      },
      fontFamily: {
        'futura': ['Futura Cyrillic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config