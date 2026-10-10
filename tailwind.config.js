/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04100D',
          900: '#061814', // Leome signature background
          850: '#0A231E', // Leome card surface
          800: '#0E2E27',
          700: '#143D34',
          600: '#1C5246',
          500: '#2A7263',
        },
        mint: {
          100: '#E6FAF2',
          200: '#CEF6E6',
          300: '#9EF7D7', // Leome signature text & button accent
          400: '#6EE7B7',
          500: '#34D399',
          muted: '#7E9F96',
          dark: '#061814',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'mint-pill': '0 4px 20px -2px rgba(158, 247, 215, 0.25)',
        'physical-card': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(158, 247, 215, 0.15)',
        'billboard': '0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
