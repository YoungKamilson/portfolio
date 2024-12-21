<template>
   <main class="grid grid-cols-12 grid-rows-12 min-h-[90vh] mt-8 gap-8">
      <ProjectCard
         title="School website"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium, saepe perspiciatis veritatis accusamus quia soluta similique minima et, quidem eveniet autem, in dicta itaque inventore voluptatibus dolore molestias! Explicabo?"
         project-url="https://zsz.olesnica.pl"
         class="col-span-4 row-span-12"
      >
         <template #background>
            <img
               src="assets/school.jpeg"
               alt="School website screenshot"
               class="w-full h-full object-cover absolute opacity-35"
            /> </template
      ></ProjectCard>

      <ProjectCard
         title="Termin AI"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet accusantium necessitatibus magni molestias
               aut sit cum ipsam cumque? Cumque quas maxime alias illum deserunt iure autem perferendis modi possimus!"
         project-url="https://termin.ai"
         class="col-span-4 row-span-7"
      >
         <template #background>
            <img
               src="assets/terminai.png"
               alt="School website screenshot"
               class="w-full h-full object-cover absolute opacity-35"
            />
         </template>
      </ProjectCard>

      <ProjectCard
         title="KL MAT shop"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet accusantium necessitatibus magni molestias"
         project-url="https://klmat.pl"
         class="col-span-4 row-span-10"
      >
         <template #background
            ><div
               class="w-full h-full object-cover absolute opacity-35 bg-[url(assets/klmat.jpeg)] bg-[-330px_-200px] bg-size-klmat"
            />
         </template>
      </ProjectCard>

      <NuxtLink to="/contact" class="col-span-4 row-span-5 cursor-click">
         <Card class="!border-white w-full h-full">
            <div class="w-full h-full flex flex-col relative">
               <p class="font-light text-base">Contact me</p>
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute right-0 top-0" />

               <p class="mt-auto font-bold text-6xl">
                  Is Your <br />
                  project next here?
               </p>
            </div>
         </Card>
      </NuxtLink>

      <Socials class="col-span-4 row-span-2" />
   </main>
</template>

<style scoped>
.bg-size-klmat {
   background-size: 200%;
}
</style>
