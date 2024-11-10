import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//http://localhost:3000
export default defineConfig({
  server:{
    proxy:{
      '/api':{
       target: "https://se-project-backend-jfga.onrender.com",
         changeOrigin: true, 
       secure:false,
         rewrite: (path) => path.replace(/^\/api/, ''),
      
    }}
  },
  plugins: [react()],
})
