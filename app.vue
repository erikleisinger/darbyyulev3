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
  'arc_after.png',
  'arc_beforeafter.png',
  'arc_bg.png',
  'arc_final.png',
  'arc_header.png',
  'arc_header_mobile.png',
  'arc_sitemap.png',
  'blogpng.png',
  'blogpost.png',
  'ccc_bg.png',
  'ccc_final.png',
  'ccc_header.png',
  'ccc_header_bg.png',
  'ccc_header_mobile.png',
  'ccc_ux.png',
  'contact_bg.png',
  'contact_bg_mobile.png',
  'contact_splash.png',
  'content_bg.png',
  'content_blog.png',
  'content_header.png',
  'content_header_1.png',
  'content_header_2.png',
  'content_header_bg.png',
  'content_header_mobile.png',
  'content_video_preview.png',
  'graphics_bg.png',
  'graphics_header.png',
  'graphics_header_bg.png',
  'graphics_header_mobile.png',
  'graphic_beach.png',
  'graphic_mundo.png',
  'graphic_pebble.png',
  'graphic_stats.png',
  'hero_desktop.png',
  'hero_mobile.png',
  'item_main_arc.png',
  'item_main_ccc.png',
  'item_main_content.png',
  'item_main_graphics.png',
  'item_main_pebble.png',
  'pebble_final.png',
  'pebble_header.png',
  'pebble_header_bg.png',
  'pebble_header_mobile.png',
  'pebble_styles_1.png',
  'pebble_styles_2.png',
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
