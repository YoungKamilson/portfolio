<template>
   <Card class="!p-0 overflow-clip">
      <slot name="background" />

      <div class="flex flex-col absolute p-6 z-10 h-full bg-gradient-to-t from-primary from-60% to-[#0b4a275d]">
         <div class="flex flex-row gap-3 mt-auto">
            <NuxtLink v-if="github" :to="github" class="rounded-full border-[#006D4B] border-2 bg-[#002714] p-3"
               ><LucideGithub class="w-6 h-6"
            /></NuxtLink>
            <NuxtLink v-if="projectUrl" :to="projectUrl" class="rounded-full border-[#006D4B] border-2 bg-[#002714] p-3"
               ><LucideLink class="w-6 h-6"
            /></NuxtLink>
         </div>
         <p class="font-bold text-6xl mt-6">
            {{ title }}
         </p>
         <p class="font-light text-xl mt-6">
            {{ description }}
         </p>
      </div>
   </Card>
</template>

<script setup lang="ts">
defineProps<{
   title: string
   description: string
   github?: string
   projectUrl?: string
}>()
</script>
