<template>
  <Container v-if="!isSm" class="flex flex-col justify-center gap-24 px-[10vw] pb-[5vh] pt-[15vh]">
    <div class="flex items-end  ">
      <section
        class="max-w-[50vw] h-fit inset-0"
        :style="{ left: '33vw', right: '20vw' }"
      >
        <h1 class="mb-[1vw]">
          Hi! <span class="text-mustard">mynameis Darby</span> & I provide:
        </h1>
        <h3 >
          I specialize in creating high-quality, authentic design for SEO
          companies, startups, NGOs, and SaaS companies. Offering project based
          solutions, making it easy for organizations to access flexible,
          high-quality design services on a project basis.
        </h3>
      </section>
    </div>
 
    <div class="flex items-start justify-end  ">
      <section
        class="max-w-[50vw] h-fit inset-0"
        :style="{ left: '33vw', right: '20vw' }"
      >
        <h1 class="mb-[1vw]">What sets me apart?</h1>
        <div class="grid grid-rows-2 grid-cols-2 gap-y-[2vw]">
          <div class="flex gap-4 items-center">
            <div>
            <i class="i-carbon-user-favorite text-[3rem]" />
          </div>
            <h2 class="font-semibold">Authentic & Genuine Design</h2>
          </div>
          <div class="flex gap-4 items-center">
            <div>
            <i class="i-carbon-friendship text-[3rem]" />
          </div>
            <h2 class="font-semibold">Genuine connection with customers</h2>
          </div>
          <div class="flex gap-4 items-center">
            <div>
            <i class="i-carbon-collaborate text-[3rem]" />
          </div>
            <h2 class="font-semibold">Collaborating with consumers</h2>
          </div>
          <div class="flex gap-4 items-center">
            <div>
            <i class="i-carbon-chart-relationship text-[3rem]" />
          </div>
            <h2 class="font-semibold">Data centered decision making</h2>
          </div>
        </div>
      </section>
    
    </div>
  

  <footer class="self-end">
        <Button @click="navigateTo('/contact')">Let's connect</Button>
      </footer>

    <img
      src="/images/about_desktop.png"
      class="fixed bottom-0 left-0 about__bg-image--bottom z-0"
    />
    <img
      src="/images/about_desktop_2.png"
      class="fixed top-0 right-0 max-h-[50vh] z-0 about__bg-image--top"
    />
  </Container>
  <Container v-else>
    <header>
    <img
      src="/images/about_mobile.png"
      class="max-w-[min(90vw,_300px)] m-auto mt-4 mb-8"
      alt="Portrait of UI/UX Designer Darby Yule"
    />
  </header>
  <div class="flex flex-col justify-end grow mb-[5vh] px-4 gap-12">
    <section >
    <h1>Hi! <span class="text-mustard">mynameis Darby.</span></h1>
      <p class="text-black">
        I specialize in creating high-quality, authentic design for SEO
        companies, startups, NGOs, and SaaS companies. Offering project based
        solutions, making it easy for organizations to access flexible,
        high-quality design services on a project basis.
      </p>
  </section>
  <section >
    <h1 class="mb-4">What sets me apart?</h1>
    <div class="grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-2 ">
          <div class="flex gap-2 items-center">
            <div class="i-carbon-user-favorite text-[2rem]" />
            <h2 class="font-semibold uppercase">Authentic & Genuine Design</h2>
          </div>
          <div class="flex gap-2 items-center">
            <div class="i-carbon-friendship text-[2rem]" />
            <h2 class="font-semibold uppercase">Genuine connection with customers</h2>
          </div>
          <div class="flex gap-2 items-center">
            <div class="i-carbon-collaborate text-[2rem]" />
            <h2 class="font-semibold uppercase">Collaborating with consumers</h2>
          </div>
          <div class="flex gap-2 items-center">
            <div class="i-carbon-chart-relationship text-[2rem]" />
            <h2 class="font-semibold uppercase">Data centered decision making</h2>
          </div>
        </div>
  </section>
  <footer class="w-full flex justify-center ">
    <Button @click="navigateTo('/contact')">Let's connect</Button>
  </footer>
  </div>
 
   
    

  </Container>
</template>
<style lang="scss" scoped>
@import "@/styles/_functions.scss";
.about__bg-image--top {
  min-width: 250px;
  max-width: calcDimension(536, false, true);
  max-width: 350px;
}
.about__bg-image--bottom {
  min-width: 250px;
  width: calcDimension(638, false, true);
  max-width: 350px;
}
</style>
<script setup>
const { isSm } = useWindowSize();
</script>
