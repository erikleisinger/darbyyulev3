<template>
    <section>
        <header >
        <h1 v-if="content.name">{{ content.name }}</h1>
        <a class="text-h2 uppercase text-gold underline font-bold cursor-pointer" v-if="content.link" @click="navigateTo(content.link.href)">{{ content.link.text }}</a>
        <p v-if="content.description" >{{ content.description }}</p>
    </header>
        <NuxtImg v-for="img, index in content.imgs" :key="index" :src="img"  fit="outside" class="m-auto [&:not(:first-of-type)]:mt-4" loading="lazy"/>
      <video-player v-if="content.video" :video="content.video"/>
    </section>
</template>
<script setup lang="ts">

import type {
  CustomSectionContent,
} from "@/types/CustomSection";
const props = defineProps<{
  content: CustomSectionContent;
}>();




</script>
