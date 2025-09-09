<template>
    <NuxtLayout name="shop">
        <div class="container mx-auto px-4 py-8">
            <!-- Page Header -->
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-primary-700 mb-4">وبلاگ</h1>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    آخرین مقالات، راهنماها و اخبار تکنولوژی را در اینجا مطالعه کنید
                </p>
            </div>

            <!-- Loading State -->
            <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="i in 6" :key="i" class="animate-pulse">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div class="bg-gray-200 h-48 w-full"></div>
                        <div class="p-6">
                            <div class="bg-gray-200 rounded h-4 w-1/4 mb-3"></div>
                            <div class="bg-gray-200 rounded h-6 w-3/4 mb-3"></div>
                            <div class="bg-gray-200 rounded h-4 w-full mb-2"></div>
                            <div class="bg-gray-200 rounded h-4 w-2/3 mb-4"></div>
                            <div class="bg-gray-200 rounded h-4 w-1/3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Error State -->
            <!-- <div v-else-if="error" class="text-center py-12">
                <p class="text-red-500 text-lg">خطا در بارگذاری مقالات</p>
                <UButton @click="refresh()" class="mt-4" variant="outline">
                    تلاش مجدد
                </UButton>
            </div> -->

            <!-- Blog Posts Grid -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ShopArticleCard 
                    v-for="blog in data.items" 
                    :key="blog.id"
                    :article="blog"
                />
            </div>

            <!-- Pagination -->
            <div v-if="!pending && !error && data?.meta?.total > 1" class="flex justify-center mt-12">
                <UPagination v-model:page="currentPage" show-edges :total="data?.meta?.total || 0"
                    :page-count="data?.meta?.per_page || 12" :disabled="pending" :ui="{
                        rounded: 'rounded-lg',
                        default: {
                            padding: 'px-3 py-1',
                            size: 'sm',
                            activeButton: 'bg-primary-500 text-white font-bold',
                            inactiveButton: 'bg-gray-100 text-gray-600',
                            button: 'hover:bg-primary-100',
                        }
                    }" dir="rtl" />
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>
import { getBlogs } from '@/api/blogs-api'

// Set page meta
useHead({
    title: 'وبلاگ',
    meta: [
        { name: 'description', content: 'آخرین مقالات، راهنماها و اخبار تکنولوژی' }
    ]
})

const BASE_URL = process.env.BASE_URL
const currentPage = ref(1)

const { data, pending, error, refresh } = await useAsyncData('blogs', async () => {
  return await getBlogs()
})
</script>
