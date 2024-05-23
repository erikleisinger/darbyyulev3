<template>

  <NuxtLayout >
    <AppLoading v-if="loading"/>
 
  <NuxtPage v-else/>
</NuxtLayout>
</template>
<script setup>
import fs from 'fs'
const setBg = () => {
  document.documentElement.style.setProperty('--bg', '#fefefe');
}

const imagesToPreload = [
  'about_desktop.png',
  'about_desktop_2.png',
  'about_mobile.png',
  'arc_bg.png',
  'arc_header.png',
  'arc_header_mobile.png',
  'ccc_bg.png',
  'ccc_header.png',
  'ccc_header_mobile.png',
  'contact_bg.png',
  'contact_bg_mobile.png',
  'contact_splash.png',
  'content_bg.png',
  'content_blog.png',
  'content_video_preview.png',
  'graphics_bg.png',
  'graphics_header.png',
  'graphics_header_bg.png',
  'graphics_header_mobile.png',
  'hero_desktop.png',
  'hero_mobile.png',
  'item_main_arc.png',
  'item_main_ccc.png',
  'item_main_content.png',
  'item_main_graphics.png',
  'item_main_pebble.png',
  'pebble_header.png',
  'pebble_header_bg.png',
  'pebble_header_mobile.png',
]


const loading = ref(true)
onBeforeMount(() => {
  setBg();
  const time = window.performance.now();
  const images = imagesToPreload.map(imageSrc => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `/images/${imageSrc}`;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
    Promise.all(images).then(() => {
     
      const time2 = window.performance.now();
      console.log('images loaded in', time2 - time, 'ms')
      loading.value = false;

    })
})


</script>
