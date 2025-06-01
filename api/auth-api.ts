
import { useNuxtApp } from '#app';

export const login = async (data:any) => {
    const { $axios } = useNuxtApp();
    const res = await $axios.post('/general/login',data);

    return res.data.data;
}
export const logout = async () => {
    const { $axios } = useNuxtApp();
    const res = await $axios.post('/general/logout');

    return res.data.data;
}
export const verify = async (data:any) => {
    const { $axios } = useNuxtApp();
    const res = await $axios.post('/general/verify',data);

    return res.data.data;
}
