import path from 'node:path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Svelte 5 + Tailwind 4. This repo is the standalone source; by default it
// builds into ./dist. Set OUT_DIR to build straight into the easysh server's
// go:embed directory, e.g.:
//   OUT_DIR=../easysh/pkg/webui/dist npm run build
const outDir = process.env.OUT_DIR || 'dist'

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: { $lib: path.resolve('./src/lib') },
  },
  server: {
    host: '0.0.0.0',
    port: 18501,
    strictPort: true,
    allowedHosts: true,
    proxy: { '/api': 'http://localhost:18080' },
  },
  build: {
    outDir,
    emptyOutDir: true,
    target: 'es2022',
  },
})
