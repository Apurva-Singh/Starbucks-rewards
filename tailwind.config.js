module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      8: "128px",
    },
    boxShadow: {
      upper: "0 1px rgba(0, 0, 0, 0.25)",
    },
    backgroundPosition: {
      rightbottom: "100% -10%",
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
