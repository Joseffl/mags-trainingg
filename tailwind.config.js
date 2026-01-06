// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk", "sans-serif"],
        main: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary1: "#28ac30",        // Bright green
        background1: "#FFFFFF",     // White background
        button: "#28ac30",          // Button green
        background2: "#FFFFFF",     // Secondary background white
        text: "#060606",            // Main text
        text1: "#060606",           // Secondary text
        text2: "#060606",           // Tertiary text
        text3: "#060606",           // Subtle text
        footerBackground: "#044c08" // Footer
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
      },
    },
  },
  plugins: [],
};
