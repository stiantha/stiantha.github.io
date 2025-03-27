import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stiantha.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
}); 