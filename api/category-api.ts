
import { useNuxtApp } from '#app';

export const getCategories = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/categories');

    return res.data.data;
}
