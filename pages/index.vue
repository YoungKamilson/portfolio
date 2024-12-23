<template>
   <main class="flex flex-col md:grid md:grid-cols-6 mt-8 gap-8">
      <HomeTechStack
         class="h-96 w-full flex flex-col gap-3 overflow-clip group col-span-full lg:col-span-3 xl:col-end-3 xl:h-full"
      />

      <HomePortrait class="w-full h-[500px] !p-0 before:translate-x-0 overflow-clip md:col-span-3 xl:col-start-3 xl:col-span-2" />

      <HomeResume
         class="cursor-click h-96 md:h-[500px] md:col-start-4 md:row-start-2 md:col-span-3 lg:row-span-2 lg:h-auto xl:col-start-5 xl:row-start-1"
      />

      <HomeAbout
         class="md:col-span-3 lg:col-span-3 lg:col-start-4 lg:row-start-1 flex flex-col xl:row-start-2 xl:col-start-3 xl:col-span-2 xl:row-span-2"
      />

      <HomeContact class="cursor-click h-72 w-full md:col-span-3 md:h-full lg:h-72 lg:row-span-2 xl:h-full" />

      <Socials class="w-full md:col-span-full lg:col-span-3 lg:col-start-4 xl:row-start-3 xl:col-start-5 xl:col-span-3"></Socials>
   </main>
</template>
