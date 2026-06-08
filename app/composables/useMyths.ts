import { categories } from '~~/shared/content/categories'
import { candidates } from '~~/shared/content/candidates'
import { myths } from '~~/shared/content/myths'
import type { Category } from '~~/shared/types/content'

function humanizeSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function useMyths() {
  const categoriesBySlug = new Map(categories.map(category => [category.slug, category]))

  const missingCategories: Category[] = Array.from(new Set(myths.map(myth => myth.category)))
    .filter(categorySlug => !categoriesBySlug.has(categorySlug))
    .map(categorySlug => ({
      slug: categorySlug,
      name: humanizeSlug(categorySlug),
      description: `Verificaciones sobre ${humanizeSlug(categorySlug)}.`
    }))

  const resolvedCategories = [...categories, ...missingCategories]

  const getCandidate = (slug?: string | null) =>
    candidates.find(candidate => candidate.slug === slug)

  const getCategory = (slug?: string | null) =>
    resolvedCategories.find(category => category.slug === slug)

  const getMyth = (candidateSlug?: string | null, categorySlug?: string | null, mythSlug?: string | null) =>
    myths.find(
      myth =>
        myth.candidate === candidateSlug &&
        myth.category === categorySlug &&
        myth.slug === mythSlug
    )

  const getMyths = (filters?: { candidate?: string | null; category?: string | null }) =>
    myths.filter((myth) => {
      if (filters?.candidate && myth.candidate !== filters.candidate) {
        return false
      }

      if (filters?.category && myth.category !== filters.category) {
        return false
      }

      return true
    })

  const getCategoriesForCandidate = (candidateSlug?: string | null) => {
    if (!candidateSlug) {
      return []
    }

    const usedCategories = new Set(
      myths
        .filter(myth => myth.candidate === candidateSlug)
        .map(myth => myth.category)
    )

    return resolvedCategories.filter(category => usedCategories.has(category.slug))
  }

  return {
    candidates,
    categories: resolvedCategories,
    myths,
    getCandidate,
    getCategory,
    getMyth,
    getMyths,
    getCategoriesForCandidate
  }
}
