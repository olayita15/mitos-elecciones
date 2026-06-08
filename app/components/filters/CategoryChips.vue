<template>
  <section v-if="candidateSlug" class="category-chips" aria-label="Filtrar por categoría">
    <div class="category-chips__list">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="category.slug === activeCategory ? buildCandidatePath(candidateSlug) : buildCategoryPath(candidateSlug, category.slug)"
        class="badge h-11 rounded-full border border-base-300/70 bg-white/80 px-4 text-sm font-semibold text-base-content/68 shadow-sm transition hover:border-primary/20 hover:bg-white"
        :class="category.slug === activeCategory ? 'badge-primary text-primary-content border-transparent' : ''"
        :aria-current="category.slug === activeCategory ? 'page' : undefined"
      >
        <span class="mr-1 opacity-60">#</span>
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
