import type { Myth } from '~~/shared/types/content'
import { siteConfig } from '~~/shared/config/site'

interface SeoInput {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

function buildCanonical(path: string) {
  return `${siteConfig.siteUrl}${path}`
}

export function useSeo(input: SeoInput) {
  const canonical = buildCanonical(input.path)

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogUrl: canonical,
    ogImage: `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    ogType: input.type ?? 'website',
    ogLocale: siteConfig.locale,
    ogSiteName: siteConfig.name,
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonical
      }
    ],
    script: input.jsonLd
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(input.jsonLd)
          }
        ]
      : []
  })
}

export function buildCollectionJsonLd(input: {
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.title,
    description: input.description,
    url: buildCanonical(input.path),
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.siteUrl
    }
  }
}

export function buildMythJsonLd(input: {
  myth: Myth
  candidateName: string
  categoryName: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    url: buildCanonical(input.path),
    claimReviewed: input.myth.title,
    reviewRating: {
      '@type': 'Rating',
      alternateName: input.myth.verdict
    },
    itemReviewed: {
      '@type': 'Claim',
      name: input.myth.title
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    about: [
      {
        '@type': 'Person',
        name: input.candidateName
      },
      {
        '@type': 'Thing',
        name: input.categoryName
      }
    ],
    description: input.myth.summary
  }
}
