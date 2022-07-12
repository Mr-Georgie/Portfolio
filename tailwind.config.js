module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "trans-black": "rgba(0, 0, 0, 0.5)",
        "hover-black": "rgba(0, 0, 0, 0.9)",
        "custom-blue": "#2971ab",
        "custom-red": "#e33884",
        "custom-text-grey": "#8892B0",
        "custom-text-green": "#64FFDA",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
