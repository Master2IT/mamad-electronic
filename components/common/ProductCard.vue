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
      <h3 class="text-[14px] md:text-md font-semibold text-center line-clamp-1">{{ product.name }}</h3>
      <div v-if="showReview" class="flex gap-1 items-center justify-end my-3 text-sm">
        <span class="text-neutral-400 mt-0.5">(43 نظر)</span>
        <div class="text-yellow-500 flex items-center font-medium">
          <span class="mt-0.5">4.4</span>
          <Icon name="medal-star" size="18" />
        </div>
      </div>
      <div :class="['flex items-end mt-3', { 'flex-col': type == 1 }, { 'justify-between gap-2': type == 2 }]">
        <p class="text-gray-500 hidden md:block text-sm line-through">{{
          Number(product.discountedPrice).toLocaleString('fa-IR') }}</p>
        <UButton v-if="product.discount" class="!gap-1" size="sm" :block="type == 2">
          <span class="!font-bold text-[14px]">
            {{ Number(product.price).toLocaleString('fa-IR') }}
          </span>تومان
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
import Icon from '../common/Icon.vue';

defineProps({
  product: {
    type: Object,
    required: true
  },
  type: {
    type: Number,
    default: 1
  },
  showReview: {
    type: Boolean,
    default: false
  }
})
</script>
