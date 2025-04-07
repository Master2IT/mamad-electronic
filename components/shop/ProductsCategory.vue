<template>
    <div class="flex items-center justify-between my-10">
        <h2 class="text-2xl text-primary-700 font-bold">{{ title }}</h2>
        <UButton variant="link" :href="link" class="flex items-center gap-2">
            مشاهده همه
            <ChevronLeft />
        </UButton>
    </div>
    <UCarousel v-slot="{ item }" align="start" skipSnaps :items="products" autoHeight class="w-full mt-5" arrows loop
        :autoplay="{ delay: 2000 }" :ui="{ item: 'basis-1/5', prev: 'left-0 right-auto', next: 'right-0 left-auto' }">
        <ShopProductCard :product="item" />
    </UCarousel>
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