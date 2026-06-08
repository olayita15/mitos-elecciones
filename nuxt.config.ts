import tailwindcss from '@tailwindcss/vite'
import { candidates } from './shared/content/candidates'
import { myths } from './shared/content/myths'
import { siteConfig } from './shared/config/site'

const candidateRoutes = candidates.map(candidate => `/${candidate.slug}`)

const categoryRoutes = Array.from(
  new Set(myths.map(myth => `/${myth.candidate}/${myth.category}`))
)

const mythRoutes = myths.map(myth => `/${myth.candidate}/${myth.category}/${myth.slug}`)

const prerenderRoutes = [
  '/sitemap.xml',
  ...candidateRoutes,
  ...categoryRoutes,
  ...mythRoutes
]

export default defineNuxtConfig({
  compatibilityDate: '2026-06-07',
  devtools: { enabled: false },
  srcDir: 'app/',
  buildDir: '.nuxt',
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [tailwindcss() as any]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      viewport: 'width=device-width, initial-scale=1',
      title: siteConfig.name,
      meta: [
        {
          name: 'description',
          content: siteConfig.description
        }
      ]
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [...new Set(prerenderRoutes)]
    }
  }
})
