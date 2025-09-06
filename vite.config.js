import { defineConfig } from 'vite'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    root: 'src',
    base: '/execution-results/',
    build: {
      outDir: '../dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild'
    },
    define: {
      // Firebase 설정을 빌드 시점에 주입
      'import.meta.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY || "AIzaSyDT0Uv6LSMfD5b8ykB0ch4N7EvpF4-chTM"),
      'import.meta.env.VITE_AUTH_DOMAIN': JSON.stringify(env.VITE_AUTH_DOMAIN || "execution-results.firebaseapp.com"),
      'import.meta.env.VITE_PROJECT_ID': JSON.stringify(env.VITE_PROJECT_ID || "execution-results"),
      'import.meta.env.VITE_STORAGE_BUCKET': JSON.stringify(env.VITE_STORAGE_BUCKET || "execution-results.firebasestorage.app"),
      'import.meta.env.VITE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_MESSAGING_SENDER_ID || "449225654732"),
      'import.meta.env.VITE_APP_ID': JSON.stringify(env.VITE_APP_ID || "1:449225654732:web:4a99d2c54e6c9dda621d69")
    }
  }
})
