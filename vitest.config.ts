import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
})

