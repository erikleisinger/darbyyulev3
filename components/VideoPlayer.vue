<template>
  <div
    class="rounded-xl aspect-[1/2] md:aspect-video overflow-hidden w-fit w-full relative m-auto"
  >
    <div
      class="absolute inset-0 z-[1] bg-black"
      v-if="!playing"
      ref="previewOverlay"
    >
      <div
        class="absolute inset-0 m-auto w-[75px] aspect-square bg-white/60 rounded-[50%] flex items-center justify-center hover:cursor-pointer hover:bg-white/80"
        @click="playing = true"
      >
        <div class="i-ic-baseline-play-arrow h-[40px] w-[40px] h" />
      </div>
      <NuxtImg
        :src="video.preview"
        fit="contain"
        :height="height"
        :width="width"
      />
    </div>
    <iframe
      v-if="playing"
      :src="video.src"
      title="YouTube video player"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>
<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import type { Video } from "@/types/CustomSection";

const props = defineProps<{
  video: Video;
}>();

const playing = ref(false);

const previewOverlay = ref(null);

const { height, width } = useElementSize(previewOverlay);
</script>
