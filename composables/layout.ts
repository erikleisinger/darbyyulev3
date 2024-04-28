export const useLayout = () => {
    const route = useRoute();
    const isMustard = computed(() => {
        return ["/about", "/contact"].includes(route.path);
      });

      const backgroundColor = computed(() => isMustard.value ? 'bg-mustard' : 'bg-white') 
      const logoOrientation = computed(() => isMustard.value || route.path === '/work' ? 'right-0' : '')
      const logoColor = computed(() => isMustard.value ? 'white' : 'mustard');
      const showNav = computed(() => !["work-id", 'blog'].includes(route.name as string));
      const showSidebar = computed(() => !['blog'].includes(route.name as string));

      return {backgroundColor, logoOrientation, logoColor, isMustard, showNav, showSidebar}
}