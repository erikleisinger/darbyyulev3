<template>


  <!-- D LOGO -->

    <Logo
      :color="logoColor"
      v-if="showLogo"
      class="absolute md:right-0 md:left-auto m-4 md:m-10 z-10 h-[48px] max-w-[15vw]"
      :class="logoOrientation"
      :style="{top: `-${y}px`}"
    ></Logo>



    <!-- DESKTOP menu -->
    <div
      class="absolute top-0 hidden md:block md:left-0 text-[48px] cursor-pointer z-10"
      v-if="showSidebar"
    >
      <Sidebar  />
    </div>

    <!-- page content -->
    <main
      :style="{minHeight: isSm ? `calc(100vh - ${navHeight}px)` : '100vh'}" ref="main"


    >

      <slot />
   
    </main>

    <!-- MOBILE nav -->
    <Nav class="md:hidden fixed  z-50 bottom-0"  v-if="showNav" ref="nav" />
</template>

<script setup>
import { useElementBounding, useScroll } from "@vueuse/core";
const route = useRoute();

const main = ref(null)
const {y} = useScroll(main);

const {isMustard, logoOrientation, logoColor, backgroundColor, showNav, showLogo, showSidebar} = useLayout();
const {isSm} = useWindowSize();

const nav = ref(null);

const { height: navHeight } = useElementBounding(nav);


</script>
