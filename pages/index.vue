<template>
   <main class="grid grid-cols-12 grid-rows-12 min-h-[90vh] mt-8 gap-8">
      <Card class="col-span-5 row-span-8 flex flex-col gap-3 overflow-clip group" id="icons-container">
         <div class="mt-10 relative">
            <div class="flex pause w-max gap-4 h-24 absolute -left-16 items-center animate-marquee group-hover:run">
               <div v-for="n in 4" class="flex gap-4">
                  <img
                     src="/assets/icons/javascript.svg"
                     alt="JavaScript"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/ts.svg"
                     alt="TypeScript"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/vue.svg"
                     alt="Vue 3"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/nuxt.svg"
                     alt="Nuxt 3"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/react.svg"
                     alt="React"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/html.svg"
                     alt="Html"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/css.svg"
                     alt="CSS"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/tailwind.svg"
                     alt="Tailwind CSS"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/sass.svg"
                     alt="SASS"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
               </div>
            </div>

            <div
               class="flex pause w-max animate-marquee-reverse absolute top-28 left-[calc(100%+64px)] gap-4 h-24 items-center group-hover:run"
            >
               <div v-for="n in 4" class="flex gap-3">
                  <img
                     src="/assets/icons/git.svg"
                     alt="Git"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/github.svg"
                     alt="GitHub"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/gitlab.svg"
                     alt="GitLab"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/docker.svg"
                     alt="Docker"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/azure.svg"
                     alt="Azure"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/trpc.svg"
                     alt="Postgres"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/bun.svg"
                     alt="Postgres"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/postgres.svg"
                     alt="Postgres"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
                  <img
                     src="/assets/icons/prisma.svg"
                     alt="Prisma"
                     class="opacity-50 grayscale hover:opacity-100 hover:scale-105 hover:grayscale-0 transition ease-in-out w-24 h-24 block"
                  />
               </div>
            </div>
         </div>

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
      <a href="cv.pdf" class="col-span-4 row-span-11 cursor-clickt">
         <Card class="w-full h-full">
            <div class="relative w-full h-full">
               <p class="mt-auto font-bold text-2xl">My CV</p>
               <!-- https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/ -->
               <!-- https://www.google.com/search?q=path+animation+js&oq=path+animation+js&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB7SAQgxMzg3ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8 -->
               <!-- https://www.youtube.com/watch?v=lj37QZ047f8 -->
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute top-0 right-0" />
            </div>
         </Card>
      </a>
      <NuxtLink to="/contact" class="col-span-4 row-span-6 cursor-click">
         <Card class="!border-white w-full h-full">
            <div class="w-full h-full flex flex-col relative">
               <p class="font-light text-base">
                  Successful <br />
                  cooperation
               </p>
               <img src="assets/icons/arrow.png" alt="Arrow" class="absolute right-0 top-0" />

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
