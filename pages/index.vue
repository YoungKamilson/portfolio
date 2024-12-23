<template>
   <main class="flex flex-col md:grid md:grid-cols-6 mt-8 gap-8">
      <HomeTechStack
         class="h-96 w-full flex flex-col gap-3 overflow-clip group col-span-full lg:col-span-3 xl:col-end-3 xl:h-full"
      />

      <HomePortrait class="w-full h-[500px] !p-0 before:translate-x-0 overflow-clip md:col-span-3 xl:col-start-3 xl:col-span-2" />
      <Card
         class="md:col-span-3 lg:col-span-3 lg:col-start-4 lg:row-start-1 flex flex-col xl:row-start-2 xl:col-start-3 xl:col-span-2 xl:row-span-2"
      >
         <p class="mt-auto font-bold min-[1325px]:text-6xl text-5xl">About me</p>
         <p class="font-light min-[1670px]:text-xl text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet accusantium necessitatibus magni molestias
            aut sit cum ipsam cumque? Cumque quas maxime alias illum deserunt iure autem perferendis modi possimus!
         </p>
      </Card>
      <a
         href="cv.pdf"
         target="_blank"
         class="cursor-click h-96 md:h-[500px] md:col-start-4 md:row-start-2 md:col-span-3 lg:row-span-2 lg:h-auto xl:col-start-5 xl:row-start-1"
      >
         <Card class="w-full h-full !border-white">
            <div class="relative w-full h-full">
               <p class="mt-auto font-bold text-2xl">My CV</p>
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute top-0 right-0" />
            </div>
            <IconsCarrier class="absolute top-0 right-0 w-full h-full" />
         </Card>
      </a>
      <NuxtLink to="/contact" class="cursor-click h-72 w-full md:col-span-3 md:h-full lg:h-72 lg:row-span-2 xl:h-full">
         <Card class="!border-white w-full h-full">
            <div class="w-full h-full flex flex-col relative">
               <p class="font-light text-base">
                  Successful <br />
                  cooperation
               </p>
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute right-0 top-0" />

               <p class="mt-auto font-bold min-[1325px]:text-6xl text-5xl">
                  Hire or <br />
                  contact me
               </p>
            </div>
         </Card>
      </NuxtLink>

      <Socials class="w-full md:col-span-full lg:col-span-3 lg:col-start-4 xl:row-start-3 xl:col-start-5 xl:col-span-3"></Socials>
   </main>
</template>
