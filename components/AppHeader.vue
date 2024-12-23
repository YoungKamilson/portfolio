<template>
   <Card class="font-extralight text-2xl overflow-clip flex gap-16 h-24 items-center">
      <NuxtLink to="/" class="h-full items-center cursor-click md:flex hidden">
         <span>KAMIL</span> &nbsp;<span class="font-medium">KUBICZEK</span>
      </NuxtLink>
      <img src="assets/headerCircle.svg" class="absolute left-30 top-0 pointer-events-none md:block hidden" />

      <NuxtLink to="/" class="h-full flex items-start justify-center cursor-click flex-col md:hidden">
         <span class="font-extralight text-base">KAMIL</span>
         <span class="font-medium">KUBICZEK</span>
      </NuxtLink>

      <IconsHamburger @click="toggleMobileMenu" class="ml-auto md:hidden w-8 h-8" />

      <!-- mobile -->
      <nav
         id="mobile-menu"
         v-if="isMobileMenuOpen"
         class="fixed top-0 gap-6 md:hidden flex w-full h-full bg-background z-50 left-0 items-center justify-center flex-col"
      >
         <NuxtLink to="/" class="font-medium text-2xl relative group cursor-click" active-class="opacity-30">HOME </NuxtLink>

         <NuxtLink to="/projects" class="font-medium text-2xl relative group cursor-click" active-class="opacity-30"
            >PROJECTS
         </NuxtLink>

         <NuxtLink to="/contact" class="font-medium text-2xl relative group cursor-click" active-class="opacity-30"
            >CONTACT
         </NuxtLink>
         <IconsChevronDown @click="toggleMobileMenu" class="w-10 h-10" />
      </nav>

      <!-- tablet/latop/desktop -->
      <nav class="ml-auto gap-6 md:flex hidden">
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

<script setup>
import { gsap } from "gsap"

const isMobileMenuOpen = ref(false)

async function toggleMobileMenu() {
   if (!isMobileMenuOpen.value) {
      isMobileMenuOpen.value = true
      await nextTick()
      gsap.fromTo("#mobile-menu", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.4, ease: "elastic.inOut" })
   } else {
      gsap.to("#mobile-menu", {
         y: 1000,
         duration: 0.2,
         ease: "circ.in",
         onComplete: () => (isMobileMenuOpen.value = false)
      })
   }
}

const router = useRouter()

router.afterEach(() => {
   if (isMobileMenuOpen.value) {
      toggleMobileMenu()
   }
})
</script>
