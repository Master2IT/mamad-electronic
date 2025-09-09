
import { useNuxtApp } from '#app';

export const getBlogs = async () => {
    const { $axios } = useNuxtApp()
    const res = await $axios.get('/general/posts')
  
    return {
      items: res.data.data.map((blog: any) => ({
        id: blog.id,
        name: blog.title,
        slug: blog.slug,
        image: `${process.env.BASE_URL}/${blog.image}`,
        // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
      })),
      meta: res.data.meta,
    }
  }
  export const getBlogById = async (slug: string) => {
    const { $axios } = useNuxtApp()
    const res = await $axios.get(`/general/posts/show/${slug}`)
  
    return res.data.data
  }
  