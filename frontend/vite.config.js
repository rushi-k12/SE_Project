import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//http://localhost:3000
export default defineConfig({
  server:{
    proxy:{
      '/api':{
       target: "http://localhost:3000",
        
       secure:false,
        
      
    }}
  },
  plugins: [react()],
})
