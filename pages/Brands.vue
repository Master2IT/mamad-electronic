<template>
     <NuxtLayout name="shop">
         <div class="container mx-auto px-4 py-8">
             <div class="mb-8">
                 <h1 class="text-3xl font-bold text-primary-700 mb-2">برندها</h1>
                 <p class="text-gray-600">مشاهده تمامی برندهای موجود</p>
             </div>
             
             <div v-if="pending" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                 <div v-for="i in 12" :key="i" class="animate-pulse">
                     <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-4 animate-pulse">
                         <div class="bg-gray-200 rounded h-24 w-full mb-3"></div>
                         <div class="bg-gray-200 rounded h-4 w-3/4 mx-auto"></div>
                     </div>
                 </div>
             </div>
             
             <div v-else-if="error" class="text-center py-12">
                 <p class="text-red-500">خطا در بارگذاری برندها</p>
             </div>
             
             <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                 <div v-for="brand in brands" :key="brand.id">
                 <ShopCategoryCard :image="brand.image" :name="brand.name" :to="brand.to" />   
                </div>
             </div>
             
             <div v-if="!pending && brands?.length === 0" class="text-center py-12">
                 <p class="text-gray-500">هیچ برندی یافت نشد</p>
             </div>
         </div>
     </NuxtLayout>
</template>

<script setup>
import { getBrands } from '@/api/brand-api'
const BASE_URL = process.env.BASE_URL;
// Set page meta
useHead({
    title: 'برندها',
    meta: [
        { name: 'description', content: 'مشاهده تمامی برندهای موجود در فروشگاه' }
    ]
})

const { data: brands } = await useAsyncData('brands', async () => {
  const brands = await getBrands()
  return brands.map(brand => ({
    id: brand.id,
    name: brand.title,
    // image:{`${BASE_URL}/${brand.image}`}
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
  }))
})
</script>
