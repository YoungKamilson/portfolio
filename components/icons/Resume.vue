<template>
   <svg
      width="291"
      height="726"
      viewBox="0 0 291 726"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="resume-icon"
   >
      <!-- 1 -->
      <line class="line opacity-0" x1="279" y1="726" x2="279" y2="546" stroke="white" stroke-width="2" />
      <!-- 2 -->
      <line class="line opacity-0" x1="280 " y1="545" x2="111" y2="545" stroke="white" stroke-width="2" />
      <!-- 3 -->
      <line class="line opacity-0" x1="112" y1="546" x2="112" y2=" 369" stroke="white" stroke-width="2" />
      <!-- 4 -->
      <line class="line opacity-0" x1="113" y1="370" x2="12" y2="370" stroke="white" stroke-width="2" />
      <!-- 5 -->
      <line class="line opacity-0" x1="12" y1="371" x2="12" y2="215" stroke="white" stroke-width="2" />
      <!-- 6 -->
      <line class="line opacity-0" x1="13" y1="223" x2="174 " y2="223" stroke="white" stroke-width="2" />
      <!-- 7 -->
      <line class="line opacity-0" x1="173" y1="224" x2="173" y2="-4.37114e-08" stroke="white" stroke-width="2" />

      <!-- 1 -->
      <circle class="fill-primary circle opacity-0" cx="279" cy="546" r="15" stroke="white" />

      <!-- 2 -->
      <circle cx="111" cy="546" r="15" class="fill-primary circle opacity-0" stroke="white" />

      <!-- 3 -->
      <circle cx="111" cy="371" r="15" class="fill-primary circle opacity-0" stroke="white" />

      <!-- 4 -->
      <circle cx="12" cy="369" r="15" class="fill-primary circle opacity-0" stroke="white" />

      <!-- 5 -->
      <circle cx="12" cy="224" r="15" class="fill-primary circle opacity-0" stroke="white" />

      <!-- 6 -->
      <circle cx="174" cy="222" r="15" class="fill-primary circle opacity-0" stroke="white" />

      <defs>
         <pattern id="pattern0_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
         <pattern id="pattern1_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
         <pattern id="pattern2_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
         <pattern id="pattern3_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
         <pattern id="pattern4_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
         <pattern id="pattern5_57_3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_57_3" transform="translate(-0.565594) scale(0.00247525)" />
         </pattern>
      </defs>
   </svg>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { gsap } from "gsap"

let ctx: gsap.Context = gsap.context(() => {})

onMounted(() => {
   if (import.meta.server) return

   const lines = Array.from(document.querySelectorAll(".line")) as SVGLineElement[]

   const circles = Array.from(document.querySelectorAll(".circle")) as SVGCircleElement[]

   const linesWithCircles = lines.map((line, index) => {
      return [line, circles[index]]
   })

   let tl: gsap.core.Timeline

   ctx.add(() => {
      tl = gsap.timeline({
         smoothChildTiming: true,
         scrollTrigger: ".resume-icon"
      })
   })

   for (const [line, circle] of linesWithCircles) {
      const pathLength = line.getTotalLength()
      line.style.strokeDasharray = `${pathLength}`
      line.style.strokeDashoffset = `${pathLength}`

      ctx.add(() => {
         tl.to(line, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
         })
      })

      if (circle) {
         ctx.add(() => {
            tl.to(
               circle,
               {
                  scale: 1,
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.in"
               },
               "=-0.6"
            )
         })
      }
   }
})

onUnmounted(() => {
   if (import.meta.client && ctx) ctx.kill()
})
</script>

<style scoped>
svg {
   display: block;
   margin: 0 auto;
}
</style>
