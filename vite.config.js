
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,   // Enable globals like describe, test, and expect
    environment: 'jsdom', // Simulate a browser environment
    setupFiles: './src/setupTests.js', // Optional setup file
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
});
