import { siteConfig } from './shared/config/site'

const prerenderRoutes = [
  '/sitemap.xml',
  '/cepeda',
  '/abelardo',
  '/cepeda/seguridad',
  '/cepeda/justicia',
  '/cepeda/economia',
  '/abelardo/justicia',
  '/abelardo/salud',
  '/abelardo/infraestructura',
  '/abelardo/relaciones-internacionales',
  '/abelardo/corrupcion',
  '/abelardo/trabajo',
  '/cepeda/seguridad/cepeda-pidio-respeto-para-las-farc',
  '/cepeda/seguridad/un-audio-de-alias-calarca-muestra-apoyo-a-cepeda',
  '/cepeda/justicia/estados-unidos-cito-a-cepeda-por-narcotrafico',
  '/cepeda/justicia/cepeda-convocara-una-asamblea-constituyente-en-cuanto-gane',
  '/cepeda/justicia/el-papa-de-cepeda-secuestro-y-mato-a-los-diputados-del-valle',
  '/cepeda/economia/cepeda-dijo-que-el-estado-administrara-la-riqueza',
  '/cepeda/economia/cepeda-expropiara-las-tierras-de-grandes-terratenientes',
  '/cepeda/seguridad/cepeda-es-guerrillero-o-tiene-vinculos-con-las-farc',
  '/abelardo/justicia/abelardo-tiene-65-o-mas-de-intencion-de-voto',
  '/abelardo/justicia/el-cne-tumbo-la-candidatura-de-abelardo-por-firmas-falsas',
  '/abelardo/salud/abelardo-acabara-los-subsidios-sociales-y-el-sisben',
  '/abelardo/infraestructura/abelardo-contrato-buses-para-inflar-sus-mitines',
  '/abelardo/relaciones-internacionales/bukele-pidio-votar-por-abelardo',
  '/abelardo/relaciones-internacionales/donald-trump-respaldo-publicamente-a-abelardo',
  '/abelardo/trabajo/abelardo-propuso-trabajo-por-horas-y-eliminar-primas',
  '/abelardo/corrupcion/abelardo-fue-abogado-de-alex-saab-y-david-murcia',
  '/abelardo/justicia/abelardo-propone-cerrar-la-jep',
  '/abelardo/trabajo/abelardo-llego-a-la-politica-sin-experiencia-publica'
]

export default defineNuxtConfig({
  compatibilityDate: '2026-06-07',
  devtools: { enabled: false },
  srcDir: 'app/',
  css: ['~/assets/styles/main.css'],
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
