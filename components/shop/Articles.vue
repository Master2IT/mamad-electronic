<template>
    <div class="block md:hidden grid gap-2">
        <div class="my-10 h-auto">
            <div class="flex items-center justify-between mb-2">
                <h2 class="text-xl md:text-2xl text-primary-700 font-black">مقالات</h2>
                <UButton variant="link" :href="link" class="flex items-center gap-1">
                    مشاهده همه
                    <ChevronLeft class="w-4 h-4" />
                </UButton>
            </div>
            <ShopArticleCard v-for="article in articles" :key="article.id" :article="article" />
        </div>
    </div>
</template>
<script setup>
import { ChevronLeft } from 'lucide-vue-next';

defineProps({
    articles: {
        type: Array,
        required: true
    }
})
</script>