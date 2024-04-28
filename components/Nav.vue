<template>
  <nav
    class="bg-mustard flex gap-2 w-full justify-around  py-1 [&>*]:flex [&>*]:flex-col [&>*]:items-center text-black"
  >
 
    <NavButton :dark="currentRoute === '/'" text="Home" @click="navigateTo('/')" icon="i-carbon-home"/>
    <NavButton :dark="currentRoute === '/about'" text="About" @click="navigateTo('/about')" icon="i-carbon-user"/>
    <NavButton :dark="currentRoute === '/work'" text="Work" @click="navigateTo('/work')" icon="i-carbon-workspace"/>
    <NavButton :dark="currentRoute === '/contact'" text="Contact" @click="navigateTo('/contact')" icon="i-carbon-email"/>
   

  </nav>
</template>
<script setup>
const route = useRoute();

const currentRoute = computed(() => route.path);
</script>
