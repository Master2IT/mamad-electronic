<template>
    <NuxtLayout name="shop">
        <div class="bg-white container mx-auto py-8">
            <!-- Product Details Section -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <!-- Product Gallery -->
                <div class="bg-white p-4 rounded-lg">
                    <UCarousel v-if="product?.galleries && product?.galleries.length" :items="product?.galleries"
                        v-slot="{ item }" class="mb-4" arrows dots>
                        <NuxtImg :src="image_url + item.path" :alt="product?.title_fa"
                            class="w-full h-[400px] object-contain" />
                    </UCarousel>
                    <NuxtImg v-else :src="product?.file.path" :alt="product?.title_fa"
                        class="w-full h-[400px] object-contain" />
                    <div class="flex gap-2 mt-4 overflow-x-auto pb-2"
                        v-if="product?.galleries && product?.galleries.length">
                        <NuxtImg v-for="(gallery, index) in product?.galleries" :key="index"
                            :src="image_url + gallery?.path" :alt="`${gallery?.name} - thumbnail ${index + 1}`"
                            class="w-20 h-20 object-contain border rounded cursor-pointer hover:border-primary-500" />
                    </div>
                </div>

                <!-- Product Info -->
                <ShopProductInfo :product="product" />
            </div>

            <div class="my-4">
                <ShopAttributes :items="product.attributes" />
            </div>

            <USeparator class="w-full" />

            <div class="my-4 px-8">
                <h2 class="text-xl md:text-2xl font-bold text-purple-600 mb-6 text-right">
                    نقد و بررسی
                </h2>
                <div class="prose max-w-none">
                    <p>{{ product.description || 'توضیحات تکمیلی محصول در اینجا قرار می‌گیرد.' }}</p>
                </div>
            </div>

            <USeparator class="w-full" />

            <div class="py-4">
                <!-- <ShopReviews :items="REVIEWS" /> -->
                <ShopUserReviews :items="USER_REVIEWS" />
            </div>

            <!-- Related Products -->
            <!-- <ShopProductsCategory link="#" title="کالاهای مشابه" :products="relatedProducts" /> -->
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import { getProductById } from '~/api/product-api'

const route = useRoute()

const relatedProducts = ref([])
const { data: product } = useAsyncData('product', () => getProductById(route.params.slug), {
    // server: true,
    // lazy: false,
    // immediate: true,
    // transform: (res) => res.data
})

const image_url = `${process.env.API_BASE_URL}/`;

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