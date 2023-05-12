import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jpd-ong/',
  plugins: [react()],
  define: {
    __APP_ENV__: 'production',
  }
})
