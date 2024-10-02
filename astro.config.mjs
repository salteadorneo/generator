// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://generator.salteadorneo.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  },
  integrations: [tailwind()]
})
