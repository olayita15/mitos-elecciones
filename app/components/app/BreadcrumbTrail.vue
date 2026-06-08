<template>
  <nav aria-label="Ruta actual" class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <li v-for="item in items" :key="item.to">
        <NuxtLink class="breadcrumbs__link" :to="item.to">
          <House v-if="item.to === '/'" class="size-3.5" />
          {{ item.label }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { House } from '@lucide/vue'

defineProps<{
  items: Array<{
    label: string
    to: string
  }>
}>()
</script>
