module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "300px",
      // => @media (min-width: 300px) { ... }
      tablet: "767px",
      // => @media (min-width: 767px) { ... }

      laptop: "1366px",
      // => @media (min-width: 1366px) { ... }

      desktop: "1535px",
      // => @media (min-width: 1535px) { ... }
    },
  },
  plugins: [],
};
