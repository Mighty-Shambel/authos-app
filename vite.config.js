import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    hmr: {
      overlay: true,
      extensions: ['js', 'css', 'vue'] // Add 'vue' if not already present
    }
  },
  plugins: [vue()],
})
