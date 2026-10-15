/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        hotel: {
          dark:  '#0f172a',
          deep:  '#1e293b',
          mid:   '#334155',
          light: '#f8fafc',
        },
      },
      fontFamily: {
        serif:  ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.7) 50%, rgba(15,23,42,0.85) 100%)',
      },
    },
  },
  plugins: [],
}
