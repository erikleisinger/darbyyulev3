<template>
  <Container>
    <header class="max-h-screen md:grid" :style="{
      

  }" >
      <div
        :style="{
          backgroundImage: `url(${item.header_bg})`,
          height: isSm ? 'unset' : 'fit-content',
          maxHeight:`calc(100vh - ${Math.round(headerTextHeight)}px)`
       
        }"
       
      >
        <img
          v-if="isSm"
          :src="item.header_img_sm"
          style="
          width: 100%;
          transform: translateY(5%);
      
          padding: 0rem 0.5rem;
            margin: auto;
            object-fit: contain;
          
          "
        
          ref="headerImg"
          :style="{maxHeight: isSm ? 'inherit' : 'unset'}"
        />
        <img
          v-else
          :src="item.header_img"
          style="
           padding: 0rem 0.5rem;
            height: 100%;
            transform: translateY(5%);
            margin: auto;
            max-height: inherit;
            object-fit: contain;
          "
         
          ref="headerImg"
       
          class="w-full max-w-[1000px]"
        />
      </div>

      <div class="px-4 md:px-16 pt-[10%] md:pt-[5%] pb-4 md:pb-8 h-fit box-border" ref="headerText">
        <h1 class="text-gold">{{ item.name }}</h1>
        <h3 >{{ item.description }}</h3>
      </div>
    </header>

    <div class="px-4 md:px-8 grid grid-cols-2 gap-x-32 gap-y-10 md:gap-y-16">
      <PortfolioSection
        :class="{
          [`col-span-2`]: isSm || !section.grid,
          [`col-span-${section.grid}`]: !isSm || !!section.grid,
          divider: index & (2 !== 0) && section.grid < 2,
        }"
        v-for="(section, index) in item.sections"
        :key="section.id"
        :section="section"
      />

      <footer class="py-12 md:pt-16 w-full flex justify-center col-span-2">
        <Button @click="navigateTo('/work', { replace: true })">Return</Button>
      </footer>
    </div>
  </Container>
</template>
<style lang="scss">
.divider {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    right: -4rem;
    top: 0;
    bottom: 0;
    height: 50%;
    margin: auto;
    width: 2px;
    background-color: red;
    @apply bg-mustard;
  }
}
</style>
<script setup>
import { PORTFOLIO_ITEMS } from "~/content/portfolio-items";
import { useElementBounding } from "@vueuse/core";
const route = useRoute();
const item = computed(() =>
  PORTFOLIO_ITEMS.find(({ id }) => id === route.params.id)
);

const { isSm } = useWindowSize();

const headerText = ref(null);

const { height: headerTextHeight } = useElementBounding(headerText);

const headerImg = ref(null);

const { height: headerImgHeight } = useElementBounding(headerImg);
</script>
