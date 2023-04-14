import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: path.resolve(__dirname, 'frontend'),
  base: 'static/',
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, 'public/js'),
    rollupOptions: {
      input: {
        app: 'apps/home/app.tsx'
      },
    },
  },
});
