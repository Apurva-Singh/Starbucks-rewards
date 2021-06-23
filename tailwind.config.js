module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      8: "128px",
      80: "80%",
      60: "60%",
      40: "40%",
    },
    minWidth: {
      77: "77%",
      69: "69%",
    },
    boxShadow: {
      upper: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);",
      none: " 0px 0px 0px white;",
    },

    color: {
      secondary: "#000057",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-star": "url('./img/hero.png')",
      }),
    },
    backgroundPosition: {
      "right-bottom": "50% 120%",
    },

    backgroundSize: {
      "auto-100%": "auto 100%",
      "43-rem": "43rem",
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
