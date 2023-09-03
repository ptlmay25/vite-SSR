/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/5": "4 / 5",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
        "1/1": "1 / 1",
      },
    },
    fontFamily: {
      roboto: ["roboto"],
      "Roboto Slab": ["Slab"],
    },
    screens: {
      XSE: "320px",
      SE: "540px",
      MD: "520px",
    },
  },
  plugins: [],
};
