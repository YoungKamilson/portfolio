<template>
   <NuxtImg
      :src
      :alt
      class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out block w-16 h-16 md:w-24 md:h-24"
   />
</template>

<script setup lang="ts">
const { alt, src } = defineProps<{
   src: string
   alt: string
}>()
</script>
