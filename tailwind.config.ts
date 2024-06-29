import type { Config } from "tailwindcss";

export default {
    content: ["src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    white: "#ffffff",
                    "jet-black": "#232323",
                    "clay-blue": "#2f505c",
                    "apple-green": "#89bf4f",
                    "olive-green": "#b9bd51",
                    "fig-purple": "#672c5c",
                },
            },
            fontFamily: {
                figtree: ["Figtree"],
                "red-hat-display": ["Red Hat Display"],
            },
        },
    },
    plugins: [],
} satisfies Config;
