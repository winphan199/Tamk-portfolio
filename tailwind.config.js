module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'default':
      // }
      colors: {
        brand: '#4e008e',
        normaltext: '#08131f',
      },
      boxShadow: {
        dropdownmenu: ' 0 0 8px rgb(0 0 0 / 10%)',
      },
    },
  },
};
