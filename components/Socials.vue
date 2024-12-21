<template>
   <Card>
      <div class="w-full h-full flex flex-row items-center justify-between px-5">
         <NuxtLink :to="socials.github" class="font-medium h-full cursor-click flex items-center">GitHub</NuxtLink>
         <NuxtLink :to="socials.linkedin" class="font-medium h-full cursor-click flex items-center">LinkedIn</NuxtLink>
         <NuxtLink :to="'mailto:' + socials.email" class="font-medium h-full cursor-click flex items-center">Email</NuxtLink>
      </div>
   </Card>
</template>

<script setup>
const { socials } = useAppConfig()
</script>
