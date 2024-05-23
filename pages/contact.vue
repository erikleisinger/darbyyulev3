<template>
    <Container v-if="!isSm">
    <section class="h-full">


    <NuxtImg src="/images/contact_bg.png" class="fixed bottom-0 right-0 max-w-[1000px] m-auto desktop_wave"  />
 <div class="flex items-center gap-4  h-fit w-fit pt-[25vh] pl-[20vw]">
    <NuxtImg src="/images/contact_splash.png" class="desktop-splash"/>
    <div class="z-[1] text-gold">
        <h1 >Contact</h1>
        <h3 class="text-h2 uppercase font-bold">darby@theyulebrothers.ca</h3>
        <h3  class="text-h2 uppercase font-bold">(778) 836-8719</h3>
        <div class="flex gap-4 mt-6 text-gold">
            <NavButton icon="i-carbon-document" text="Resume" @click="openResume"/>
            <NavButton  icon="i-carbon-logo-linkedin" text="Linkedin" @click="goToLinkedIn" />
        </div>
    </div>
    </div>

</section>
</Container>
<Container v-else class="flex flex-col justify-center gap-16">
    <div class="z-[1] text-gold px-8">
        <h1 >Contact</h1>
        <h3 style="font-weight: bold">darby@theyulebrothers.ca</h3>
        <h3  style="font-weight: bold">(778) 836-8719</h3>
        <div class="flex gap-4 mt-6">
            <NavButton icon="i-carbon-document" text="Resume" @click="openResume"/>
            <NavButton  icon="i-carbon-logo-linkedin" text="Linkedin" @click="goToLinkedIn" />
        </div>
        </div>
<NuxtImg src="/images/contact_bg_mobile.png"/>
</Container>
</template>
<style lang="scss" scoped>
@import '@/styles/_functions.scss';
    .desktop_wave {
        max-width: calcDimension(1900, false, true);
    }
    .desktop-splash {
        max-height: calcDimension(1000, false, false);
    }
</style>
<script setup>
const { isSm } = useWindowSize();

const openResume = () => {
    window.open('/resume.pdf', '_blank')
}

const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/darbyyule/', '_blank')
}
</script>