/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:     '#004BD6',
          darkblue: '#062B8F',
          neon:     '#DFFF00',
          neonHover:'#C6E800',
          accent:   '#FFFF00',
          black:    '#101114',
        },
      },
      fontFamily: {
        sans:  ['"Space Grotesk"', 'sans-serif'],
        pixel: ['"Silkscreen"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm':    '3px 3px 0px 0px #000',
        'brutal':       '5px 5px 0px 0px #000',
        'brutal-lg':    '8px 8px 0px 0px #000',
        'brutal-neon':  '6px 6px 0px 0px #DFFF00',
        'brutal-white': '6px 6px 0px 0px #ffffff',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
