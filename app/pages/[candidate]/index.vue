<script setup lang="ts">
import { useMyths } from '../../composables/useMyths'
import { buildCollectionJsonLd, useSeo } from '../../composables/useSeo'

const route = useRoute()
const { candidates, categories, getCandidate, getCategoriesForCandidate, getMyths } = useMyths()

const candidateSlug = route.params.candidate as string
const candidate = getCandidate(candidateSlug)

if (!candidate) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Candidato no encontrado'
  })
}

const items = getMyths({ candidate: candidate.slug })
const availableCategories = getCategoriesForCandidate(candidate.slug)
const title = `${candidate.name} | Mitos y Realidades`
const description = `Consulta mitos y verificaciones asociados a ${candidate.name}.`

useSeo({
  title,
  description,
  path: `/${candidate.slug}`,
  jsonLd: buildCollectionJsonLd({
    title,
    description,
    path: `/${candidate.slug}`
  })
})
</script>

<template>
  <ExploreShell
    :title="candidate.name"
    :description="candidate.description"
    :candidates="candidates"
    :categories="categories"
    :available-categories="availableCategories"
    :items="items"
    :active-candidate="candidate.slug"
  />
</template>
