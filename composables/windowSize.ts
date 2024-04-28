import {useWindowSize as windowSize} from '@vueuse/core'

export const useWindowSize = () => {
    const {width} = windowSize()
    const isSm = computed(() => width.value < 768)

    return {isSm}
}