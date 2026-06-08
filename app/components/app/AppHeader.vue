<template>
  <header class="topbar">
    <div class="container topbar__inner">
      <NuxtLink class="topbar__brand" to="/">
        {{ siteConfig.shortName }}
      </NuxtLink>
      <p class="topbar__hint">Verifica en segundos</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { siteConfig } from '~~/shared/config/site'
</script>
