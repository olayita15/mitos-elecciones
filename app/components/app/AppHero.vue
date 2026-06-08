<template>
  <section class="intro">
    <p class="intro__eyebrow">Verificaciones presidenciales</p>
    <h1 class="intro__title">{{ title }}</h1>
    <p class="intro__copy">{{ description }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
