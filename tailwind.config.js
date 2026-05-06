/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a0908',
        dark: '#111110',
        surface: '#1a1916',
        border: '#2a2926',
        gold: '#c9a96e',
        'gold-light': '#e0c48a',
        offwhite: '#f0ece4',
        muted: '#8a8680',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
