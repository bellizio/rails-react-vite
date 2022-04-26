import { defineConfig } from 'vite';
import ruby from 'vite-plugin-ruby';
import react from '@vitejs/plugin-react';
import fullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    ruby(),
    react(),
    fullReload(['config/routes.rb', 'app/views/**/*']),
  ],
});
