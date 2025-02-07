import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  plugins: [
    tailwindcss(),
    shopify()
  ]
})
