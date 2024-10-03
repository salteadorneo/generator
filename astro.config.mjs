// @ts-check
import { defineConfig } from 'astro/config'
import deno from '@deno/astro-adapter'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://generator.salteadorneo.dev',
  output: 'server',
  adapter: deno(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },
  integrations: [tailwind()]
})
