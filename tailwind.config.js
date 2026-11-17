/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        ocean: {
          light: '#2B5876',
          DEFAULT: '#1E3A5F',
          dark: '#0E1A2B'
        },
        navy: {
          DEFAULT: '#080D1A',
          deep: '#04070D'
        },
        sunset: {
          orange: '#FF7A30',
          red: '#E85A2A',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        decorative: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
