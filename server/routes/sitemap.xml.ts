import { candidates } from '../../shared/content/candidates'
import { myths } from '../../shared/content/myths'
import { siteConfig } from '../../shared/config/site'
import { buildCategoryPath, buildCandidatePath, buildMythPath } from '../../shared/utils/routes'

function entry(path: string) {
  return `<url><loc>${siteConfig.siteUrl}${path}</loc></url>`
}

export default defineEventHandler((event) => {
  const categoryPaths = myths.map((myth) => buildCategoryPath(myth.candidate, myth.category))
  const mythPaths = myths.map((myth) => buildMythPath(myth.candidate, myth.category, myth.slug))

  const urls = [
    '/',
    ...candidates.map(candidate => buildCandidatePath(candidate.slug)),
    ...categoryPaths,
    ...mythPaths
  ]

  const uniqueUrls = [...new Set(urls)]

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...uniqueUrls.map(entry),
    '</urlset>'
  ].join('')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return body
})
