<template>
   <main class="grid grid-cols-6 grid-rows-3 min-h-[90vh] mt-8 gap-8">
      <NuxtLink to="{{ socials.linkedin }}" class="col-span-2 row-span-3">
         <Card class="flex flex-col w-full h-full overflow-clip">
            <img src="assets/circle.svg" aria-hidden class="absolute top-24 -left-16" />
            <p class="mt-auto font-bold text-6xl">LinkedIn</p>
            <p class="font-light text-xl mt-3">Checkout my profile and ask me anything you want!</p>
         </Card>
      </NuxtLink>

      <NuxtLink to="mailto:{{ socials.email }}" class="col-span-2 row-span-3">
         <Card class="flex flex-col w-full h-full overflow-clip">
            <img src="assets/circle.svg" aria-hidden class="absolute -left-16 -top-16" />
            <p class="mt-auto font-bold text-6xl">Email</p>
            <p class="font-light text-xl mt-3">
               Reach me via <br />
               <span class="font-bold">{{ socials.email }}</span>
            </p>
         </Card>
      </NuxtLink>
      <NuxtLink to="{{ socials.github }}" class="col-span-2 row-span-3">
         <Card class="flex flex-col w-full h-full overflow-clip">
            <img src="assets/circle.svg" aria-hidden class="absolute bottom-24 -right-16" />
            <p class="mt-auto font-bold text-6xl">GitHub</p>
            <p class="font-light text-xl mt-3">See my profile and activity.</p>
         </Card>
      </NuxtLink>
   </main>
</template>

<script setup>
const { socials } = useAppConfig()
</script>
