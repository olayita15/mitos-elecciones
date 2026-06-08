export function buildCandidatePath(candidateSlug?: string | null) {
  return candidateSlug ? `/${candidateSlug}` : '/'
}

export function buildCategoryPath(candidateSlug: string, categorySlug?: string | null) {
  return categorySlug ? `/${candidateSlug}/${categorySlug}` : `/${candidateSlug}`
}

export function buildMythPath(candidateSlug: string, categorySlug: string, mythSlug: string) {
  return `/${candidateSlug}/${categorySlug}/${mythSlug}`
}
