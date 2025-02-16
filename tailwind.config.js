/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"], 
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px"}, sm: {max: "550px" } },
    extend: {colors: {
      amber: {500: "var(--amber_500)"},
      background: "var(--background)",
      background_n: "var(--background_n)",
      blue_gray: { 900: "var(--blue_gray_900)"},
      deep_purple: {
          "100_02": "var(--deep_purple_100_02)",
          "100_33": "var(--deep_purple_100_33)",
          "a200_02": "var(--deep_purple_a200_02)",
          "a200_33": "var(--deep_purple_a200_33)",
          "a200_7f": "var(--deep_purple_a200_7f)",
      },
      gray: { 300: "var(--gray_300)", 400: "var(--gray_400)"},
      high_contrast: "var(--high_contrast)",
      light_blue: { 600: "var(--light_blue_600)"},
      low_constrast: "var(--low_constrast)",
      medium_constrast: "var(--medium_constrast)",
      primary: "var(--primary)",
      primary_shades: "var(--primary_shades)",
      purple: { 600: "var(--purple_600)"},
      white: "var(--white)",
      black: { 600: "var(--back_600)"},
      gray_shadow: "var(--gray_shadow)",
  },
  boxShadow: { xs: "0 0 13px 5px #00000029"},
  fontFamily: { neuemontreal: "Neue Montreal", poppins: "Poppins"},
  backgroundImage: { gradient: "linear-gradient(90deg, #cebc933, #cebce902)"}
},
},
  plugins: [require("@tailwindcss/forms")],
}

