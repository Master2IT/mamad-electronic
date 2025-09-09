
import { useNuxtApp } from '#app';

export const getBrands = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/brands');

    return res.data.data;
}
