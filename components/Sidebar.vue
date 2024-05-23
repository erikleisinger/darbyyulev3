<template>
    <div class="flex transition-all duration-200 items-center p-8 max-w-fit   relative" :class="{'fullwidth': open }">
        <transition>
      <div class="i-carbon-menu "  @click="open = true" v-if="!open"/>
      <div class="i-carbon-close " v-else @click="open = false"/>
    </transition>
    <transition name="slide">
    <div v-if="open" class="flex gap-16  items-center  pl-16 pr-12  ">
        <h4 class="cursor-pointer transform transition-transform hover:scale-110 hover:font-bold" @click="navigate('/')">Home</h4>
        <h4 class="cursor-pointer  transform transition-transform hover:scale-110 hover:font-bold" @click="navigate('/work')">Work</h4>
        <h4 class="cursor-pointer  transform transition-transform hover:scale-110 hover:font-bold" @click="navigate('/about')">Philosophy</h4>
        <h4 class="cursor-pointer  transform  transition-transform hover:scale-110 hover:font-bold" @click="navigate('/contact')">Contact</h4>
    
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
.v-leave-from {
    opacity: 0;
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