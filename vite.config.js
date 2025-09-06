import { defineConfig } from 'vite'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: '/execution-results/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'terser'
    },
    define: {
      // 환경변수를 빌드 시점에 주입
      'import.meta.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY),
      'import.meta.env.VITE_AUTH_DOMAIN': JSON.stringify(env.VITE_AUTH_DOMAIN),
      'import.meta.env.VITE_PROJECT_ID': JSON.stringify(env.VITE_PROJECT_ID),
      'import.meta.env.VITE_STORAGE_BUCKET': JSON.stringify(env.VITE_STORAGE_BUCKET),
      'import.meta.env.VITE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_MESSAGING_SENDER_ID),
      'import.meta.env.VITE_APP_ID': JSON.stringify(env.VITE_APP_ID)
    }
  }
})
