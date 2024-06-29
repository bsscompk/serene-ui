import { defineConfig } from "vite";

import path from "path";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid()],
    server: {
        host: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@demo": path.resolve(__dirname, "src/demo"),
            "@fonts": path.resolve(__dirname, "src/fonts"),
            "@stylesheets": path.resolve(__dirname, "src/stylesheets"),
        },
    },
});
