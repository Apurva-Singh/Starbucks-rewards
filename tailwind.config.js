module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      8: "128px",
    },
    boxShadow: {
      upper: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);",
    },

    color: {
      secondary: "#000057",
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-star":
          "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
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
