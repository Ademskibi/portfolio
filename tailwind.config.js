/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
      colors: { ink: '#0a0e0d', panel: '#111716', line: '#1f2a28', accent: '#34d399' },
      keyframes: { fade: { '0%': { opacity: 0 }, '100%': { opacity: 1 } }, rise: { '0%': { opacity: 0, transform: 'translateY(14px)' }, '100%': { opacity: 1, transform: 'none' } } },
      animation: { rise: 'rise .7s ease-out both', fade: 'fade .35s ease-out both' },
    },
  },
  plugins: [],
}
