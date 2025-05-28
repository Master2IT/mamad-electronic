<template>
    <NuxtLayout name="shop">
        <div class="bg-white container mx-auto px-4 py-8">
            <!-- Product Details Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <!-- Product Gallery -->
                <div class="bg-white p-4 rounded-lg">
                    <UCarousel v-if="product.gallery && product.gallery.length" :items="product.gallery"
                        v-slot="{ item }" class="mb-4" arrows dots>
                        <NuxtImg :src="item" :alt="product.name" class="w-full h-[400px] object-contain" />
                    </UCarousel>
                    <NuxtImg v-else :src="product.image" :alt="product.name" class="w-full h-[400px] object-contain" />
                    <div class="flex gap-2 mt-4 overflow-x-auto pb-2">
                        <NuxtImg v-for="(image, index) in product.gallery || [product.image]" :key="index" :src="image"
                            :alt="`${product.name} - thumbnail ${index + 1}`"
                            class="w-20 h-20 object-contain border rounded cursor-pointer hover:border-primary-500" />
                    </div>
                </div>

                <!-- Product Info -->
                <ShopProductInfo :product="product" />
            </div>

            <div class=" py-4">
                <div class="prose max-w-none">
                    <p>{{ product.description || 'توضیحات تکمیلی محصول در اینجا قرار می‌گیرد.' }}</p>
                </div>
            </div>

            <div class="py-4">
                <ShopSpecificationsProduct :items="SPECIFICATIONS" />
            </div>

            <div class="py-4">
                <ShopReviews :items="REVIEWS" />
                <ShopUserReviews :items="USER_REVIEWS" />
            </div>

            <!-- Related Products -->
            <ShopProductsCategory link="#" title="کالاهای مشابه" :products="relatedProducts" />
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PRODUCTS } from '@/constant'

// Mock data for the page
const REVIEWS = [
    {
        id: 1,
        title: 'کیفیت عالی',
        description: 'این محصول از کیفیت بسیار بالایی برخوردار است و کاملاً با توضیحات مطابقت دارد.'
    },
    {
        id: 2,
        title: 'قیمت مناسب',
        description: 'با توجه به کیفیت محصول، قیمت آن بسیار مناسب و به صرفه است.'
    }
]

const USER_REVIEWS = [
    {
        id: 1,
        userName: 'محمد احمدی',
        rating: 5,
        date: '۱۴۰۲/۰۲/۱۵',
        comment: 'محصول بسیار خوبی است. کیفیت ساخت عالی و عملکرد بی نقص. پیشنهاد می‌کنم حتما خرید کنید.',
        pros: ['کیفیت ساخت بالا', 'قیمت مناسب', 'ارسال سریع'],
        cons: ['بسته بندی می‌تواند بهتر باشد']
    },
    {
        id: 2,
        userName: 'علی رضایی',
        rating: 4,
        date: '۱۴۰۲/۰۱/۲۰',
        comment: 'در مجموع راضی هستم. فقط راهنمای استفاده کامل نیست.',
        pros: ['کارایی خوب', 'طراحی زیبا'],
        cons: ['راهنمای ناقص', 'تاخیر در ارسال']
    }
]

const SPECIFICATIONS = [
    {
        id: 1,
        name: 'ولتاژ کاری',
        detail: '5V DC'
    },
    {
        id: 2,
        name: 'جریان مصرفی',
        detail: '100mA'
    },
    {
        id: 3,
        name: 'ابعاد',
        detail: '68mm × 53mm × 15mm'
    },
    {
        id: 4,
        name: 'وزن',
        detail: '25g'
    },
    {
        id: 5,
        name: 'گارانتی',
        detail: '12 ماه'
    }
]

// Get product ID from route params (in a real app)
// const route = useRoute()
// const productId = parseInt(route.params.id)

// For demo purposes, use the first product
const productId = 1

// Find the product
const product = ref(PRODUCTS.find(p => p.id === productId) || PRODUCTS[0])

// Add gallery images for demo
product.value.gallery = [
    product.value.image,
    'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg'
]

// Add description for demo
product.value.description = 'این محصول با کیفیت بالا و طراحی منحصر به فرد، برای استفاده در پروژه‌های الکترونیکی مناسب است. قطعات با دقت بالا ساخته شده و تست شده‌اند تا عملکرد بهینه را تضمین کنند. این محصول با اکثر بردهای آردوینو و رزبری پای سازگار است و به راحتی قابل نصب و راه‌اندازی می‌باشد.'

// Related products (excluding current product)
const relatedProducts = computed(() => {
    return PRODUCTS.filter(p => p.id !== product.value.id).slice(0, 8)
})

// Tabs configuration
const tabs = [
    {
        key: 'description',
        label: 'توضیحات محصول',
        icon: 'i-lucide-file-text'
    },
    {
        key: 'specifications',
        label: 'مشخصات فنی',
        icon: 'i-lucide-list'
    },
    {
        key: 'reviews',
        label: 'نظرات کاربران',
        icon: 'i-lucide-message-circle'
    }
]
</script>