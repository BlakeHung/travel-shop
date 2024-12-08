import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-electron-plugin'

export default defineConfig({
  plugins: [
    react(),
    electron()
  ]
})
