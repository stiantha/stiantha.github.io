import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stiantha.github.io',
  base: '/',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
}); 