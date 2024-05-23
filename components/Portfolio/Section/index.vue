<template>
  
  <PortfolioSectionCustom
    v-if="section.componentName === 'Custom'"
    role="section"
    :content="section.content"
    :sections="section.sections"
    class=" [&>header]:mb-8 [&>header]:md:mb-10 "
    v-bind="$attrs"
  />
  <PortfolioSectionDesignProcess
    v-if="section.componentName === 'DesignProcess'"
    role="section"
    :content="section.content"
    :grid="section.grid"
    class="  [&>header]:mb-8 [&>header]:md:mb-10 "
    v-bind="$attrs"
  />
  <PortfolioSectionProblemOutcome
    v-if="section.componentName === 'ProblemOutcome'"
    role="section"
    :content="section.content"
    class=" [&>header]:mb-8 [&>header]:md:mb-10 "
    v-bind="$attrs"
  />
  <PortfolioSectionFinal v-if="section.componentName === 'Final'"
    role="section"
    :content="section.content"
    class=" [&>header]:mb-8 [&>header]:md:mb-10 "
    v-bind="$attrs"
  />

  <!--  -->
</template>
<style lang="scss">
  header {
    h1 {
      @apply text-gold;
    }
   
  }
</style>
<script setup lang="ts">
import type { PortfolioItemSection } from "@/types/PortfolioItem";

const props = defineProps<{
  section: PortfolioItemSection;
}>();

// const component = defineAsyncComponent(() => import(`./${props.section.componentName}.vue`))
</script>
