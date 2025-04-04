<template>
  <div class="relative p-4 rounded-lg shadow-md h-[276px] w-full">
    <div class="relative">
      <img :src="product.image" :alt="product.name" class="w-full h-auto">
      <span v-if="product.discount" class="absolute top-2.5 left-2.5 bg-red-500 text-white px-2 py-1 rounded font-bold">
        -{{ product.discount }}%
      </span>
      <button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer"
        @click="$emit('toggle-favorite', product)">
        <Heart :class="{ 'text-red-500': product.favorite, 'text-gray-300': !product.favorite }" size="24" />
      </button>
    </div>
    <h3 class="mt-3 text-lg font-semibold text-right">{{ product.name }}</h3>
    <div class="flex items-center gap-4 mt-2 justify-end">
      <p class="font-bold text-gray-800">{{ product.discountedPrice }} تومان</p>
      <p v-if="product.discount" class="line-through text-gray-400">
        {{ product.price }} تومان
      </p>
    </div>
    <button
      class="w-full mt-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      @click="$emit('add-to-cart', product)">
      افزودن به سبد خرید
    </button>
  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'

const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
