<template>
   <NuxtLink :to="url" class="h-96 cursor-click">
      <Card class="flex flex-col w-full h-full overflow-clip">
         <slot name="bg-image" />
         <p class="mt-auto font-bold text-6xl">{{ title }}</p>
         <p class="font-light text-xl mt-3"><slot name="description" /></p>
      </Card>
   </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
   url: string
   title: string
}>()
</script>
