<template>
   <Card class="!p-0 overflow-clip">
      <slot name="background" />

      <div
         class="flex flex-col absolute p-6 z-10 w-full h-full bg-gradient-to-t from-primary from-40% md:from-60% to-[#0b4a275d]"
      >
         <div class="flex flex-row gap-3 mt-auto">
            <NuxtLink v-if="github" :to="github" class="cursor-click rounded-full border-[#006D4B] border-2 bg-[#002714] p-3"
               ><LucideGithub class="w-6 h-6"
            /></NuxtLink>
            <NuxtLink
               v-if="projectUrl"
               :to="projectUrl"
               class="cursor-click rounded-full border-[#006D4B] border-2 bg-[#002714] p-3"
               ><LucideLink class="w-6 h-6"
            /></NuxtLink>
         </div>
         <p class="font-bold text-4xl md:text-6xl mt-6">
            {{ title }}
         </p>
         <p class="font-light 2xl:text-xl text-lg mt-6 hidden xl:block">
            {{ description }}
         </p>
         <p class="text-lg opacity-70 mt-3">Click for more details</p>
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
