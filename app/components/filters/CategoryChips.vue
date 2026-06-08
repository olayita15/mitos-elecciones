<template>
  <section v-if="candidateSlug" class="category-chips" aria-label="Filtrar por categoría">
    <div class="category-chips__list">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="category.slug === activeCategory ? buildCandidatePath(candidateSlug) : buildCategoryPath(candidateSlug, category.slug)"
        class="category-chip"
        :class="{ 'is-active': category.slug === activeCategory }"
        :aria-current="category.slug === activeCategory ? 'page' : undefined"
      >
        <span class="category-chip__hash">#</span>
        {{ category.name }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Category } from '~~/shared/types/content'
import { buildCandidatePath, buildCategoryPath } from '~~/shared/utils/routes'

defineProps<{
  categories: Category[]
  candidateSlug?: string | null
  activeCategory?: string | null
}>()
</script>
