/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#090a0f',
        darkCard: '#11131f',
        darkBorder: '#1f2235',
        neonPurple: '#a855f7',
        neonCyan: '#06b6d4',
        neonPink: '#ec4899',
        neonGreen: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 15px rgba(168, 85, 247, 0.4)',
        'neon-cyan': '0 0 15px rgba(6, 182, 212, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

