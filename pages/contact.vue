<template>
   <main
      class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 min-h-[75vh] 2xl:min-h-[90vh] mt-8 gap-8"
   >
      <ContactLink :url="socials.linkedin" title="LinkedIn" class="xl:h-full md:col-span-2 xl:col-span-1">
         <template #bg-image>
            <img src="assets/circle.svg" aria-hidden class="absolute max-md:w-52 -top-16 lg:-top-24 lg: right-10 xl:-top-24" />
         </template>

         <template #description> Let's connect! I'm always eager to collaborate.</template>
      </ContactLink>

      <ContactLink :url="socials.github" title="GitHub" class="xl:h-full md:col-span-1 xl:col-span-1">
         <template #bg-image>
            <img src="assets/circle.svg" aria-hidden class="absolute max-md:w-52 -top-12 md:bottom-24 lg:-top-20 -right-5" />
         </template>

         <template #description> See my profile and activity. </template>
      </ContactLink>

      <ContactLink :url="'mailto:' + socials.email" title="Email" class="xl:h-full md:col-span-1 xl:col-span-1">
         <template #bg-image>
            <img src="assets/circle.svg" aria-hidden class="absolute max-md:w-52 -left-12 -top-16 lg:top-6 md:left-96" />
         </template>

         <template #description>
            Reach me via <br />
            <span class="font-bold">{{ socials.email }}</span>
         </template>
      </ContactLink>
   </main>
</template>

<script setup>
const { socials } = useAppConfig()
</script>
