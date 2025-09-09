<template>
    <div class="grid  gap-2">
        <div class="my-10 h-auto">
            <div class="flex items-center justify-between mb-2">
                <h2 class="text-xl md:text-2xl text-primary-700 font-black">مقالات</h2>
                    <UButton  variant="link" :href="link" class="flex items-center gap-1">
                    مشاهده همه
                    <ChevronLeft class="w-4 h-4" />
                </UButton>
            </div>
            <Carousel :items="articles">
                <template #default="{ item }">
                    <ShopArticleCard :key="item.id" :article="item" />
                </template>
            </Carousel>
        </div>
    </div>
</template>
<script setup>
import { ChevronLeft } from 'lucide-vue-next';
import Carousel from '@/components/common/Carousel/Carousel.vue';

defineProps({
    articles: {
        type: Array,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
</script>