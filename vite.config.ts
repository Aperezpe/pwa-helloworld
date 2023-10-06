import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      workbox: {
        globPatterns: ['**/*']
      },
      includeAssets: [
        '**/*'
      ],
      manifest: {
        "theme_color": "#FF0000",
        "background_color": "#FF0000",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Ract Vite PWA",
        "short_name": "MyPWA",
        "icons": [
          {
            "src": "manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "apple touch icon"
          },
          {
            "src": "manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      }
    }),
  ],
})
