<template>
  <section class="border-mustard border-4 md:border-8 rounded-md p-4 md:p-6 ">


      <h3 class="flex items-center gap-2 font-bold">
        <div class="i-carbon-help-filled   mt-[0.1em]  text-[4.2em] md:text-[1.1em] mr-2 " />
        <span class="leading-[1.2]">
        <span class=" text-mustard" role="h2">Problem:</span>
       {{ content.problem }}
      </span>
      </h3>


 
      <h3 class="flex items-center gap-2 mt-5 font-bold">
        <div class="i-carbon-radio-button-checked   mt-[0.1em] text-[3em] md:text-[1.1em] mr-2" />
        <span class="leading-[1.2]">
        <span class=" text-mustard " role="h2">Outcomes:</span>
        {{ content.outcome }}</span>
      </h3>
   

  </section>
</template>
<script setup lang="ts">
import type { ProblemOutcomeContent } from '@/types/ProblemOutcome';
const props = defineProps<{
  content: ProblemOutcomeContent,
}>();
</script>
