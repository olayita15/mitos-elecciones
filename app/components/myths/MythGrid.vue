<template>
  <section class="myth-grid-section" aria-label="Mitos">
    <div v-if="items.length" class="myth-grid">
      <MythCard
        v-for="myth in items"
        :key="myth.id"
        :myth="myth"
        :candidate-name="candidateMap[myth.candidate]"
        :category-name="categoryMap[myth.category]"
      />
    </div>

    <EmptyState v-else />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EmptyState from '../app/EmptyState.vue'
import MythCard from './MythCard.vue'
import type { Category, Candidate, Myth } from '~~/shared/types/content'

const props = defineProps<{
  items: Myth[]
  candidates: Candidate[]
  categories: Category[]
}>()

const candidateMap = computed<Record<string, string>>(() =>
  Object.fromEntries(props.candidates.map(candidate => [candidate.slug, candidate.name]))
)

const categoryMap = computed<Record<string, string>>(() =>
  Object.fromEntries(props.categories.map(category => [category.slug, category.name]))
)
</script>
