<script setup lang="ts">
import BreadcrumbTrail from '../../../components/app/BreadcrumbTrail.vue'
import MythDetail from '../../../components/myths/MythDetail.vue'
import { useMyths } from '../../../composables/useMyths'
import { buildMythJsonLd, useSeo } from '../../../composables/useSeo'
import { buildCandidatePath, buildCategoryPath } from '~~/shared/utils/routes'

const route = useRoute()
const {
  getCandidate,
  getCategory,
  getMyth
} = useMyths()

const candidateSlug = route.params.candidate as string
const categorySlug = route.params.category as string
const mythSlug = route.params.slug as string

const candidate = getCandidate(candidateSlug)
const category = getCategory(categorySlug)
const myth = getMyth(candidateSlug, categorySlug, mythSlug)

if (!candidate || !category || !myth) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Verificación no encontrada'
  })
}

const path = `/${candidate.slug}/${category.slug}/${myth.slug}`
const title = `${myth.title} | Verificación`
const description = myth.summary

useSeo({
  title,
  description,
  path,
  type: 'article',
  jsonLd: buildMythJsonLd({
    myth,
    candidateName: candidate.name,
    categoryName: category.name,
    path
  })
})

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: candidate.name, to: buildCandidatePath(candidate.slug) },
  { label: category.name, to: buildCategoryPath(candidate.slug, category.slug) }
]

</script>

<template>
  <div class="explore-layout myth-detail-layout">
    <BreadcrumbTrail :items="breadcrumbs" />
    <MythDetail
      :myth="myth"
      :candidate-name="candidate.name"
      :category-name="category.name"
    />
  </div>
</template>
