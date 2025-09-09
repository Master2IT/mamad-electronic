<template>
     <NuxtLayout name="shop">
         <div class="container mx-auto px-4 py-8">
             <div class="mb-8">
                 <h1 class="text-3xl font-bold text-primary-700 mb-2">برندها</h1>
                 <p class="text-gray-600">مشاهده تمامی برندهای موجود</p>
             </div>
             
             <div v-if="pending" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                 <div v-for="i in 12" :key="i" class="animate-pulse">
                     <div class="bg-gray-200 rounded-lg h-32 w-full"></div>
                 </div>
             </div>
             
             <div v-else-if="error" class="text-center py-12">
                 <p class="text-red-500">خطا در بارگذاری برندها</p>
             </div>
             
             <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                 <div v-for="brand in brands" :key="brand.id" 
                      class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 border border-gray-100">
                     <NuxtImg 
                         :src="`${BASE_URL}/${brand.image}`" 
                         :alt="brand.name" 
                         class="w-full h-24 object-contain mb-3"
                         loading="lazy"
                     />
                     <h3 class="text-sm font-medium text-gray-800 text-center truncate">
                         {{ brand.name }}
                     </h3>
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

// Fetch brands data
const { data: brands, pending, error } = await useAsyncData('brands', () => getBrands())
</script>
