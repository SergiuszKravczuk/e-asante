/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: "'Philosopher', 'sans-serif'",
        opensans: " 'Open Sans', 'sans-serif'",
      },
      colors: {
        lblue: "#81C7DC",
        dGray: "#474747",
      },
      transitionDuration: {
        200: "200ms",
      },
      transitionTimingFunction: {
        linear: "linear",
      },
      screens: {
        md: "990px",
      },
    },
  },
  plugins: [],
};
