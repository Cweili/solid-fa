import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    solidPlugin(),
    cssInjectedByJsPlugin({
      injectCode: (cssCode, options) => {
        return `try{if(typeof document!='undefined'&&typeof document.createElement==='function'){` +
          `var elementStyle=document.createElement('style');` +
          (options.styleId ? `elementStyle.id="${options.styleId}";` : '') +
          `elementStyle.appendChild(document.createTextNode(${cssCode}));` +
          `typeof document.head!=='undefined'&&document.head.appendChild(elementStyle);` +
          `}}catch(e){}`;
      },
    }),
    dts({
      tsconfigPath: './tsconfig.json',
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SolidFa',
      formats: ['cjs', 'es', 'iife'],
      fileName: (format, _entryName) => {
        if (format === 'cjs') return 'solid-fa.cjs.js';
        if (format === 'es') return 'solid-fa.esm.js';
        if (format === 'iife') return 'solid-fa.js';
        return `solid-fa.${format}.js`;
      },
    },
    rolldownOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        exports: 'named',
        globals: {
          'solid-js': 'Solid',
          'solid-js/web': 'SolidWeb',
        },
      },
    },
    minify: false,
    cssMinify: true,
    cssCodeSplit: false,
  },
});
