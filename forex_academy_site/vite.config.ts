import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⬇ Disable TypeScript type checking during build
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
