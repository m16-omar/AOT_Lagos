module.exports = {
    mode: "jit",
    content: ["./src/**/**/*.{js,ts,jsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        screens: { md: { max: "1050px"}, sm: { max: "550px"}},
        extend: {
            colors: {
                amber: {500: "var(--amber_500)"},
                background: "var(--background)",
                background_n: "var(--background_n)",
                blue_gray: { 900: "var(--blue_gray_900)"},
                deep_purple: {
                    "100_02": "var(--deep_purple_100_02)",
                    "100_33": "var(--deep_purple_100_33)",
                    
                }
            }
        }
    }
}