<template>
  <Container>
  <NuxtImg
    :src="item.img_main"
    class="h-[40vh] md:h-[400px] md:w-full object-cover m-auto"
    preload
  />
  <div class="px-4 md:px-8">
    <header>
      <h1 class="mt-6 md:mt-12">{{ item.name }}</h1>
      <p>{{ item.description }}</p>
    </header>
    <PortfolioSection
      v-for="section in item.sections"
      :key="section.id"
      :section="section"
    />
    <footer class="py-12 md:pt-16 w-full flex justify-center">
      <Button @click="navigateTo('/work', { replace: true })">Return</Button>
    </footer>
  </div>
</Container>
</template>
<script setup>
import { PORTFOLIO_ITEMS } from "~/content/portfolio-items";
const route = useRoute();
const item = computed(() =>
  PORTFOLIO_ITEMS.find(({ id }) => id === route.params.id)
);
</script>
