/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':    '#0a0a0a',
        'bg-card':       '#111111',
        'bg-card-hover': '#1a1a1a',
        'accent-cyan':   '#00ffff',
        'accent-green':  '#00ff41',
        'text-muted':    '#888888',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
