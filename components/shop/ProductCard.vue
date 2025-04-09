<template>
  <div class="relative rounded-md w-full shadow-sm border-0 bg-[#F7F7F7] select-none">
    <div class="relative p-0 flex justify-center items-center">
      <NuxtImg :src="product.image" :alt="product.name" class="h-[200px] w-[200px] object-contain rounded-md" />
      <span v-if="product.discount"
        class="absolute top-2.5 left-2.5 bg-red-500 rounded-full text-white pt-0.5 px-3 text-xs">
        {{ product.discount }}%
      </span>
      <button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer"
        @click="$emit('toggle-favorite', product)">
        <Heart :class="{ 'text-red-500': product.favorite, 'text-gray-300': !product.favorite }" size="24" />
      </button>
    </div>
    <div class="px-5 pb-2">
      <h3 class="text-md font-semibold text-center">{{ product.name }}</h3>
      <div class="flex flex-col items-end mt-3">
        <p class="text-gray-500 text-sm line-through">{{ Number(product.discountedPrice).toLocaleString('fa-IR') }}</p>
        <UButton v-if="product.discount">
          {{ Number(product.price).toLocaleString('fa-IR') }} تومان
        </UButton>
      </div>
    </div>
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
