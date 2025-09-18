<template>
  <NuxtLink external :to="`/products/${product?.id}/${product?.slug}`">
    <div
      :class="['relative rounded-md w-full shadow-sm border-0 bg-[#F7F7F7] select-none', { '!h-[300px]': !product.final_price?.discount_price }]">
      <div class="relative p-0 flex justify-center items-center">
        <NuxtImg :src="`${BASE_URL}/${product?.banner?.path || product?.file?.path}`" :alt="product.title_fa"
          class="h-[200px] w-[200px] object-contain rounded-md" />
        <span v-if="product?.final_price?.discount_price"
          class="absolute top-2.5 left-2.5 bg-red-500 rounded-full text-white pt-0.5 px-3 text-xs">
          {{ product?.final_price?.discount_value }} {{ product?.final_price?.discount_type?.toLowerCase() ==
            'percent' ? '%' : 'تومان' }}
        </span>
        <button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer" @click="toggleFavorite">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              :fill="product.best ? '#ef4444' : 'none'" :stroke="product.best ? '#ef4444' : '#d1d5db'" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="px-5 pb-2">
        <UTooltip :text="product.name" :content="{ side: 'top' }">
          <h3 class="text-md font-semibold text-center line-clamp-1">{{ product.title_fa }}</h3>
        </UTooltip>
        <div v-if="showReview" class="flex gap-1 items-center justify-end my-3 text-sm">
          <span class="text-neutral-400 mt-0.5">(43 نظر)</span>
          <div class="text-yellow-500 flex items-center font-medium">
            <span class="mt-0.5">4.4</span>
            <Icon name="medal-star" size="18" />
          </div>
        </div>
        <div :class="['flex items-end mt-3', { 'flex-col': type == 1 }, { 'justify-between gap-2': type == 2 }]">
          <p class="text-gray-500 text-sm line-through">{{
            Number(product?.final_price?.discount_price).toLocaleString('fa-IR') }}</p>
          <UButton v-if="product.final_price?.discount_price" class="!gap-1" size="sm" :block="type == 2">
            <span class="!font-bold text-[14px]">
              {{ Number(product?.final_price?.price).toLocaleString('fa-IR') }}
            </span>تومان
          </UButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { createFavorite } from '~/api/customer-api';
import Icon from '../common/Icon.vue';
const BASE_URL = process.env.BASE_URL;

const props = defineProps({
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

const toggleFavorite = async (e) => {
  e.preventDefault()
  e.stopPropagation()
  try {
    await createFavorite('Product', props.product.id)
  } catch (error) {
    console.error('Error toggling favorite:', error)
  }
}
</script>
