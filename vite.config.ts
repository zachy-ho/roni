import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      'ui': path.resolve(__dirname, './src/ui'),
      'game': path.resolve(__dirname, './src/game'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
