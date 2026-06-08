<template>
  <section class="candidate-tabs">
    <nav class="candidate-tabs__grid" aria-label="Filtrar por candidato">
      <NuxtLink
        v-for="candidate in candidates"
        :key="candidate.slug"
        :to="candidate.slug === activeCandidate ? '/' : buildCandidatePath(candidate.slug)"
        class="candidate-tabs__item"
        :class="{ 'is-active': candidate.slug === activeCandidate }"
        :aria-current="candidate.slug === activeCandidate ? 'page' : undefined"
      >
        <img
          class="candidate-tabs__image"
          :src="candidateImages[candidate.slug]"
          alt=""
        >
        <div class="candidate-tabs__meta">
          <span class="candidate-tabs__label">{{ candidate.name }}</span>
          <span
            :class="[
              'badge badge-sm border-0 font-black uppercase tracking-[0.16em]',
              candidate.slug === activeCandidate ? 'badge-neutral text-white' : 'badge-ghost'
            ]"
          >
            {{ candidate.slug === activeCandidate ? 'Activo' : 'Filtrar' }}
          </span>
        </div>
      </NuxtLink>
    </nav>
  </section>
</template>

<script setup lang="ts">
import abelardoImage from '../../assets/images/abelardo.jpg'
import cepedaImage from '../../assets/images/cepeda.avif'
import type { Candidate } from '~~/shared/types/content'
import { buildCandidatePath } from '~~/shared/utils/routes'

defineProps<{
  candidates: Candidate[]
  activeCandidate?: string | null
  compact?: boolean
}>()

const candidateImages: Record<string, string> = {
  cepeda: cepedaImage,
  abelardo: abelardoImage
}
</script>
