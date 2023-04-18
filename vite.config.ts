import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const rootDir = path.resolve(__dirname, 'frontend');

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: rootDir,
  base: '/static/',
  resolve: {
    alias: [
      {
        find: /^~\/(.*?)/,
        replacement: '/$1',
      },
    ],
  },
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, 'public/js'),
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'frontend/apps/home/main.tsx'),
      },
    },
  },
});
