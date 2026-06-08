<template>
  <nav aria-label="Ruta actual" class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <li v-for="item in items" :key="item.to">
        <NuxtLink class="breadcrumbs__link" :to="item.to">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    label: string
    to: string
  }>
}>()
</script>
