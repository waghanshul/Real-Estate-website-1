import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './client',  // Set the root directory to the 'client' folder
  optimizeDeps: {
    include: ['leaflet'],
  },
  build: {
    outDir: '../dist',  // Output directory outside of the 'client' folder
  },
});
