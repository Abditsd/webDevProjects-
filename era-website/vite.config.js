import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Components use the .js extension, so treat .js files in src as JSX.
export default defineConfig({
  plugins: [react({ include: /\.js$/ })],
  esbuild: { loader: 'jsx', include: /src\/.*\.js$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
  server: { port: 5173 },
  preview: { port: 4173 },
  build: { outDir: '../UPLOAD-TO-SERVER', emptyOutDir: true },
});
