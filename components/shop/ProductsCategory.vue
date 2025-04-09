<template>
    <div class="py-10">
        <div class="flex items-center justify-between mb-2">
            <h2 class="text-2xl text-primary-700 font-bold">{{ title }}</h2>
            <UButton variant="link" :href="link" class="flex items-center gap-1">
                مشاهده همه
                <ChevronLeft class="w-4 h-4" />
            </UButton>
        </div>
        <UCarousel v-slot="{ item }" align="start" skipSnaps :items="products" autoHeight class="w-full" arrows loop
            :autoplay="{ delay: 2000 }"
            :ui="{ item: 'basis-1/6', prev: 'left-0 right-auto', next: 'right-0 left-auto' }">
            <div class="py-1">
                <ShopProductCard :product="item" />
            </div>
        </UCarousel>
    </div>
</template>
<script setup>
import { ChevronLeft } from 'lucide-vue-next'

defineProps({
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
    }
})
</script>