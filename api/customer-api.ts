
import { useNuxtApp } from '#app';

export const getFavorite = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/customer/favorites');
    console.log("res",res.data);

    return res.data
}

export const createFavorite = async (section: string, section_id: string) => {
    const { $axios } = useNuxtApp();
    const res = await $axios.post('/customer/favorites/create', {
        section,
        section_id
    });
    return res.data;
}
