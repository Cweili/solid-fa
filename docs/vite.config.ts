import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  plugins: [solidPlugin()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rolldownOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
    },
  },
});
