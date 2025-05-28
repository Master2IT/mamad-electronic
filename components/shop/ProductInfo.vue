<template>
    <div class="p-5">
        <!-- Product title -->
        <h2 class="text-2xl font-bold mb-4">{{ product.name }}</h2>

        <!-- Product type -->
        <span class="block mb-3">خازن دیودی</span>

        <!-- User rating -->
        <div class="flex items-center gap-2 my-3">
            <span>امتیاز کاربران:</span>
            <div class="flex gap-1">
                <UIcon v-for="i in 5" :key="i" name="i-lucide-star" :class="[
                    'text-yellow-400 my-2 size-3.5',
                    { '!fill-yellow-500': i <= product.rating }
                ]" />
            </div>
        </div>

        <!-- Color selection -->
        <div class="flex flex-col gap-2 my-3">
            <span class="font-bold">رنگ: مشکی</span>
            <button class="w-6 h-6 bg-black rounded-sm hover:opacity-80 transition-opacity"
                aria-label="انتخاب رنگ مشکی" />
        </div>

        <!-- Warranty info -->
        <div class="flex items-center gap-2">
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