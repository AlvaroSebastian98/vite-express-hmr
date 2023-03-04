import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  // base: '',
  plugins: [svelte()],
  root,
  appType: "mpa",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // login: resolve(root, 'pages/login/main.js'),
        // products: resolve(root, 'pages/products/main.js'),
        login: resolve(root, 'layouts/login.html'),
        products: resolve(root, 'layouts/products.html')
      },
      // output: {
      //   entryFileNames: `[name].js`,
      //   chunkFileNames: `[name].js`,
      //   assetFileNames: `[name].[ext]`
      // }
    },
  }
})
