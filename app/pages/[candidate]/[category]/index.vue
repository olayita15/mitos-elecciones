<script setup lang="ts">
import { useMyths } from '../../../composables/useMyths'
import { buildCollectionJsonLd, useSeo } from '../../../composables/useSeo'

const route = useRoute()
const { candidates, categories, getCandidate, getCategory, getCategoriesForCandidate, getMyths } = useMyths()

const candidateSlug = route.params.candidate as string
const categorySlug = route.params.category as string

const candidate = getCandidate(candidateSlug)
const category = getCategory(categorySlug)

if (!candidate || !category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Filtro no encontrado'
  })
}

const items = getMyths({
  candidate: candidate.slug,
  category: category.slug
})

if (!items.length) {
  throw createError({
    statusCode: 404,
    statusMessage: 'No hay verificaciones para esta combinación'
  })
}

const availableCategories = getCategoriesForCandidate(candidate.slug)
const title = `${category.name} - ${candidate.name} | Mitos y Realidades`
const description = `Consulta verificaciones de ${category.name} asociadas a ${candidate.name}.`

useSeo({
  title,
  description,
  path: `/${candidate.slug}/${category.slug}`,
  jsonLd: buildCollectionJsonLd({
    title,
    description,
    path: `/${candidate.slug}/${category.slug}`
  })
})
</script>

<template>
  <ExploreShell
    :title="category.name"
    :description="description"
    :candidates="candidates"
    :categories="categories"
    :available-categories="availableCategories"
    :items="items"
    :active-candidate="candidate.slug"
    :active-category="category.slug"
  />
</template>
