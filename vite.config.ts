import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fitness/',
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src', 'components'),
      '@hooks': resolve(__dirname, 'src', 'hooks'),
      '@utils': resolve(__dirname, 'src', 'utils'),
      '@API': resolve(__dirname, 'src', 'API'),
      '@store': resolve(__dirname, 'src', 'store'),
      '@': resolve(__dirname, 'src'),
    },
  },
});
