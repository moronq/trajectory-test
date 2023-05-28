import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      common: '/src/common',
      components: '/src/components',
      utils: '/src/utils'
    }
  }
})
