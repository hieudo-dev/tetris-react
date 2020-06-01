module.exports = {
  theme: {
    extend: {
      colors: {
        blue: "#006FFF",
        green: "#00D873",
        yellow: "#F5F506",
        red: "#C23030",
        teal: "#2ED8D8",
        darkblue: { default: "#22222E" }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))"
      },
      spacing: {
        "7": "1.75rem"
      }
    }
  },
  variants: {},
  plugins: []
};
