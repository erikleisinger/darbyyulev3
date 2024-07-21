<template>

  <NuxtLayout >
    <transition>
    <AppLoading v-if="loading"/>

  <NuxtPage v-else />

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
.Toastify__toast-container {
  top: 16px!important;
left: 0!important;
right: 0!important;
margin: auto!important;
max-width: 90vw!important;

}
</style>
<script setup>
import preload from '@/utils/preload'
const setBg = () => {
  document.documentElement.style.setProperty('--bg', '#fefefe');
}

const {loading, setLoading} = useLoading();





const route = useRoute();
onBeforeMount(() => {
  setBg();
  setLoading(true)
  preload(route.path, () => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
 
  })
})


</script>
