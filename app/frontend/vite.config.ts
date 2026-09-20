import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
import path from 'path';
import {defineConfig} from 'vite';
import visionBoardsPlugin from './vite.visionBoardsPlugin';

const frontendRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), visionBoardsPlugin()],
    resolve: {
      alias: {
        '@': frontendRoot,
      },
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'],
      fs: {
        allow: [frontendRoot, path.resolve(frontendRoot, '..', '..')],
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'cookie',
        'lucide-react',
        'recharts',
        'motion',
      ],
      exclude: [],
      esbuildOptions: {
        supported: {
          'top-level-await': true,
        },
      },
    },
    ssr: {
      noExternal: ['react-router-dom'],
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsm: true,
      },
    },
    preview: {
      port: 5174,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});
