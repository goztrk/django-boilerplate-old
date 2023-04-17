import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import ReactInspector from 'vite-plugin-react-inspector';

const rootDir = path.resolve(__dirname, 'frontend');

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [ReactInspector(), react(), tsconfigPaths()],
  root: rootDir,
  base: 'static/',
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, 'public/js'),
    rollupOptions: {
      input: {
        home: 'apps/home/main.tsx',
      },
    },
  },
});
