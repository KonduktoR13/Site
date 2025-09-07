import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // GitHub Pages serves this site from https://<user>.github.io/Site/
  // so all asset URLs must be prefixed with /Site/
  base: '/Site/',
  plugins: [vue()]
})
