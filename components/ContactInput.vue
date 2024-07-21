<template>
     <div class="grow group">
        <label for="name" class="block  font-semibold  text-[#cecccd] group-focus-within:text-mustard transition-all" :class="isSm ? 'text-p-sm' : 'text-h2'">{{ label }}</label>
        <div class="contact-input__container flex">
            <textarea v-if="textarea" id="name" class="contact-input grow max-w-[80vw] md:max-w-[40vw]  " size="1"  v-model="value" v-bind="$attrs" style="field-sizing: content"/>
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
    background-color: var(--color-mustard);
    display: block;
    transition: all 0.3s;
  }
  &:focus-within {
    .contact-input {
        color: var(--color-mustard);
    }
    &:after {
      width: 100%;
    }
  }
  .contact-input {
    outline: 0;
  
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