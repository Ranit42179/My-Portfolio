import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,       
    host: '0.0.0.0', 
    strictPort: true,
    // Add the proxy block here
    proxy: {
      '/api': {
        target: 'https://chatbot-deployment-latest-vx0g.onrender.com',
        changeOrigin: true,
        secure: true, // Recommended for https targets
        rewrite: (path) => path.replace(/^\/api/, '/gemini/api/v1'),
      },
    },
  },
})