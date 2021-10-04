module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    letterSpacing: {
      widest: '2em',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
