import { useNuxtApp } from '#app'
import { CookieStorage } from '#imports'
interface Pagination {
  page: number
  limit: number
}

type Sort =
  | 'popular'
  | 'newest'
  | 'most_offer'
  | 'most_sale'
  | 'cheapest'
  | 'expensiveness'
  | 'chosen'

type CommentSort = 'newest' | 'oldest' | 'buyer' | 'likes' | 'most_view'

interface ProductsParams {
  pagination?: Pagination
  sort?: Sort
  search?: string
  category?: string
}

export const getProducts = async (params?: ProductsParams) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.get('/general/products', { params })

  return {
    items: res.data.data[0].items,
    meta: res.data.meta,
  }
}

export const getProductById = async (slug: string) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.get(`/general/products/show/${slug}`)

  return res.data.data
}

export const getCommentsByProductId = async (slug: string, sort: CommentSort = 'buyer') => {
  const { $axios } = useNuxtApp()
  const res = await $axios.get(`/general/products/comments/${slug}?sort=${sort}`)

  return res.data.data
}

export const submitReview = async (data: any) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post('/customer/comments/create', data, {
    headers: {
      Authorization: 'Bearer ' + CookieStorage.get('token'),
    },
  })

  return res.data.data
}

export const rateComment = async (commentId: number, mode: 'liked' | 'dislike') => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post(
    `/customer/comments/rate/${commentId}`,
    { mode },
    {
      headers: {
        Authorization: 'Bearer ' + CookieStorage.get('token'),
      },
    }
  )

  return res.data.data
}

export const fetchCart = async () => {
  const { $axios } = useNuxtApp()
  const res = await $axios.get(`/customer/carts/show`, {
    headers: {
      Authorization: 'Bearer ' + CookieStorage.get('token'),
    },
  })

  return res.data.data
}

export const addToCart = async (data: any) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.post(`/customer/carts/create`, data, {
    headers: {
      Authorization: 'Bearer ' + CookieStorage.get('token'),
    },
  })

  return res.data.data
}

export const deleteCartItem = async (itemId: number) => {
  const { $axios } = useNuxtApp()
  const res = await $axios.delete(`/customer/carts/delete/${itemId}`, {
    headers: {
      Authorization: 'Bearer ' + CookieStorage.get('token'),
    },
  })

  return res.data.data
}
