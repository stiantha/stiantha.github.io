// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://stiantha.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()],
  },
}); 