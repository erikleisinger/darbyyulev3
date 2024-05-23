<template>

  <NuxtLayout >
    <transition>
    <AppLoading v-if="loading"/>
 <div v-else>
  <NuxtPage />
</div>
</transition>
</NuxtLayout>
</template>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script setup>
const setBg = () => {
  document.documentElement.style.setProperty('--bg', '#fefefe');
}

const {loading} = useLoading();






onBeforeMount(() => {
  setBg();

})


</script>
