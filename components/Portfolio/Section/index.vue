<template>
    <PortfolioSectionCustom v-if="section.componentName === 'Custom'" role="section" :content="section.content" class="mt-8 md:mt-12 [&>header]:mb-8 [&>header]:md:mb-12"/>
        <PortfolioSectionDesignProcess v-if="section.componentName === 'DesignProcess'" role="section" :content="section.content" class="mt-8 md:mt-12 [&>header]:mb-8 [&>header]:md:mb-12"/>
            <PortfolioSectionProblemOutcome v-if="section.componentName === 'ProblemOutcome'" role="section" :content="section.content" class="mt-8 md:mt-12 [&>header]:mb-8 [&>header]:md:mb-12"/>

</template>
<script setup lang="ts">
import type { PortfolioItemSection } from '@/types/PortfolioItem';

const props = defineProps<{
    section: PortfolioItemSection
}>()

// const component = defineAsyncComponent(() => import(`./${props.section.componentName}.vue`))
</script>