const loading = ref(false)
export const useLoading = () => {
    const setLoading = (bool: boolean) => {
        loading.value = bool;
    }
    return {loading, setLoading}
}