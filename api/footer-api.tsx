
import { useNuxtApp } from '#app';

export const getFooter = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/footer');

    return res.data;
}
