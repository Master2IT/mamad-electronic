<template>
  <div class="relative rounded-md w-full shadow-sm bg-[#F7F7F7]">
    <div class="relative p-5">
      <NuxtImg :src="product.image" :alt="product.name" class="h-[200px] w-[250px] object-cover rounded-md" />
      <span v-if="product.discount" class="absolute top-2.5 left-2.5 badge-error text-white badge font-bold badge-sm">
        -{{ product.discount }}%
      </span>
      <button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer"
        @click="$emit('toggle-favorite', product)">
        <Heart :class="{ 'text-red-500': product.favorite, 'text-gray-300': !product.favorite }" size="24" />
      </button>
    </div>
    <div class="px-5 py-2">
      <h3 class="text-md font-semibold text-center">{{ product.name }}</h3>
      <div class="flex flex-col items-end mt-5">
        <p class="font-bold text-gray-600">{{ product.discountedPrice }} تومان</p>
        <button v-if="product.discount" class="btn btn-primary mt-1">
          {{ product.price }} تومان
        </button>
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
