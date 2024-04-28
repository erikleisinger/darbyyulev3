<template>
  <NuxtLayout>
  <NuxtPage/>
</NuxtLayout>
</template>
<script setup>
const {isMustard} = useLayout();
const setBg = () => {
  document.documentElement.style.setProperty('--bg', isMustard.value ? '#C99608' : '#fefefe');
}

onBeforeMount(() => {
  setBg();
})



watch(isMustard, () => setBg())

</script>
