import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Kasa'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? `/${repoName}/` : '/',
  }
})
