import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
      }),
  ],
  server: {
    host: 'localhost',
    port: 8000,
  }
});