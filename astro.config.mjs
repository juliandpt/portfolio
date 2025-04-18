import { defineConfig, envField } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "secret"
      })
    }
  }
})
