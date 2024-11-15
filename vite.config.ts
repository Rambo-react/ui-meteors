import path, { resolve } from 'path'

import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { dependencies, devDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'ui-meteors',
      // the proper extensions will be added
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          dest: '',
          src: 'src/styles/_typography.scss',
        },
        {
          dest: 'assets',
          src: 'src/assets/sprite.svg',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
})
