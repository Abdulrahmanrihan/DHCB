/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue" : "#146EF5",
        "dark" : "#1E1E1E",
        "darker" : "#080808",
        "gray": "#5A5A5A",
        "light-gray": "#D8D8D8",
        "beige": "#F0F0F0",
        "light-beige": "E0E0E0",
      }
    },
  },
  plugins: [],
};
