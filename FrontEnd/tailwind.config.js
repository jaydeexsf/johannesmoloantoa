/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom dark mode background colors
          "dark-bg-1": "#1E1E2E", // Midnight Blue
          "dark-bg-2": "#28293E", // Dark Slate
          "dark-bg-3": "#2C2C4E", // Deep Indigo
        },
        secondary: {
          // Secondary colors for dark mode
          "secondary-1": "#FFC857", // Soft Yellow
          "secondary-2": "#5CCFE6", // Aqua Blue
          "secondary-3": "#FF6F61", // Coral
        },
        tertiary: {
          // Tertiary colors for dark mode
          "tertiary-1": "#E0AFA0", // Warm Beige
          "tertiary-2": "#C2C1C0", // Light Gray
          "tertiary-3": "#8A7C77", // Warm Taupe
        },
      },
    },
  },
  plugins: [],
}
