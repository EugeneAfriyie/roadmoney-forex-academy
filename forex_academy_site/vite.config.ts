// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg'], // Include .jpg files
  base: '/', // Ensure correct base path for Firebase Hosting
});