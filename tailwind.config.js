/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        sage: {
          DEFAULT: '#4F6352',
          dark: '#4A5D4E',
          light: '#6B8F6E',
        },
        cream: {
          light: '#FBF8F1',
          DEFAULT: '#EFE8D8',
          dark: '#E0D4BC',
        },
        ink: {
          DEFAULT: '#1E1E1C',
          soft: '#3A3A38',
          muted: '#6B6B68',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, #FBF8F1 0%, #EFE8D8 55%, #E0D4BC 100%)',
      },
      dropShadow: {
        'pouch':  ['0 20px 30px rgba(0,0,0,0.22)', '0 8px 15px rgba(0,0,0,0.16)'],
        'ground': ['0 28px 28px rgba(0,0,0,0.18)', '0 15px 15px rgba(0,0,0,0.12)'],
        'leaf':   ['0 6px 12px rgba(0,0,0,0.15)'],
      },
    },
  },
  plugins: [],
}
