<template>
  <section class="myth-grid-section" aria-label="Mitos">
    <div v-if="items.length" class="myth-grid">
      <MythCard
        v-for="myth in items"
        :key="myth.id"
        :myth="myth"
      />
    </div>

    <EmptyState v-else />
  </section>
</template>

<script setup lang="ts">
import EmptyState from '../app/EmptyState.vue'
import MythCard from './MythCard.vue'
import type { Category, Candidate, Myth } from '~~/shared/types/content'

const props = defineProps<{
  items: Myth[]
  candidates: Candidate[]
  categories: Category[]
}>()
</script>
