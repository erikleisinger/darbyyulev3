<template>
  <section class="border-mustard border-4 md:border-8 rounded-md px-1 pb-1 md:p-6 ">
    <div class="flex items-center gap-2">
      <div class="i-carbon-help-filled  w-[25px] h-[25px] aspect-square w-[40px] h-[40px]" />
      <h3 >
        <span class="font-bold" role="h2">Problem:</span>
        {{ content.problem }}
      </h3>
    </div>
    <div class="flex items-center gap-2 md:mt-8">
      <div class="i-carbon-radio-button-checked  w-[25px] h-[25px] aspect-square w-[40px] h-[40px]" />
      <h3 >
        <span class="font-bold" role="h2">Outcomes:</span>
        {{ content.outcome }}
      </h3>
    </div>

  </section>
</template>
<script setup lang="ts">
import type { ProblemOutcomeContent } from '@/types/ProblemOutcome';
const props = defineProps<{
  content: ProblemOutcomeContent,
}>();
</script>
