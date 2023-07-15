import { defineConfig } from 'vite'
import path from 'path';
import Checker from 'vite-plugin-checker'

export default defineConfig({
  base: './',
  plugins: [
    Checker({ typescript: true })
  ],
  resolve: {
    alias: {
      '~materializecss': path.resolve(__dirname, 'node_modules/materialize-css')
    }
  }
});
