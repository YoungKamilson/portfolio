<template>
   <main class="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 mt-8 gap-8 xl:max-h-[90vh] 2xl:h-[100vh]">
      <ProjectCard
         title="School website"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium, saepe perspiciatis veritatis accusamus quia soluta similique minima et, quidem eveniet autem, in dicta itaque inventore voluptatibus dolore molestias! Explicabo?"
         project-url="https://zsz.olesnica.pl"
         class="h-96 md:col-span-1 xl:row-start-1 xl:h-full xl:row-span-6"
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
               aut sit cum ipsam cumque? "
         project-url="https://termin.ai"
         class="h-96 md:col-span-1 xl:h-full xl:row-span-4 xl:col-start-2 xl:row-start-1"
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
         class="md:col-span-1 h-96 md:row-start-2 xl:row-start-1 xl:h-full xl:w-full xl:row-span-5"
      >
         <template #background
            ><div
               class="w-full h-full object-cover absolute opacity-35 bg-[url(assets/klmat.jpeg)] bg-[-330px_-100px] md:bg-[-330px_-200px] bg-size-klmat"
            />
         </template>
      </ProjectCard>

      <NuxtLink
         to="/contact"
         class="md:col-span-1 md:row-start-2 xl:col-start-2 xl:row-span-2 xl:col-span-1 xl:row-start-5 cursor-click h-96 xl:h-full"
      >
         <Card class="!border-white w-full h-full">
            <div class="w-full h-full flex flex-col relative gap-4">
               <p class="font-light text-base">Contact me</p>
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute right-0 top-0" />

               <p class="mt-auto font-bold text-4xl 2xl:text-5xl">
                  Is Your <br />
                  project next here?
               </p>
            </div>
         </Card>
      </NuxtLink>

      <Socials class="col-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-6" />
   </main>
</template>

<style scoped>
.bg-size-klmat {
   background-size: 200%;
}
</style>
