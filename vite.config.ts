import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// const productionPath = '/';

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV == 'production' ? productionPath : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
