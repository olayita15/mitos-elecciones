<template>
  <article class="myth-detail">
    <header class="myth-detail__header">
      <div class="myth-detail__meta">
        <span :class="['verdict-badge', `verdict-badge--${myth.verdict}`]">
          <component :is="verdictIcon" class="size-3.5" />
          {{ myth.verdict.toUpperCase() }}
        </span>
        <span class="badge badge-ghost rounded-full border-base-300/70 px-3 py-3 text-xs font-semibold">
          <Tag class="size-3.5" />
          {{ categoryName }}
        </span>
        <span class="badge badge-ghost rounded-full border-base-300/70 px-3 py-3 text-xs font-semibold">
          <UserRound class="size-3.5" />
          {{ candidateName }}
        </span>
      </div>

      <h1>{{ myth.title }}</h1>
      <p class="myth-detail__summary">{{ myth.summary }}</p>
    </header>

    <section class="myth-detail__block" aria-labelledby="explanation-title">
      <h2 id="explanation-title">Explicación</h2>
      <p>{{ myth.explanation }}</p>
    </section>

    <section class="myth-detail__block" aria-labelledby="evidence-title">
      <h2 id="evidence-title">Evidencias</h2>
      <ul class="detail-list">
        <li v-for="evidence in myth.evidences" :key="evidence">{{ evidence }}</li>
      </ul>
    </section>

    <section class="myth-detail__block" aria-labelledby="sources-title">
      <h2 id="sources-title">Fuentes</h2>
      <ul class="detail-list">
        <li v-for="source in myth.sources" :key="source.url">
          <a :href="source.url" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2">
            <ExternalLink class="size-4" />
            {{ source.title }}
          </a>
          <span class="text-sm">{{ source.publisher }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import { BadgeAlert, BadgeCheck, BadgeMinus, ExternalLink, Tag, UserRound } from '@lucide/vue'
import { computed } from 'vue'
import type { Myth } from '~~/shared/types/content'

const props = defineProps<{
  myth: Myth
  candidateName: string
  categoryName: string
}>()

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
