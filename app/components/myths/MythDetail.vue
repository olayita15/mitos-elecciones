<template>
  <article class="myth-detail">
    <header class="myth-detail__header">
      <div class="myth-detail__meta">
        <span :class="['verdict-badge', `verdict-badge--${myth.verdict}`]">
          {{ myth.verdict.toUpperCase() }}
        </span>
        <span>{{ categoryName }}</span>
        <span>{{ candidateName }}</span>
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
          <a :href="source.url" target="_blank" rel="noreferrer">
            {{ source.title }}
          </a>
          <span>{{ source.publisher }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { Myth } from '~~/shared/types/content'

defineProps<{
  myth: Myth
  candidateName: string
  categoryName: string
}>()
</script>
