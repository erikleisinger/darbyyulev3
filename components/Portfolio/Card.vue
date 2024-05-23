
<template>
    <article class="grid grid-cols-[auto,1fr] min-h-[100px] md:min-h-[300px] overflow-hidden md:hover:bg-black/5 transition-all cursor-pointer gap-2 md:gap-0">
        <img :src="item.img_main" class="h-full  w-[150px] object-cover"  />
        <div class="md:p-6">
            <h2 class="text-gold md:normal-case font-medium md:font-bold">{{ item.name }}</h2>
            <p class="text-p3">{{ item.description }}</p>
        </div>
    </article>
    </template>
<script setup>
const props = defineProps({
    item: Object
})
</script>