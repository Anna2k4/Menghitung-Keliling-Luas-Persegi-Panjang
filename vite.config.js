import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], 
  build: {
    rollupOptions: {
      input: {
        TUGAS4: "TUGAS4.html"
      }
    }
  }
});
