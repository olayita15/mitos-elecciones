<script setup lang="ts">
import { useMyths } from '../composables/useMyths'
import { buildCollectionJsonLd, useSeo } from '../composables/useSeo'

const { candidates, categories, getMyths } = useMyths()
const items = getMyths()

const title = 'Mitos y verificaciones presidenciales'
const description =
  'Explora rápidamente mitos, verificaciones y afirmaciones sobre candidatos presidenciales de Colombia.'

useSeo({
  title,
  description,
  path: '/',
  jsonLd: buildCollectionJsonLd({
    title,
    description,
    path: '/'
  })
})
</script>

<template>
  <ExploreShell
    :title="title"
    :description="description"
    :candidates="candidates"
    :categories="categories"
    :available-categories="[]"
    :items="items"
  />
</template>
