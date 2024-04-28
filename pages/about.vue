<template>
  <Container>
  <div class="grid grid-rows-[60%,_40%]  md:h-auto md:block h-full">
    <header class=" h-full md:h-auto m-auto md:mt-[35vh] md:m-0 px-4 flex flex-col justify-center md:justify-start  md:h-[33%]  text-white  md:max-w-[800px]  ">
      <h1
       
      >
        Hi! mynameis Darby & I provide:
      </h1>
      <h3 class="font-normal md:mt-3">
        User Interface Design | Content Design & Strategy | User Experience
        Design | Data Centred Branding | Graphics | Creativity |
      </h3>
    </header>
  </div>
  <NuxtImg
    src="/images/about_mobile.png"
    preload
    class="fixed bottom-0 right-0 max-h-[45%] z-0"
    v-if="isSm"
  />
  <NuxtImg
    src="/images/about_desktop.png"
    preload
    class="fixed bottom-0 right-0 max-h-[50%] z-0"
    v-else
  />
</Container>
</template>
<script setup>
const { isSm } = useWindowSize();
</script>
