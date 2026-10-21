import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE_PATH || '/vue/',
  assetsInclude: ['**/*.svg'],
  commonjsOptions: {
    esmExternals: true,
  },
})
