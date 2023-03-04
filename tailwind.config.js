/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                blue: "#1A66FF",
                black: "#0D0D0D",
                background: "#E5E5E5",
                gray: "#212121",
            },
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
