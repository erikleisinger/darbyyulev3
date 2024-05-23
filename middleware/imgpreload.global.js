import preload from '@/utils/preload'

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path === from.path) return;
    const {setLoading} = useLoading();
    setLoading(true)

    preload(to.path, async () => {
      navigateTo(to.path)
      await timeout(500)
      setLoading(false)
 
     })


    
})