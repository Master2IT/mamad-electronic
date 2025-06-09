<template>
    <div class="p-5 flex justify-between col-span-2">
        <div>
            <!-- Product title -->
            <h2 class="text-2xl font-bold mb-4">{{ product.title_fa }}</h2>

            <!-- Product type -->
            <span class="block mb-3">{{ product.title_en }}</span>

            <!-- User rating -->
            <div class="flex items-center gap-2 my-3">
                <span>امتیاز کاربران:</span>
                <div class="flex gap-1">
                    <!-- todo: fix rating -->
                    <NuxtRating read-only :rating-value="product.ratings" inactive-color="white" :rating-size="15"
                        rounded-corners />
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
        <div>
            <h3 class="text-lg font-bold mb-2">ویژگی ها</h3>
            <ul class="border rounded-md w-[280px]" v-if="product.prices.length > 0">
                <template v-for="(price, index) in product.prices" :key="index">
                    <li class="flex items-center gap-2 p-2">
                        <span class="text-neutral-500 text-sm">{{ price?.final_price?.title }}</span>
                        <span>{{ price?.final_price?.final_price?.toLocaleString() }}</span>
                    </li>
                    <hr class="my-1 w-full border-neutral-300 border-[1.5px] border-dashed"
                        v-if="index !== product.prices.length - 1 && product.prices.length > 1" />
                </template>
            </ul>

            <div class="flex gap-2 mt-8 flex-col">
                <div>
                    تومان <span class="text-xl font-bold">
                        {{ product.prices[0]?.final_price?.final_price?.toLocaleString() || 0 }}
                    </span>
                </div>
                <div class="flex gap-2 mt-1">
                    <UButton block size="xl" @click="addProductToBasket">
                        افزودن به سبد خرید
                        <ShoppingCartIcon class="size-4" />
                    </UButton>
                    <UButton size="xl" v-if="basket > 0" @click="basket--">
                        +{{ basket }}
                    </UButton>
                </div>
                <span class="text-red-500 text-xs mt-1">{{ product.stock }} عدد در انبار باقی مانده</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { BadgeCheckIcon, ShoppingCartIcon } from 'lucide-vue-next';

const basket = ref(0)

const addProductToBasket = () => {
    if (basket.value < product.stock) {
        basket.value++
    }
}

const { product } = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>