<template>
    <main class="fixed inset-0  flex justify-center items-center">

      <div class="w-[70vw] max-h-[75vh] md:w-auto md:h-[50vh] aspect-[1.2/2] md:aspect-[1.2/1]    relative ">
        <NuxtImg
          src="/images/hero_desktop.png"
          preload
          class="hidden md:block"
      
          alt="Darby yule"
        />
         <NuxtImg
          src="/images/hero_mobile.png"
          fill
          class=" md:hidden"
          preload
          alt="Darby yule"
        />
        <div class="absolute left-0 right-0 bottom-[-1rem] justify-center  md:gap-28 [&>h3]:cursor-pointer hidden md:flex ">
          <h3 class="hover:text-mustard " @click="navigateTo('/about')">About</h3>
          <h3 class="hover:text-mustard" @click="navigateTo('/work')">Work</h3>
          <h3 class="hover:text-mustard" @click="navigateTo('/contact')">Contact</h3>
        </div>
      </div>
  
    </main>
</template>