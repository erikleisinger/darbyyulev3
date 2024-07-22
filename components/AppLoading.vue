<template>
    <div class="inset-0 fixed z-[100] apploading-container" :class="{
        'bg-white':loading,
        'pointer-events-none': !loading
    }" >
    <div class="apploading-inner-fade flex justify-center items-center h-full w-full fixed inset-0" :class="{
        loading
    }">

        <Logo color="mustard" width="100"/>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.apploading-inner-fade {
  
    &.loading {
        animation: fade 0.3s forwards;
        animation-direction: normal;
        pointer-events: all;
}
&:not(.loading) {
    animation: fadeout 0.3s forwards;
  
    pointer-events: none;
}
}

@keyframes fade {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

@keyframes fadeout {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0
    }
}

</style>
<script setup>
const {loading} = useLoading();

let isLoading = ref(false);

watch(loading, () => {
    isLoading.value = false;
    nextTick(() => {
        isLoading.value = true;
    })
})
</script>