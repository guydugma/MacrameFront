import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const serverUrl = "http://localhost:8080/api";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.SERVER_URL': env.SERVER_URL,
    }
  }
})


