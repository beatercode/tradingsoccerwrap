/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    cssTarget: 'chrome61',
    sourcemap: true,
    rollupOptions: {
      external: ['tradingsoccerlib'],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'tradingsoccerwrap.css'
          }
        },
        globals: {
          tradingsoccerlib: 'tradingsoccerlib'
        },
      },
    },
    lib: {
      entry: './src/index.ts',
      name: 'tradingsoccerwrap',
      fileName: (format) => {
        if (format === 'es') {
          return 'tradingsoccerwrap.js'
        }
        if (format === 'umd') {
          return 'tradingsoccerwrap.umd.js'
        }
      }
    }
  }
})
