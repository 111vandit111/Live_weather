module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
        mh: {
          '1/2': '500px',
        },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
