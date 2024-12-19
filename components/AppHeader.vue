<template>
   <Card class="font-extralight text-2xl overflow-clip flex gap-16 h-24 items-center">
      <span> KAMIL <span class="font-medium">KUBICZEK</span> </span>
      <img src="assets/headerCircle.svg" class="absolute left-30 top-0 pointer-events-none" />

      <nav class="ml-auto flex gap-6">
         <NuxtLink to="/projects" class="font-medium text-base relative group"
            >PROJECTS
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:block hidden"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-3 group-hover:block hidden">(P)</div>
         </NuxtLink>

         <NuxtLink to="/carrier" class="font-medium text-base relative group"
            >CARRIER
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:block hidden"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-3 group-hover:block hidden">(C)</div>
         </NuxtLink>

         <NuxtLink to="/contact" class="font-medium text-base relative group"
            >CONTACT
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:block hidden"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-2 group-hover:block hidden">(T)</div>
         </NuxtLink>
      </nav>
   </Card>
</template>
