<template>
   <Card>
      <div class="min-[1325px]:mt-10 relative">
         <div class="flex pause w-max gap-2 h-24 absolute -left-16 items-center animate-marquee group-hover:run">
            <div v-for="n in 4" class="flex gap-2">
               <IconsTechnology src="/icons/javascript.svg" alt="JavaScript" />
               <IconsTechnology src="/icons/ts.svg" alt="TypeScript" />
               <IconsTechnology src="/icons/vue.svg" alt="TypeScript" />
               <IconsTechnology src="/icons/nuxt.svg" alt="Nuxt" />
               <IconsTechnology src="/icons/react.svg" alt="React" />
               <IconsTechnology src="/icons/html.svg" alt="Html" />
               <IconsTechnology src="/icons/css.svg" alt="CSS" />
               <IconsTechnology src="/icons/tailwind.svg" alt="Tailwind CSS" />
               <IconsTechnology src="/icons/sass.svg" alt="SASS" />
            </div>
         </div>

         <div
            class="flex pause w-max animate-marquee-reverse absolute top-24 md:top-28 left-[calc(100%+64px)] gap-4 h-24 items-center group-hover:run"
         >
            <div v-for="n in 4" class="flex gap-3">
               <IconsTechnology src="/icons/git.svg" alt="Git" />
               <IconsTechnology src="/icons/github.svg" alt="GitHub" />
               <IconsTechnology src="/icons/gitlab.svg" alt="GitLab" />
               <IconsTechnology src="/icons/docker.svg" alt="Docker" />
               <IconsTechnology src="/icons/azure.svg" alt="Azure" />
               <IconsTechnology src="/icons/trpc.svg" alt="TRPC" />
               <IconsTechnology src="/icons/bun.svg" alt="Bun" />
               <IconsTechnology src="/icons/postgres.svg" alt="Postgres" />
               <IconsTechnology src="/icons/prisma.svg" alt="Prisma" />
            </div>
         </div>
      </div>

      <p class="mt-auto font-bold min-[1325px]:text-6xl text-5xl">
         Fullstack <br />
         developer
      </p>
   </Card>
</template>
