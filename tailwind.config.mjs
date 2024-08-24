/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            "animation": {
                "wobble": "wobble 1s ease-in-out"
            },
            "wobble": {
                "0%": {
                    "transform": "translateX(0)"
                },
                "15%": {
                    "transform": "translateX(-20px)"
                },
                "30%": {
                    "transform": "translateX(20%)"
                },
                "45%": {
                    "transform": "translateX(-15%)"
                },
                "60%": {
                    "transform": "translateX(20px)"
                },
                "75%": {
                    "transform": "translateX(-5%)"
                },
                "100%": {
                    "transform": "translateX(0)"
                }
            }
        }
    }
}