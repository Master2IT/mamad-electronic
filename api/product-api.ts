
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
    console.log(res.data.data[0]);
    
    return res.data.data[0];
}
