/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Keep your base colors but ensure consistent use across UI
        bg: '#0b0b0d',          // main dark background
        accent: '#a855f7',      // violet accent (buttons, highlights)
        glow: '#3b82f6',        // blue glow color
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'monospace'],
      },

      // 🌈 Add subtle background gradient animation
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },

      // 💫 Optional glowing shadow presets
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',      // blue glow
        'accent': '0 0 15px rgba(168, 85, 247, 0.5)',    // violet glow
      },

      // 🔮 Optional blur or frosted card effect
      backdropBlur: {
        'md': '12px',
      },
    },
  },
  plugins: [],
}
