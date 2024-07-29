import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://kake.lu',
  integrations: [alpinejs(), mdx(), sitemap(), tailwind()],
})
