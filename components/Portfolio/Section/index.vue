<template>
    <component :is="component" role="section" :content="section.content" class="mt-8 md:mt-12 [&>header]:mb-8 [&>header]:md:mb-12"/>

</template>
<script setup lang="ts">
import type { PortfolioItemSection } from '@/types/PortfolioItem';

const props = defineProps<{
    section: PortfolioItemSection
}>()

const component = defineAsyncComponent(() => import(`./${props.section.componentName}.vue`))
</script>