<template>
   <div class="bg-background cursor-none w-full min-h-screen text-text px-32 py-11 font-LexendDeca overflow-x-hidden">
      <div ref="cursor" class="absolute z-50">
         <div class="dot-cursor">
            <div class="dot-cursor-center" v-if="showHoverCursor" />
         </div>
      </div>

      <AppHeader />
      <slot />
   </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
const cursor = ref<HTMLElement | null>(null)

const showHoverCursor = ref(false)

const updateDotCursor = (ev: MouseEvent) => {
   if (!cursor.value) return

   gsap.to(cursor.value, {
      top: ev.pageY,
      left: ev.pageX,
      scale: showHoverCursor.value ? 1.5 : 1,
      duration: 0.2,
      stagger: 0.4,
      ease: "power2.out"
   })
}

const checkHoverState = (ev: MouseEvent) => {
   const hoveredElements = document.querySelectorAll(":hover")
   console.log(hoveredElements)

   for (const element of hoveredElements) {
      if (element.classList.contains("cursor-click")) {
         showHoverCursor.value = true
         return
      }
   }

   showHoverCursor.value = false
}

onMounted(() => {
   if (import.meta.env.SSR) return
   window.addEventListener("mousemove", updateDotCursor)
   window.addEventListener("mousemove", checkHoverState)
})

onUnmounted(() => {
   window.removeEventListener("mousemove", updateDotCursor)
   window.removeEventListener("mousemove", checkHoverState)
})
</script>

<style scoped>
.dot-cursor {
   padding: 6px;
   border-radius: 50%;
   border: 3px solid white;
   position: absolute;
   pointer-events: none;
   z-index: 1000;
   transform: translate(-50%, -50%);
   transition: opacity 0.3s ease;
}

.dot-cursor-center {
   background-color: white;
   width: 8px;
   height: 8px;
   border-radius: 50%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}

.card-cursor {
   width: 24px;
   height: 24px;
   background-image: url("/assets/hover_cursor.svg");
   background-size: cover;
   position: absolute;
   pointer-events: none;
   z-index: 1000;
   transform: translate(-50%, -50%);
   transition: opacity 0.3s ease;
}

.hidden {
   opacity: 0;
}
</style>
