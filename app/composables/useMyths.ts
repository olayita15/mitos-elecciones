import { categories } from '~~/shared/content/categories'
import { candidates } from '~~/shared/content/candidates'
import { myths } from '~~/shared/content/myths'

export function useMyths() {
  const getCandidate = (slug?: string | null) =>
    candidates.find(candidate => candidate.slug === slug)

  const getCategory = (slug?: string | null) =>
    categories.find(category => category.slug === slug)

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

    return categories.filter(category => usedCategories.has(category.slug))
  }

  return {
    candidates,
    categories,
    myths,
    getCandidate,
    getCategory,
    getMyth,
    getMyths,
    getCategoriesForCandidate
  }
}
