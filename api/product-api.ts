
import { useNuxtApp } from '#app';
interface Pagination {
    page: number;
    limit: number;
}

type Sort = 'popular' | 'newest' | 'most_offer' | 'most_sale' | 'cheapest' | 'expensiveness' | 'chosen';

interface ProductsParams {
    pagination?: Pagination;
    sort?: Sort;
    search?: string;
    category?: string;
}

export const getProducts = async (params?: ProductsParams) => {
    const { $axios } = useNuxtApp();
    const res = await $axios.get('/general/products', { params });

    return {
        items: res.data.data[0].items,
        meta: res.data.meta
    };
}
