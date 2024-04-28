<template>
  <section class="px-1 pb-1 ">
    <h1 class="mb-4 md:mb-12">Design process</h1>
    <div class="grid grid-cols-2 gap-6 md:gap-y-20">
      <section v-for="section in content" :key="section.name">
        <header class="flex gap-2 md:mb-4">
          <div class="w-[20px] h-[20px]" :class="icon(section.name)" />
          <h2 class="font-medium normal-case leading-[2] md:leading-[1.1]">
            {{ section.name }}
          </h2>
        </header>
        <p
          v-if="section.isHtml"
          v-html="section.content"
          :class="{ 'text-p2': isSm }"
        />
        <p v-else :class="{ 'text-p2': isSm }">
          {{ section.content }}
        </p>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import type {
  DesignProcessContent,
  DesignProcessContentItemName,
} from "@/types/DesignProcess";
const props = defineProps<{
  content: DesignProcessContent;
}>();

const icon = (name: DesignProcessContentItemName) => {
  return (
    {
      "Content Design": "i-ic-baseline-art-track",
      "Content Strategy": "i-ic-baseline-phone-android",
      "Customer Input": "i-ic-baseline-person",
      "Design System": "i-ic-baseline-pie-chart",
      "Graphic Design": "i-ic-baseline-color-lens",
      "HiFi Wireframe": "i-ic-baseline-grid-on",
      Branding: "i-ic-baseline-fiber-manual-record",
      Ideation: "i-ic-outline-lightbulb",
      Research: "i-ic-baseline-featured-play-list",
      "UX Writing": "i-ic-baseline-art-track",
    }[name] || "i-carbon-idea"
  );
};

const { isSm } = useWindowSize();
</script>
