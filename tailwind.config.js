/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1,1.5)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
      animation: {
        rotate: "rotate 15s linear infinite",
      },
    },
    colors: {
      primary: "#3ec76e",
      secondary: "#000f4a",
      white: "#ffffff",
      stone: "#e7e5e4",
      transparent: "transparent",
      yellow: "#facc15",
      neutral: "#F0F9FF",
      breeze: "#CFFAFE",
      cool: "#F0FDF4",
    },
  },
  plugins: [],
};
