<template>
     <div class="grow group">
        <label for="name" class="block  font-semibold  text-[#cecccd] group-focus-within:text-black transition-all" :class="isSm ? 'text-p-sm' : 'text-h2'">{{ label }}</label>
        <div class="contact-input__container flex">
          <div class="relative max-w-[calc(100vw - 3rem)] md:max-w-[40vw] grow textarea__container" v-if="textarea">
            <div class="invisible  w-[calc(100vw - 3rem)] md:w-[40vw]  max-w-[inherit] max-h-[min(15vh,_400px)]">{{ value }}</div>
            <textarea  id="name" class="contact-input w-full pretty-scrollbar "   v-model="value" v-bind="$attrs" style="resize: none"  />
          </div>
        <input id="name" class="contact-input grow  " size="1"  v-model="value" v-bind="$attrs" v-else/>
      </div>
      </div>
</template>
<style lang="scss" scoped>
.contact-input__container {
  position: relative;
flex-grow: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: var(--color-black);
    display: block;
    transition: all 0.3s;
  }
  &:focus-within {
    .contact-input {
        color: var(--color-black);
    }
    &:after {
      width: 100%;
    }
  }
  .contact-input {
    outline: 0;
  
}
}

.textarea__container {
  display: grid;
  div, textarea {
    grid-area: 1 / 1 / 2 /2;
  }
}

</style>
<script setup lang="ts">
    const props = defineProps<{
        label: string;
        modelValue: string;
        textarea?: boolean;
    
    }>() 

    const emit = defineEmits(['update:modelValue'])

    let value = computed({
        get() {
            return props.modelValue
        },
        set(val: string) {
            emit('update:modelValue', val)
        }
    })

    const { isSm } = useWindowSize();
</script>