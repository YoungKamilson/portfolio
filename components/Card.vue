<template>
   <div
      ref="cardReference"
      class="bg-primary card border-[2px] border-stroke rounded-3xl p-6 relative before:w-full before:h-full before:absolute before:bg-[url('~/assets/noise.jpg')] before:bg-repeat before:opacity-5 before:pointer-events-none before:top-0 before:-translate-x-6 before:rounded-3xl"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
   >
      <slot />
   </div>
</template>

<script setup lang="ts">
const cardReference = ref<HTMLElement | null>(null)

const isHovered = ref(false)

const updateMousePosition = (ev: MouseEvent) => {
   if (!cardReference.value || !isHovered.value) return
   const { clientX, clientY } = ev
   const rect = cardReference.value.getBoundingClientRect()
   cardReference.value.style.setProperty("--x", `${clientX - rect.left}px`)
   cardReference.value.style.setProperty("--y", `${clientY - rect.top}px`)
}

const handleMouseEnter = () => {
   isHovered.value = true
   cardReference.value?.classList.add("radial-gradient")
   window.addEventListener("mousemove", updateMousePosition)
}

const handleMouseLeave = () => {
   isHovered.value = false
   window.removeEventListener("mousemove", updateMousePosition)
   if (cardReference.value) {
      cardReference.value?.classList.remove("radial-gradient")
      cardReference.value.style.removeProperty("--x")
      cardReference.value.style.removeProperty("--y")
   }
}
</script>

<style scoped>
.radial-gradient {
   transition: background-image 0.5s ease, background-size 0.5s ease;
   background-image: radial-gradient(circle farthest-side at var(--x, 30px) var(--y, 30px), #0e522d 0%, transparent 50%);
}
</style>
