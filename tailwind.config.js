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
        red: "#EF3826",
        "red-200": "#ef362533",
        green: "#00B69B",
        "green-200": "#00B69B33",
        orange: "#FD9A56",
        "orange-200": "#FD9A5633",
        purple: "#6226EF",
        "purple-200": "#6226EF33",
        pink: "#D456FD",
        "pink-200": "#D456FD33",
        blue: "#5A8CFF",
        "blue-200": "#5A8CFF33"
      },
    },
  },
  plugins: [],
};
