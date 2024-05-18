
export const useLayout = () => {
    const route = useRoute();
    const {isSm} = useWindowSize()
    const isMustard = ref(true)

      const backgroundColor = computed(() => isMustard.value ? 'bg-mustard' : 'bg-white') 
      const logoOrientation = computed(() => route.path === '/' ? 'left-0' : 'right-0')
      const logoColor = computed(() => 'mustard');
      const showNav = computed(() => isSm.value && !["work-id", 'blog'].includes(route.name as string))
      const showLogo = computed(() => {
        if (["work-id", 'blog'].includes(route.name as string))  return false;
        
        if (!isSm.value) return ["contact", 'work'].includes(route.name as string) 
          return true;
      })
      const showSidebar = computed(() => route.path !== '/' && !["work-id", 'blog'].includes(route.name as string));

      return {backgroundColor, logoOrientation, logoColor, isMustard, showNav, showLogo, showSidebar}
}