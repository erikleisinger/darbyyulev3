<template>
  <section class="-mx-8">
    <header class="px-8">
      <h1>{{ content.title || "Final" }}</h1>

      <a
        class="text-h2 uppercase text-gold underline font-bold cursor-pointer"
        v-if="content.linkHref && content.linkText"
        @click="navigateTo(content.linkHref)"
        >{{ content.linkText }}</a
      >
    </header>
    <div class="w-full bg-repeat relative px-8">
      <div
        class="absolute left-0 right-0 top-[10%] bottom-[10%]"
        :style="{ backgroundImage: `url(${content.bg})` }"
      />
      <div class="flex flex-wrap justify-center gap-4 md:gap-24">
        <div
          v-for="(img, index) in content.imgs"
          :key="index"
          class="z-10 flex flex-col justify-between"
          :class="img.fullWidth ? 'w-full' : 'max-w-[150px] md:max-w-[300px] w-[40%]'"
        >
          <NuxtImg :src="img.src" class="h-fit" v-if="!img.mobileSrc || !isSm" />
          <NuxtImg v-else :src="img.mobileSrc" class="h-fit" />
          <h3
            class="font-bold text-gold text-center max-h-[1em] text-center px-6"
          >
            {{ img.text }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  content: any;
}>();

const { isSm } = useWindowSize();
</script>
