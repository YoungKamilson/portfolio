<template>
   <Card class="font-extralight text-2xl overflow-clip flex gap-16 h-24 items-center">
      <NuxtLink to="/" class="h-full flex items-center cursor-click">
         <span>KAMIL</span> &nbsp;<span class="font-medium">KUBICZEK</span>
      </NuxtLink>
      <img src="assets/headerCircle.svg" class="absolute left-30 top-0 pointer-events-none" />

      <nav class="ml-auto flex gap-6">
         <NuxtLink to="/" class="font-medium text-base relative group cursor-click"
            >HOME
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:opacity-100 opacity-0 transition-opacity"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-3 group-hover:opacity-100 opacity-0 transition-opacity">(H)</div>
         </NuxtLink>

         <NuxtLink to="/projects" class="font-medium text-base relative group cursor-click"
            >PROJECTS
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:opacity-100 opacity-0 transition-opacity"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-3 group-hover:opacity-100 opacity-0 transition-opacity">(P)</div>
         </NuxtLink>

         <NuxtLink to="/contact" class="font-medium text-base relative group cursor-click"
            >CONTACT
            <div class="absolute w-0.5 h-2 bg-text left-1/2 group-hover:opacity-100 opacity-0 transition-opacity"></div>
            <div class="absolute mt-2 left-1/2 -translate-x-2 group-hover:opacity-100 opacity-0 transition-opacity">(C)</div>
         </NuxtLink>
      </nav>
   </Card>
</template>
