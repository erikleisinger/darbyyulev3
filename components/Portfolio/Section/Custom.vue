<template>
    <section v-if="!sections && !!content">
        <header >
        <h1 v-if="content.name">{{ content.name }}</h1>
        <a class="text-h2 uppercase text-gold underline font-bold cursor-pointer" v-if="content.link" @click="navigateTo(content.link.href)">{{ content.link.text }}</a>
        <p v-if="content.description" >{{ content.description }}</p>
    </header>
        <NuxtImg v-for="img, index in content.imgs" :key="index" :src="img"   class="[&:not(:first-of-type)]:mt-4 w-full" loading="lazy" />
      <video-player v-if="content.video" :video="content.video"/>
    </section>
    <div v-else class="flex flex-col gap-10 md:gap-24">
    <section v-for="section in sections" :key="section.id">
      <PortfolioSection :section="section"/>
    </section>
  </div>
</template>
<script setup lang="ts">

import type {
  CustomSectionContent,
} from "@/types/CustomSection";
import type { PortfolioItemSection } from "~/types/PortfolioItem";
const props = defineProps<{
  content?: CustomSectionContent;
  sections?: PortfolioItemSection[]
}>();




</script>
