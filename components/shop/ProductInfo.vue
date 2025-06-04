<template>
    <div class="p-5">
        <!-- Product title -->
        <h2 class="text-2xl font-bold mb-4">{{ product.title_fa }}</h2>

        <!-- Product type -->
        <span class="block mb-3">{{ product.title_en }}</span>

        <!-- User rating -->
        <div class="flex items-center gap-2 my-3">
            <span>امتیاز کاربران:</span>
            <div class="flex gap-1">
                <!-- todo: fix rating -->
                <NuxtRating read-only :rating-value="product.ratings" inactive-color="white" :rating-size="15" rounded-corners />
            </div>
        </div>

        <USeparator class="w-56" />

        <!-- Color selection -->
        <div class="flex flex-col gap-2 my-3">
            <span class="font-bold">رنگ: مشکی</span>
            <button class="w-6 h-6 bg-black rounded-sm hover:opacity-80 transition-opacity"
                aria-label="انتخاب رنگ مشکی" />
        </div>

        <USeparator class="w-32" />

        <!-- Warranty info -->
        <div class="flex items-center gap-2 my-3">
            <BadgeCheckIcon class="size-6 text-neutral-700" stroke-width="1.5" />
            <span>گارانتی ۱۸ ماهه آروند</span>
        </div>
    </div>
</template>

<script setup>
import { BadgeCheckIcon } from 'lucide-vue-next';

const { product } = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>