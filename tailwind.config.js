module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Mulish'],
    },

    extend: {
      colors: {
        // https://creativemarket.com/delightful.design/2798793-UI-Kit-Lombok#fullscreen
        brand: {
          olive: '#A3BCB6',
          green: '#39603D',
          grey: '#3C403D',
          tan: '#DADED4',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
