
import { useNuxtApp } from '#app';

export const getColors = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/colors');

    return res.data.data;
}
