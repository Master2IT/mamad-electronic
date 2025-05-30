
import { useNuxtApp } from '#app';
interface Pagination {
    page: number;
    limit: number;
}

type Sort = 'popular' | 'newest' | 'most_offer' | 'most_sale' | 'cheapest' | 'expensiveness' | 'chosen';

interface CategoryParams {
    pagination?: Pagination;
    sort?: Sort;
    search?: string;
    category?: string;
}

export const getCategories = async (params?: CategoryParams) => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/categories', { params });
    console.log(res.data.data[0]);

    return res.data.data[0];
}
