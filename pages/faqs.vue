<template>
    <NuxtLayout name="shop">
        <div class="container mx-auto px-4 py-8">
            
            
            <div v-if="pending" class="space-y-4">
                <div v-for="i in 6" :key="i" class="animate-pulse">
                    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                        <div class="bg-gray-200 rounded h-6 w-3/4 mb-3"></div>
                        <div class="bg-gray-200 rounded h-4 w-full mb-2"></div>
                        <div class="bg-gray-200 rounded h-4 w-2/3"></div>
                    </div>
                </div>
            </div>
            
            <div v-else-if="error" class="text-center py-12">
                <p class="text-red-500">خطا در بارگذاری سوالات متداول</p>
            </div>
            
           
            <ShopFAQ link="/faqs" title="سوالات متداول" :items="FAQS" />
            
            <!-- Contact section -->
            <div class="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 text-center">
                <h3 class="text-xl font-bold text-primary-700 mb-2">سوال شما پاسخ داده نشد؟</h3>
                <p class="text-gray-600 mb-4">با تیم پشتیبانی ما تماس بگیرید</p>
                <UButton color="primary" size="lg">
                    تماس با پشتیبانی
                </UButton>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { FAQS } from '@/constant'
// Set page meta
useHead({
    title: 'سوالات متداول',
    meta: [
        { name: 'description', content: 'پاسخ سوالات رایج کاربران در مورد محصولات و خدمات' }
    ]
})

// Simulate loading state for better UX
const { data: faqs, pending, error } = await useAsyncData('faqs', async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return FAQS
})
</script>
