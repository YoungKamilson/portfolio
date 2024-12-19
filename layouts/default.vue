<template>
   <div class="fixed w-full min-h-screen h-full bg-[url('~/assets/noise.jpg')] bg-repeat opacity-5 pointer-events-none" />
   <div class="bg-background w-full min-h-screen text-text px-32 py-11 font-LexendDeca">
      <AppHeader />
      <slot />
   </div>
</template>
