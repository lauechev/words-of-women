import { defineConfig } from 'vite';

export default defineConfig({
  base: '/words-of-women/',
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  build: {
    outDir: 'publico',
    assetsDir: 'assets',
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
