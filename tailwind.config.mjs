/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                main: "#22c55e",
            },
            animation: {
                blink: "blink 1.5s infinite step-end"
            },
            keyframes: {
                blink: {
                    "from, to": {opacity: 1},
                    "50%": {opacity: 0}
                }
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}
