import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Set `base` when deploying under a sub-path (e.g. GitHub Pages):
// base: "/nasira.naeibi3795/",
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2022",
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
});