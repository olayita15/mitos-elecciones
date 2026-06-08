<template>
  <article class="myth-card">
    <NuxtLink
      class="myth-card__link"
      :to="buildMythPath(myth.candidate, myth.category, myth.slug)"
      :aria-label="`${myth.title}. Estado ${verdictLabel}.`"
    >
      <div class="myth-card__header">
        <h2 class="myth-card__title">{{ myth.title }}</h2>
        <component :is="verdictIcon" class="myth-card__icon size-5" />
      </div>
      <div class="myth-card__footer">
        <span :class="['verdict-badge', 'myth-card__verdict', `verdict-badge--${myth.verdict}`]">
          <component :is="verdictIcon" class="size-3.5" />
          {{ verdictLabel }}
        </span>
        <ArrowUpRight class="size-4 text-base-content/35" />
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { ArrowUpRight, BadgeAlert, BadgeCheck, BadgeMinus } from '@lucide/vue'
import { computed } from 'vue'
import type { Myth } from '~~/shared/types/content'
import { buildMythPath } from '~~/shared/utils/routes'

const props = defineProps<{
  myth: Myth
  candidateName: string
  categoryName: string
}>()

const verdictLabel = computed(() => props.myth.verdict.toUpperCase())

const verdictIcon = computed(() => {
  if (props.myth.verdict === 'verdadero') {
    return BadgeCheck
  }

  if (props.myth.verdict === 'parcial') {
    return BadgeMinus
  }

  return BadgeAlert
})
</script>
