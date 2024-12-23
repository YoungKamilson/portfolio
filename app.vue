<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script setup lang="ts">
import "~/assets/vanilla.css"
import { ScrollTrigger } from "gsap/src/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

const handleKeydown = (ev: KeyboardEvent) => {
   if (ev.key === "h") {
      ev.preventDefault()
      router.push("/")
   }

   if (ev.key === "p") {
      ev.preventDefault()
      router.push("/projects")
   }

   if (ev.key === "c") {
      ev.preventDefault()
      router.push("/contact")
   }
}

onMounted(() => {
   window.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
   window.removeEventListener("keydown", handleKeydown)
})
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
   transition: all 0.1s;
   transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.slide-right-enter-from {
   opacity: 0.5;
   transform: scale(0.99);
}

.slide-right-leave-to {
   opacity: 0.5;
   transform: scale(0.99);
}
</style>
