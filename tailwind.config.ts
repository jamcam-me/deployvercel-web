import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        futura: ['Jost', 'sans-serif'],
        'futura-cyrillic-bold': ['Jost', 'sans-serif'],
        'futura-cyrillic-medium': ['Jost', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors
        'cyber-navy': '#0a1f44',
        'evergreen-intel': '#1f302d',
        'executive-gold': '#dab86e',
        
        // Secondary Brand Colors
        'cyber-graphite': '#2b2b2d',
        'soft-steel': '#a4aba4',
        'light-stone': '#d9ded9',
        'warm-rock': '#574536',
        'desaturated-green': '#5d9182',
        'kiwi-green': '#8dff2a', // New contrasting green color
        
        // Primary Color Variations - Cyber Navy Blue
        'navy-90': '#05101f',
        'navy-70': '#071732',
        'navy-700': '#0a1f44',
        'navy-600': '#0f2a5a',
        'navy-500': '#1a3970',
        'navy-400': '#4a6391',
        'navy-30': '#3a4c6c',
        'navy-60': '#6b7a94',
        
        // Primary Color Variations - Evergreen Intelligence Green
        'green-90': '#101a18',
        'green-70': '#162220',
        'green-base': '#1f302d',
        'green-30': '#4c5957',
        'green-60': '#798381',
        
        // Primary Color Variations - Executive BRI Gold
        'gold-30': '#ae933c',
        'gold-15': '#c4a555',
        'gold-base': '#dab86e',
        'gold-15t': '#e1c689',
        'gold-30t': '#e9d4a4',
        'gold-800': '#8b7355',
        'gold-900': '#6b5c47',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, var(--cyber-navy), var(--evergreen-intel))',
      },
    },
    typography: ({ theme }: { theme: any }) => ({
      DEFAULT: {
        css: {
          h1: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            fontSize: theme('fontSize.5xl'),
            marginTop: theme('spacing.20'), // Increased margin-top for large sections
            marginBottom: theme('spacing.8'), // Smaller margin-bottom for h1
          },
          h2: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            fontSize: theme('fontSize.4xl'),
            marginTop: theme('spacing.16'), // Increased margin-top for sections
            marginBottom: theme('spacing.6'), // Smaller margin-bottom for h2
          },
          h3: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            fontSize: theme('fontSize.3xl'),
            marginTop: theme('spacing.12'), // Increased margin-top for sub-sections
            marginBottom: theme('spacing.4'), // Smaller margin-bottom for h3
          },
          h4: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.3'),
          },
          h5: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.2'),
          },
          h6: {
            fontFamily: theme('fontFamily.futura-cyrillic-bold'),
            fontWeight: theme('fontWeight.bold'),
            textTransform: 'uppercase',
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.1'),
          },
          p: {
            marginBottom: theme('spacing.6'), // Keep paragraph margin-bottom
            marginTop: theme('spacing.2'), // Add a small margin-top for paragraphs
          },
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
