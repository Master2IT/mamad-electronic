<template>
    <div class="my-10 h-auto">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl text-primary-700 font-black">{{ title }}</h2>
            <UButton variant="link" :href="link" class="flex items-center gap-1">
                مشاهده همه
                <ChevronLeft class="w-4 h-4" />
            </UButton>
        </div>
        <Carousel :items="data?.items">
            <template #default="{ item }">
                <CommonProductCard showReview :type="2" :product="item" />
            </template>
        </Carousel>
    </div>
</template>
<script setup>
import Carousel from '@/components/common/Carousel/Carousel.vue'
import { ChevronLeft } from 'lucide-vue-next'

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
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
        required: true
    }
})

const { data } = await useAsyncData('products', () => getProducts({ sort: props.type }))
</script>