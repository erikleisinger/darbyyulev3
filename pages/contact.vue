<template>
    <Container class="md:h-screen">
    <section class="grid grid-rows-2 h-full min-h-full text-white px-4">

    <NuxtImg src="/images/wave_mobile.png" class="fixed top-0 left-0 right-0 max-w-[1000px] m-auto " v-if="isSm" preload/>
    <NuxtImg src="/images/wave_desktop.png" class="fixed top-0 left-0 right-0 max-w-[1000px] m-auto" v-else preload/>
    <div/>
    <div class="z-[1]">
        <h1 class="mb-1">Contact</h1>
        <h3>darby@theyulebrothers.ca</h3>
        <h3 class="mt-2">(778) 836-8719</h3>
        <div class="flex gap-2 mt-6">
            <NavButton dark icon="i-carbon-document" text="Resume" @click="openResume"/>
            <NavButton dark icon="i-carbon-logo-linkedin" text="Linkedin" @click="goToLinkedIn" />
        </div>
    </div>

</section>
</Container>
</template>
<script setup>
const { isSm } = useWindowSize();

const openResume = () => {
    window.open('/resume.pdf', '_blank')
}

const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/darbyyule/', '_blank')
}
</script>