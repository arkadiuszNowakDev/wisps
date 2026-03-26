import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint src --no-fix',
        useFlatConfig: true
      }
    })
  ],
  base: '/wisps/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  }
})
