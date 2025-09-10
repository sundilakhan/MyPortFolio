/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0d',
        accent: '#a855f7',
        glow: '#3b82f6',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
