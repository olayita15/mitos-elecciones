<template>
  <section class="empty-state" aria-live="polite">
    <div class="flex items-center gap-3 text-base-content/55">
      <SearchX class="size-5" />
      <span class="text-xs font-black uppercase tracking-[0.18em]">Sin resultados</span>
    </div>
    <h2 class="text-3xl font-black tracking-tight text-balance sm:text-4xl">
      No hay verificaciones para este filtro
    </h2>
    <p class="max-w-xl text-base-content/70">
      Prueba otro candidato o quita la categoría para volver a ver más mitos.
    </p>
  </section>
</template>

<script setup lang="ts">
import { SearchX } from '@lucide/vue'
</script>
