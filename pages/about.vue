<template>
  <Container v-if="!isSm">
  <div class=" h-[inherit] " >
    <header class="fixed m-auto w-fit h-fit inset-0" :style="{left: '33vw', right: '20vw'}">
      <h1
       
      >
        Hi! <span class="text-mustard">mynameis Darby</span> & I provide:
      </h1>
      <h2 class=" md:mt-3 ">
        User Interface Design | Content Design & Strategy | User Experience
        Design | Data Centred Branding | Graphics | Creativity |
      </h2>
    </header>
  </div>

  <img
    src="/images/about_desktop.png"
   
    class="fixed bottom-0 left-0 max-h-[60vh] max-w-[33vw] z-0"

  />
  <img
    src="/images/about_desktop_2.png"

    class="fixed top-0 right-0 max-h-[50vh] max-w-[33vw] z-0"

  />
</Container>
<Container v-else class="flex flex-col justify-between">
  <header class="flex flex-col justify-end grow mb-[5vh] px-4">
      <h1
       
      >
        Hi! <span class="text-mustard">mynameis Darby</span> & I provide:
      </h1>
      <h2 class=" md:mt-3 ">
        User Interface Design | Content Design & Strategy | User Experience
        Design | Data Centred Branding | Graphics | Creativity |
      </h2>
    </header>
  <div class="flex justify-end">
  <img
    src="/images/about_mobile.png"
 
    class=" max-h-[50vh]  z-0 min-h-[50vh]"

  />
</div>
</Container>
</template>
<script setup>
const { isSm } = useWindowSize();
</script>
