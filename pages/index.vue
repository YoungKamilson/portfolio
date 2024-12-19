<template>
   <main class="grid grid-cols-12 grid-rows-12 min-h-[90vh] mt-8 gap-8">
      <Card class="col-span-5 row-span-8 flex">
         <p class="mt-auto font-bold text-6xl">
            Fullstack <br />
            developer
         </p>
      </Card>
      <Card class="col-span-3 row-span-8">
         <div class="w-full h-full flex items-center justify-center">
            <p class="font-bold text-3xl">PORTRAIT</p>
         </div>
      </Card>
      <Card class="col-span-4 row-span-11">
         <div class="relative w-full h-full">
            <p class="mt-auto font-bold text-2xl">My carrier</p>
            <!-- https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/ -->
            <!-- https://www.google.com/search?q=path+animation+js&oq=path+animation+js&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB7SAQgxMzg3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8 -->
            <!-- https://www.youtube.com/watch?v=lj37QZ047f8 -->
            <img src="assets/arrow.png" alt="Arrow" class="absolute top-0 right-0" />
         </div>
      </Card>
      <NuxtLink to="/contact" class="col-span-4 row-span-6">
         <Card class="!border-white w-full h-full">
            <div class="w-full h-full flex flex-col relative">
               <p class="font-light text-base">
                  Successful <br />
                  cooperation
               </p>
               <img src="assets/arrow.png" alt="Arrow" class="absolute right-0 top-0" />

               <p class="mt-auto font-bold text-6xl">
                  Hire or <br />
                  contact me
               </p>
            </div>
         </Card>
      </NuxtLink>
      <Card class="col-span-4 row-span-6 flex flex-col">
         <p class="mt-auto font-bold text-5xl">About me</p>
         <p class="font-light text-xl mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet accusantium necessitatibus magni molestias
            aut sit cum ipsam cumque? Cumque quas maxime alias illum deserunt iure autem perferendis modi possimus!
         </p>
      </Card>
      <Socials class="col-span-4 row-span-3"></Socials>
   </main>
</template>

<script setup>
const { socials } = useAppConfig()
</script>
