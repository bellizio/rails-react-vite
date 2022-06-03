import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fullReload from 'vite-plugin-full-reload';
import ruby from 'vite-plugin-ruby';

export default defineConfig({
  plugins: [
    ruby(),
    react(),
    fullReload(['config/routes.rb', 'app/views/**/*']),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
