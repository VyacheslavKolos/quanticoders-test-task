import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: { exclude: ['js-big-decimal'] },

  plugins: [react()],
});
