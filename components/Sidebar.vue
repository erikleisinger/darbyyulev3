<template>
    <div class="flex transition-all duration-200 items-center p-8 max-w-fit   relative" :class="{' bg-mustard fullwidth': open }">
        <transition>
      <div class="i-carbon-menu " :class="dark ? 'text-white' : 'text-black'" @click="open = true" v-if="!open"/>
      <div class="i-carbon-close text-white" v-else @click="open = false"/>
    </transition>
    <transition name="slide">
    <div v-if="open" class="flex gap-16 text-white items-center [&>h2]:font-normal [&>h2]:normal-case [&>h2]:pt-2 pl-16 pr-12 bg-mustard  ">
        <h2 class="cursor-pointer hover:text-black transition-color" @click="navigate('/')">Home</h2>
        <h2 class="cursor-pointer hover:text-black transition-color" @click="navigate('/work')">Work</h2>
        <h2 class="cursor-pointer hover:text-black transition-color" @click="navigate('/about')">Philosophy</h2>
        <h2 class="cursor-pointer hover:text-black transition-color" @click="navigate('/contact')">Contact</h2>
    
    </div>
</transition>
    </div>
</template>
<style lang="scss" scoped>

.fullwidth {
    max-width: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.1s linear;


  
}
.v-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.v-enter-active {
    transform: rotate(90deg);
  
   
}
.v-enter-to {
    transform: rotate(0deg)
}
.v-leave-active {
    opacity: 0;
    transform: rotate(-90deg)
}
.slide-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: left;
}

.slide-leave-active {
  transition: all 0.2s linear;
  transform-origin: left;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
  transform: scaleX(0);

  transform-origin: left;
}

</style>
<script setup>
const open = ref(false)
const props = defineProps({
    dark: Boolean
})

const navigate= (path) => {
    open.value = false;
    return navigateTo(path)
}
</script>