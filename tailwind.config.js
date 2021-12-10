module.exports = {
  purge: ["./src/*.js", "./src/**/*.js", "./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "storefront-colour": "url('/storefront-colour.svg')",
      }),
      textColor: (theme) => ({
        "storefront-colour": "#FF0000",
      }),
      colors: {
        turquoise: "#74d5de",
        "reddish-brown": "#ed6e58",
        "faded-green": "#deebec",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
