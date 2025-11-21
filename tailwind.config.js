/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F9F7F2',
        ink: '#2A2A2A',
        'accent-teal': '#136B69',
        'accent-gold': '#B0600E',
        'line-color': '#E5E0D8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.02em',
        widest: '0.08em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        subtle: '0 10px 30px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
