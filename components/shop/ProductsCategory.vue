<template>
    <UCard class="my-10 h-auto w-full">
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-[20px] text-primary-700 font-medium">{{ title }}</h2>
            <NuxtLink external :to="link" class="flex items-center gap-1">
                <UButton variant="link" class="flex items-center gap-1">
                    مشاهده همه
                    <ChevronLeft class="w-4 h-4" />
                </UButton>
            </NuxtLink>
        </div>
        <Carousel :items="products.items">
            <template #default="{ item }">
                <CommonProductCard showReview :type="2" :product="item" />
            </template>
        </Carousel>
    </UCard>
</template>
<script setup>
import Carousel from '@/components/common/Carousel/Carousel.vue';
import { ChevronLeft } from 'lucide-vue-next';
import { getProducts } from '~/api/product-api';
const props = defineProps({

    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
})

const { data: products } = await useAsyncData('products', () => getProducts({ sort: props.type }))
</script>