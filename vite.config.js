import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {chunkSizeWarningLimit: 1600,},
  // other configurations...

  assetsInclude: ['**/*.png', '**/*.PNG'],

  // Add the following rule for image handling
  optimizeDeps: {
    include: ['**/*.png', '**/*.PNG'],
  },
});
