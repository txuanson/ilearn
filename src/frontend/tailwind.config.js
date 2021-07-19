const colors = require('tailwindcss/colors')
module.exports = {

    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: "#50AF50",
          dark: "#26663A",
          transparent: "transparent",
          current: 'currentColor',
          blue: colors.cyan
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],

  };
