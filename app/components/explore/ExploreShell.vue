<template>
  <div class="explore-layout">
    <div class="filters-panel">
      <CandidateTabs
        :candidates="candidates"
        :active-candidate="activeCandidate"
        :compact="Boolean(activeCandidate)"
      />
      <CategoryChips
        :categories="availableCategories"
        :candidate-slug="activeCandidate"
        :active-category="activeCategory"
      />
    </div>

    <MythGrid
      :items="items"
      :candidates="candidates"
      :categories="categories"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import CandidateTabs from '../filters/CandidateTabs.vue'
import CategoryChips from '../filters/CategoryChips.vue'
import MythGrid from '../myths/MythGrid.vue'
import type { Category, Candidate, Myth } from '~~/shared/types/content'

const props = defineProps<{
  title: string
  description: string
  candidates: Candidate[]
  categories: Category[]
  availableCategories: Category[]
  items: Myth[]
  activeCandidate?: string | null
  activeCategory?: string | null
}>()

const router = useRouter()

function handleEscape(event: KeyboardEvent) {
  if (event.key !== 'Escape') {
    return
  }

  if (props.activeCategory && props.activeCandidate) {
    router.push(`/${props.activeCandidate}`)
    return
  }

  if (props.activeCandidate) {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>
