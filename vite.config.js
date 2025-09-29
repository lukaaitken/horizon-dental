import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/horizon-dental/',
  plugins: [react()],
});
