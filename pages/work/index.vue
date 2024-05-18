<template>
    <Container >
    <div class="pt-[140px] mb-8 mx-8 md:mx-[200px] ">
        <h1 class="mb-4 md:mb-6">Work</h1>
        <div class="grid md:grid-cols-[repeat(auto-fit,_45%)] gap-6 md:gap-12">
        <PortfolioCard v-for="item in PORTFOLIO_ITEMS" :key="item.id" :item="item" @click="navigateTo(`/work/${item.id}`)"/>
    </div>
    </div>
</Container>
</template>
<script setup lang="ts">
    import { PORTFOLIO_ITEMS } from '~/content/portfolio-items';
</script>