module.exports = {
  mode: 'jit',
  content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#adbac7',
          200: '#909dab',
          300: '#76839',
          400: '#636e7b',
          500: '#545d68',
          600: '#444c56',
          700: '#373e47',
          800: '#2d333b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
