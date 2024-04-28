<template>
    <div :class="dark ? 'text-white' : 'text-black'" class="text-center cursor-pointer">
      <div :class="`${isSm ? 'text-xl' : 'text-3xl'} ${icon}`"   />
      <div class="text-p2 font-extrabold">{{ text }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
    dark: Boolean,
    icon: String,
    text: String,
})
const { isSm } = useWindowSize();
</script>