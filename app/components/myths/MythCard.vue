<template>
  <article class="myth-card">
    <NuxtLink
      class="myth-card__link"
      :to="buildMythPath(myth.candidate, myth.category, myth.slug)"
      :aria-label="`${myth.title}. Estado ${verdictLabel}.`"
    >
      <h2 class="myth-card__title">{{ myth.title }}</h2>
      <span :class="['verdict-badge', 'myth-card__verdict', `verdict-badge--${myth.verdict}`]">
        {{ verdictLabel }}
      </span>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Myth } from '~~/shared/types/content'
import { buildMythPath } from '~~/shared/utils/routes'

const props = defineProps<{
  myth: Myth
  candidateName: string
  categoryName: string
}>()

const verdictLabel = computed(() => props.myth.verdict.toUpperCase())
</script>
